# pantaleontech.com

Personal site for Raphael Pantaleão. Plain HTML, CSS and JavaScript — no build step, no dependencies, no framework. Hosted on GitHub Pages.

## What's here

```
index.html                 the whole page structure
404.html                   bilingual not-found page
CNAME                      pantaleontech.com
.nojekyll                  tells Pages to serve files as-is
robots.txt / sitemap.xml   SEO
assets/
  style.css                all styles, dark + light via CSS variables
  content.js               ALL site copy, EN and PT-BR  ← edit here
  app.js                   theme, language, rendering, live feeds
  make_cv.py               generates both CV PDFs
  Raphael_Pantaleao_CV_EN.pdf
  Raphael_Pantaleao_CV_PT.pdf
  raphael.jpg              profile photo (640px)
  favicon.svg
```

## Deploying to GitHub Pages

1. Create a public repo named **`raphaelpanta.github.io`** on GitHub.
2. Push these files to the `main` branch:

   ```bash
   cd raphaelpanta.github.io
   git init
   git add .
   git commit -m "Personal site"
   git branch -M main
   git remote add origin git@github.com:raphaelpanta/raphaelpanta.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. The `CNAME` file already requests `pantaleontech.com`. At your DNS provider add:

   | Type  | Name | Value |
   |-------|------|-------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | raphaelpanta.github.io |

5. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate is issued (can take up to an hour).

If you'd rather serve the site from a repo that isn't `<username>.github.io`, everything still works — just remove `CNAME` or point it elsewhere, and note that a project repo serves from `/<repo-name>/`.

## Editing content

**Everything you'd want to change lives in `assets/content.js`.** It's one file with two language blocks (`I18N.en` and `I18N.pt`) plus small standalone lists for talks, certifications and education.

- Change a job bullet → find it in `I18N.en.experience.items` and its twin in `I18N.pt.experience.items`.
- Add a job → add the same object to both arrays. Keys: `company`, `role`, `period`, `location`, `bullets` (array), `stack` (array), optional `featured: true`.
- Change the headline numbers → `I18N.<lang>.metrics.items`.
- Change links or the email → the `LINKS` object at the top.

The first 5 roles show by default; the rest are behind "Show earlier roles". Change `VISIBLE_ROLES` in `app.js` to adjust.

**Keep both languages in sync.** The page falls back to English if a Portuguese key is missing, so a mismatch shows up as an English string in the middle of a Portuguese page.

## Themes and language

- Theme starts on **System** and follows `prefers-color-scheme`. The header button cycles System → Light → Dark and remembers the choice in `localStorage`.
- Language auto-detects from the browser (`pt*` → Portuguese, anything else → English) and is overridable with the EN/PT switch, also remembered.
- Both are applied before first paint by a small inline script in `<head>`, so there's no flash of the wrong theme.

## Live feeds

**GitHub** — `https://api.github.com/users/raphaelpanta/repos`, called directly from the browser. No token, no key. Unauthenticated GitHub allows 60 requests/hour per visitor IP, which is far more than a portfolio needs. Forks, archived repos, the profile README repo and this repo are filtered out; repos with a description rank first. Give a repo a good one-line description and it will show up well.

**Medium** — Medium has no public API, so the RSS feed at `medium.com/feed/@raphaelpanta` is converted to JSON by `api.rss2json.com`, a free public proxy. This is the one external dependency in the site. If rss2json ever goes away, the section degrades to a "read them on Medium" link rather than breaking — but you'd want to swap in another RSS-to-JSON service (or a small GitHub Action that writes `assets/posts.json` on a schedule).

**LinkedIn** — there is no embed. LinkedIn has no public API for profile or post data and actively blocks scraping, so the LinkedIn card is a static link. Any product claiming to embed a live LinkedIn feed is either a paid third-party widget or a scraper that will break.

Both feeds are cached in `localStorage` for one hour, so repeat visits don't re-request.

## Regenerating the CVs

```bash
pip install reportlab
python3 assets/make_cv.py
```

Both PDFs are ATS-safe: single column, no tables or images, real selectable text, standard Helvetica, two pages each. Content comes from the same facts as the site — edit the `EN` and `PT` dicts in `make_cv.py`.

## Local preview

Open `index.html` directly in a browser, or:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000. (The live feeds work either way — both APIs allow cross-origin requests.)
