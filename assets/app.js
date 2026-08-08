/* ==================================================================
   app.js — theme, language, rendering, live feeds.
   No build step, no dependencies.
   ================================================================== */

(function () {
  "use strict";

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ============================ THEME ============================ */

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const MODES = ["auto", "light", "dark"];
  let themeMode = store.get("theme") || "auto";

  function applyTheme() {
    const dark = themeMode === "dark" || (themeMode === "auto" && mq.matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    const btn = $("#themeBtn");
    btn.setAttribute("data-mode", themeMode);
    const labels = (I18N[lang] || I18N.en).ui;
    const name = themeMode === "auto" ? labels.themeAuto : themeMode === "dark" ? labels.themeDark : labels.themeLight;
    btn.setAttribute("aria-label", labels.themeLabel + ": " + name);
    btn.setAttribute("title", labels.themeLabel + ": " + name);
    $("#themeState").textContent = name;
  }

  $("#themeBtn").addEventListener("click", () => {
    themeMode = MODES[(MODES.indexOf(themeMode) + 1) % MODES.length];
    store.set("theme", themeMode);
    applyTheme();
  });
  mq.addEventListener("change", () => { if (themeMode === "auto") applyTheme(); });

  /* ========================== LANGUAGE =========================== */

  let lang = store.get("lang");
  if (!lang || !I18N[lang]) {
    lang = (navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en";
  }

  function t(path) {
    const v = get(I18N[lang], path);
    return v == null ? get(I18N.en, path) : v;
  }

  function setLang(next) {
    lang = I18N[next] ? next : "en";
    store.set("lang", lang);
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    render();
  }

  $$("#langSwitch button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  /* ========================== RENDERING ========================== */

  function renderStrings() {
    document.title = t("meta.title");
    const d = $('meta[name="description"]');
    if (d) d.setAttribute("content", t("meta.description"));

    $$("[data-i18n]").forEach((n) => {
      const v = t(n.dataset.i18n);
      if (typeof v === "string") n.innerHTML = v;
    });

    $$("#langSwitch button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  function renderMetrics() {
    const box = $("#metrics");
    box.innerHTML = "";
    t("metrics.items").forEach((m) => {
      const c = el("div", "metric reveal");
      c.innerHTML =
        '<div class="v">' + esc(m.value) + "</div>" +
        '<div class="l">' + esc(m.label) + "</div>" +
        '<div class="n">' + esc(m.note) + "</div>";
      box.appendChild(c);
    });
  }

  function renderAbout() {
    const p = $("#aboutProse");
    p.innerHTML = t("about.paras").map((x) => "<p>" + x + "</p>").join("");

    const dl = $("#factsList");
    dl.innerHTML = "";
    t("about.facts").forEach(([k, v]) => {
      dl.appendChild(el("dt", null, esc(k)));
      dl.appendChild(el("dd", null, esc(v)));
    });
  }

  const VISIBLE_ROLES = 5;
  let rolesExpanded = false;

  function renderExperience() {
    const tl = $("#timeline");
    tl.innerHTML = "";
    const items = t("experience.items");

    items.forEach((job, i) => {
      const wrap = el("div", "job reveal" + (job.featured ? " featured" : "") +
        (i >= VISIBLE_ROLES && !rolesExpanded ? " hidden-role" : ""));
      wrap.innerHTML =
        '<div class="job-inner">' +
          '<div class="job-head">' +
            '<span class="job-company">' + esc(job.company) + "</span>" +
            '<span class="job-period">' + esc(job.period) + "</span>" +
          "</div>" +
          '<p class="job-role">' + esc(job.role) + "</p>" +
          '<p class="job-loc">' + esc(job.location) + "</p>" +
          "<ul>" + job.bullets.map((b) => "<li>" + esc(b) + "</li>").join("") + "</ul>" +
          '<div class="chips">' + job.stack.map((s) => '<span class="chip">' + esc(s) + "</span>").join("") + "</div>" +
        "</div>";
      tl.appendChild(wrap);
    });

    const btn = $("#moreRoles");
    btn.textContent = rolesExpanded ? t("experience.showLess") : t("experience.showMore");
    btn.style.display = items.length > VISIBLE_ROLES ? "" : "none";
  }

  $("#moreRoles").addEventListener("click", () => {
    rolesExpanded = !rolesExpanded;
    renderExperience();
    observeReveals();
    const anchor = $("#experience");
    if (!rolesExpanded && anchor.scrollIntoView) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  function renderSkills() {
    const g = $("#skillGrid");
    g.innerHTML = "";
    t("skills.groups").forEach((grp) => {
      const c = el("div", "skill-card reveal");
      c.innerHTML = "<h3>" + esc(grp.name) + "</h3>" +
        '<div class="chips">' + grp.items.map((s) => '<span class="chip">' + esc(s) + "</span>").join("") + "</div>";
      g.appendChild(c);
    });

    $("#certList").innerHTML = (CERTS[lang] || CERTS.en).map((c) => "<li>" + esc(c) + "</li>").join("");

    $("#eduList").innerHTML = EDUCATION.map((e) => {
      const d = e[lang] || e.en;
      return "<li><div class=\"d\">" + esc(d.degree) + "</div>" +
             "<div class=\"s\">" + esc(d.school) + "</div>" +
             "<div class=\"y\">" + esc(e.years) + "</div></li>";
    }).join("");
  }

  function renderTalks() {
    $("#talkList").innerHTML = TALKS.map((k) => {
      const d = k[lang] || k.en;
      return "<li><span class=\"ty\">" + esc(k.year) + "</span><div>" +
             "<div class=\"tt\">" + esc(d.title) + "</div>" +
             "<div class=\"to\">" + esc(d.org) + "</div>" +
             "<div class=\"td\">" + esc(d.desc) + "</div></div></li>";
    }).join("");
  }

  const NET_ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.25h4.5V24H.24zM8.34 8.25h4.31v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-4.5z"/></svg>',
    github:   '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
    medium:   '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>'
  };

  function renderConnect() {
    const g = $("#connectGrid");
    const nets = [
      { key: "linkedin", url: LINKS.linkedin, handle: "in/raphael-pantaleao" },
      { key: "github",   url: LINKS.github,   handle: "@raphaelpanta" },
      { key: "medium",   url: LINKS.medium,   handle: "@raphaelpanta" }
    ];
    g.innerHTML = nets.map((n) => {
      const c = t("connect." + n.key);
      return '<a class="connect-card reveal" data-net="' + n.key + '" href="' + n.url + '" target="_blank" rel="noopener">' +
        '<span class="connect-icon">' + NET_ICONS[n.key] + "</span>" +
        "<h3>" + esc(c.name) + "</h3>" +
        "<p>" + esc(c.desc) + "</p>" +
        '<span class="connect-handle">' + esc(n.handle) + "</span></a>";
    }).join("");
  }

  function renderLinks() {
    const cv = lang === "pt" ? LINKS.cv_pt : LINKS.cv_en;
    $("#heroCV").href = cv;
    $("#cvEn").href = LINKS.cv_en;
    $("#cvPt").href = LINKS.cv_pt;
    $("#heroMail").href = "mailto:" + LINKS.email;
    const cm = $("#contactMail");
    cm.href = "mailto:" + LINKS.email;
    cm.textContent = LINKS.email;
    $("#year").textContent = new Date().getFullYear();
  }

  function render() {
    renderStrings();
    renderMetrics();
    renderAbout();
    renderExperience();
    renderSkills();
    renderTalks();
    renderConnect();
    renderLinks();
    applyTheme();
    renderPosts();   // re-render cached feed data in the new language
    renderRepos();
    observeReveals();
  }

  /* ======================== LIVE FEEDS =========================== */

  const GH_USER = "raphaelpanta";
  const MEDIUM_USER = "raphaelpanta";
  const CACHE_TTL = 60 * 60 * 1000; // 1 hour

  function cacheGet(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const o = JSON.parse(raw);
      if (Date.now() - o.at > CACHE_TTL) return null;
      return o.data;
    } catch (e) { return null; }
  }
  function cacheSet(key, data) {
    try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data: data })); } catch (e) {}
  }

  function fmtDate(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-GB",
      { year: "numeric", month: "short", day: "numeric" });
  }

  /* ---- Medium (RSS → JSON via public proxy) ---- */

  let POSTS = null;

  function renderPosts() {
    const grid = $("#postGrid");
    if (POSTS === null) return;            // still loading — keep skeletons
    grid.innerHTML = "";
    if (!POSTS.length) {
      grid.appendChild(el("div", "feed-empty", esc(t("writing.empty"))));
      return;
    }
    POSTS.forEach((p) => {
      const card = el("a", "post-card reveal");
      card.href = p.link; card.target = "_blank"; card.rel = "noopener";
      card.innerHTML =
        (p.thumb ? '<img class="post-thumb" src="' + esc(p.thumb) + '" alt="" loading="lazy">' : "") +
        '<div class="post-body">' +
          '<div class="post-date">' + esc(fmtDate(p.date)) + "</div>" +
          '<h3 class="post-title">' + esc(p.title) + "</h3>" +
          '<p class="post-excerpt">' + esc(p.excerpt) + "</p>" +
          '<div class="post-tags">' + p.tags.slice(0, 3).map((x) => '<span class="chip">' + esc(x) + "</span>").join("") + "</div>" +
        "</div>";
      grid.appendChild(card);
    });
    observeReveals();
  }

  function loadMedium() {
    const cached = cacheGet("feed:medium");
    if (cached) { POSTS = cached; renderPosts(); return; }

    const feed = encodeURIComponent("https://medium.com/feed/@" + MEDIUM_USER);
    fetch("https://api.rss2json.com/v1/api.json?rss_url=" + feed)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        if (d.status !== "ok" || !Array.isArray(d.items)) throw new Error("bad feed");
        POSTS = d.items.slice(0, 6).map((it) => {
          const text = (it.content || it.description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
          let thumb = it.thumbnail || "";
          if (!thumb) {
            const m = /<img[^>]+src="([^"]+)"/i.exec(it.content || "");
            if (m) thumb = m[1];
          }
          return {
            title: it.title || "",
            link: (it.link || "").split("?")[0],
            date: it.pubDate || "",
            thumb: thumb,
            excerpt: text.slice(0, 165) + (text.length > 165 ? "…" : ""),
            tags: it.categories || []
          };
        });
        cacheSet("feed:medium", POSTS);
        renderPosts();
      })
      .catch(() => { POSTS = []; renderPosts(); });
  }

  /* ---- GitHub (public REST API, no token) ---- */

  let REPOS = null;

  const LANG_COLORS = {
    Kotlin: "#A97BFF", Java: "#b07219", TypeScript: "#3178c6", JavaScript: "#f1e05a",
    Python: "#3572A5", Go: "#00ADD8", "C#": "#178600", HTML: "#e34c26", CSS: "#563d7c",
    Shell: "#89e051", Dockerfile: "#384d54", Ruby: "#701516", Rust: "#dea584", Scala: "#c22d40"
  };

  function renderRepos() {
    const grid = $("#repoGrid");
    if (REPOS === null) return;
    grid.innerHTML = "";
    if (!REPOS.length) {
      grid.appendChild(el("div", "feed-empty", esc(t("code.empty"))));
      return;
    }
    REPOS.forEach((r) => {
      const card = el("a", "repo-card reveal");
      card.href = r.url; card.target = "_blank"; card.rel = "noopener";
      const color = LANG_COLORS[r.language] || "var(--g4)";
      card.innerHTML =
        '<div class="repo-body">' +
          '<h3 class="repo-name"><svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/></svg>' +
            esc(r.name) + "</h3>" +
          '<p class="repo-desc">' + esc(r.description || "—") + "</p>" +
          '<div class="repo-meta">' +
            (r.language ? '<span><i class="dot" style="background:' + color + '"></i>' + esc(r.language) + "</span>" : "") +
            (r.stars ? '<span><svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M8 .25l2.24 4.54 5.01.73-3.62 3.53.85 4.99L8 11.69l-4.48 2.35.85-4.99L.75 5.52l5.01-.73Z"/></svg>' + r.stars + "</span>" : "") +
            "<span>" + esc(t("code.updated")) + " " + esc(fmtDate(r.updated)) + "</span>" +
          "</div>" +
        "</div>";
      grid.appendChild(card);
    });
    observeReveals();
  }

  function loadGitHub() {
    const cached = cacheGet("feed:github");
    if (cached) { REPOS = cached; renderRepos(); return; }

    fetch("https://api.github.com/users/" + GH_USER + "/repos?sort=updated&per_page=100", {
      headers: { Accept: "application/vnd.github+json" }
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((list) => {
        if (!Array.isArray(list)) throw new Error("bad payload");
        const skip = [GH_USER, GH_USER + ".github.io"];   // profile README + this site
        const score = (r) => (r.description ? 4 : 0) + (r.stargazers_count > 0 ? 2 : 0) + (r.homepage ? 1 : 0);
        REPOS = list
          .filter((r) => !r.fork && !r.archived && !r.private &&
                         skip.indexOf(r.name.toLowerCase()) === -1)
          .sort((a, b) =>
            (score(b) - score(a)) ||
            (b.stargazers_count - a.stargazers_count) ||
            (new Date(b.pushed_at) - new Date(a.pushed_at)))
          .slice(0, 6)
          .map((r) => ({
            name: r.name,
            description: r.description,
            language: r.language,
            stars: r.stargazers_count,
            updated: r.pushed_at,
            url: r.html_url
          }));
        cacheSet("feed:github", REPOS);
        renderRepos();
      })
      .catch(() => { REPOS = []; renderRepos(); });
  }

  /* ========================= INTERACTIONS ======================== */

  let observer;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("in"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: .06 });
    }
    $$(".reveal:not(.in)").forEach((n, i) => {
      n.style.transitionDelay = Math.min(i % 6, 5) * 55 + "ms";
      observer.observe(n);
    });
  }

  // header state + scroll progress + active nav link
  const header = $("#siteHeader");
  const progress = $("#progress");

  // Sections in DOM order — NOT the order of the nav links. Reading them from the
  // document keeps the active-link logic correct if sections are ever reordered.
  const sections = $$("main section[id]");

  // The anchor offset must match the real header height, otherwise clicking a nav
  // link leaves the section heading tucked underneath it.
  function syncHeaderOffset() {
    const h = header.offsetHeight || 72;
    document.documentElement.style.setProperty("--header-h", h + "px");
  }
  syncHeaderOffset();
  window.addEventListener("resize", () => {
    syncHeaderOffset();
    // Widening past the breakpoint should leave the drawer closed, not merely
    // invisible — otherwise the burger reopens mid-state on the way back down.
    if (window.innerWidth > 980) closeMenu();
  });

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("stuck", y > 8);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";

    const line = (header.offsetHeight || 72) + 24;
    let current = "";
    sections.forEach((n) => {
      if (n.getBoundingClientRect().top <= line) current = n.id;
    });
    $$(".nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile menu
  const burger = $("#burger"), mobileNav = $("#mobileNav");

  function closeMenu() {
    burger.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }

  closeMenu();   // guarantee a closed starting state

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });

  // Escape closes the drawer, as expected of any dismissible overlay.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileNav.hidden) { closeMenu(); burger.focus(); }
  });
  // Close the menu BEFORE scrolling. If the browser jumps to the anchor while the
  // menu is still taking up space, the target lands behind the header once it closes.
  $$("#mobileNav a").forEach((a) => a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    closeMenu();
    if (target) {
      e.preventDefault();
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", a.getAttribute("href"));
      });
    }
  }));

  // copy email
  $("#copyMail").addEventListener("click", function () {
    const label = this.querySelector("span");
    const done = () => {
      label.textContent = t("ui.copied");
      setTimeout(() => { label.textContent = t("ui.copy"); }, 1600);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(LINKS.email).then(done, done);
    else done();
  });

  /* ============================ BOOT ============================= */

  render();
  onScroll();
  loadMedium();
  loadGitHub();
})();
