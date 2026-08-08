/* ------------------------------------------------------------------
   content.js — all site copy, both languages.
   Edit here to change what the site says. Nothing else needs touching.
   ------------------------------------------------------------------ */

const LINKS = {
  github:   "https://github.com/raphaelpanta",
  linkedin: "https://www.linkedin.com/in/raphael-pantaleao",
  medium:   "https://medium.com/@raphaelpanta",
  email:    "raphael@pantaleontech.com",
  phone:    "+55 11 95868-4638",
  cv_en:    "assets/Raphael_Pantaleao_CV_EN.pdf",
  cv_pt:    "assets/Raphael_Pantaleao_CV_PT.pdf"
};

/* Talks & community — edit freely */
const TALKS = [
  {
    year: "2024–2025",
    en: { title: "Mentor — Desenvolve program", org: "Grupo Boticário",
          desc: "Mentoring developers entering the company's engineering track." },
    pt: { title: "Mentor — programa Desenvolve", org: "Grupo Boticário",
          desc: "Mentoria de pessoas desenvolvedoras na trilha de engenharia da empresa." }
  },
  {
    year: "2023",
    en: { title: "Internal talks: GraphQL, Apollo Server & Spring Reactor", org: "Grupo Boticário",
          desc: "Sessions for the marketplace value stream on reactive backends and federated APIs." },
    pt: { title: "Talks internas: GraphQL, Apollo Server e Spring Reactor", org: "Grupo Boticário",
          desc: "Sessões para o value stream de marketplace sobre backends reativos e APIs federadas." }
  },
  {
    year: "2016–2017",
    en: { title: "Organizer & writer — GDG Aracaju", org: "Google Developer Group",
          desc: "Ran and wrote about Android Day, Women Techmakers and Google I/O Extended editions." },
    pt: { title: "Organizador e autor — GDG Aracaju", org: "Google Developer Group",
          desc: "Organizei e escrevi sobre as edições do Android Day, Women Techmakers e Google I/O Extended." }
  },
  {
    year: "2010",
    en: { title: "IEEE publication — autonomous mobile robots", org: "Universidade Federal de Sergipe",
          desc: "Pervasive communication and autonomous decision making in a domestic mobile robot: particle-filter localization and Bayesian decision-making." },
    pt: { title: "Publicação IEEE — robôs móveis autônomos", org: "Universidade Federal de Sergipe",
          desc: "Comunicação pervasiva e tomada de decisão autônoma em um robô móvel doméstico: localização por filtro de partículas e decisão bayesiana." }
  }
];

const CERTS = {
  en: [
    "Advanced Scala and Functional Programming — Rock the JVM",
    "Functional Programming Principles in Scala — EPFL",
    "Oracle Certified Associate, Java SE",
    "Oracle Certified Associate, Oracle WebLogic Server 11g",
    "Microservices with Istio and IBM Cloud Kubernetes Service"
  ],
  pt: [
    "Advanced Scala and Functional Programming — Rock the JVM",
    "Functional Programming Principles in Scala — EPFL",
    "Oracle Certified Associate, Java SE",
    "Oracle Certified Associate, Oracle WebLogic Server 11g",
    "Microsserviços com Istio e IBM Cloud Kubernetes Service"
  ]
};

const EDUCATION = [
  {
    years: "2024–2025",
    en: { degree: "Postgraduate — Development Leadership", school: "FIAP" },
    pt: { degree: "Pós-graduação — Dev Leadership", school: "FIAP" }
  },
  {
    years: "2022–2023",
    en: { degree: "Postgraduate — Distributed Software Architecture", school: "PUC Minas" },
    pt: { degree: "Pós-graduação — Arquitetura de Software Distribuído", school: "PUC Minas" }
  },
  {
    years: "2006–2010",
    en: { degree: "BSc Computer Science", school: "Universidade Federal de Sergipe" },
    pt: { degree: "Bacharelado em Ciência da Computação", school: "Universidade Federal de Sergipe" }
  }
];

/* ---------------------------- i18n ---------------------------- */

const I18N = {
  en: {
    meta: {
      title: "Raphael Pantaleão — Senior Backend Engineer",
      description: "Senior Backend Engineer. 15 years in Brazilian fintech, e-commerce and marketplaces. Kotlin, Java, Spring Boot, Kafka, AWS. Systems at 35M+ requests/month."
    },
    nav: { about: "About", impact: "Impact", experience: "Experience", skills: "Skills",
           writing: "Writing", code: "Code", contact: "Contact" },
    ui: {
      langLabel: "Language", themeLabel: "Theme",
      themeLight: "Light", themeDark: "Dark", themeAuto: "System",
      downloadCV: "Download CV", viewAll: "View all", loading: "Loading…",
      backToTop: "Back to top", skipToContent: "Skip to content",
      copied: "Copied", copy: "Copy email"
    },
    hero: {
      eyebrow: "Senior Backend Engineer · São Paulo, Brazil · UTC−3",
      name: "Raphael Pantaleão",
      tagline: "I build backends that hold up under load.",
      blurb: "Payment flows on Black Friday. Marketplace quoting under traffic spikes. Financial platforms handling 35M+ requests a month. Fifteen years in, mostly Brazilian fintech and marketplaces — Grupo Boticário, PicPay, C6 Bank, Zup, Ame Digital, ThoughtWorks.",
      ctaPrimary: "Get in touch", ctaSecondary: "Download CV",
      availability: "Open to senior / staff backend roles — remote"
    },
    metrics: {
      title: "Selected results",
      items: [
        { value: "35M+",  label: "requests/month",     note: "~2TB/month across 6+ integrations, unified under one governance pipeline" },
        { value: "60%",   label: "cloud cost cut",     note: "~US$18k/month (~R$1.1M/year) across 4 squads via a FinOps initiative" },
        { value: "240+",  label: "vulnerabilities eliminated", note: "80% reduction in high & critical findings — hit the value stream's OKR" },
        { value: "5×",    label: "faster quoting",     note: "1000ms → 200ms response time in a high-traffic marketplace" },
        { value: "30%",   label: "fewer machines",     note: "Black Friday load absorbed with 30% less infrastructure after a WebFlux rewrite" },
        { value: "15",    label: "years shipping",     note: "From public-sector Java to distributed fintech platforms" }
      ]
    },
    about: {
      title: "About",
      paras: [
        "My work sits where architecture meets the P&amp;L. The systems I design get judged on latency, reliability, and what they cost to run — and I've learned that the hardest part is rarely the code. It's convincing Tech Managers to fund the change, then coaching the developers who ship it.",
        "Most of what I'm proud of started as something nobody had asked for: an observability blind spot nobody had named, four squads quietly overspending on EC2, 300 open vulnerabilities that everyone had learned to scroll past. I like finding those, sizing the business case, and then actually driving the fix across teams.",
        "Earlier there was undergraduate research on autonomous mobile robots — particle-filter localization, Bayesian decision-making, published by IEEE. The problem shape hasn't changed much: imperfect information, distributed state, decisions under uncertainty."
      ],
      lookingTitle: "What I'm looking for",
      looking: "Senior or Staff backend roles at product-led companies — fintech, e-commerce, complex marketplaces — where architectural decisions are made deliberately and engineering has a voice at the leadership table. Remote, from Brazil.",
      factsTitle: "Quick facts",
      facts: [
        ["Location", "Greater São Paulo, Brazil (UTC−3)"],
        ["Languages", "Portuguese (native), English (fluent, C1–C2)"],
        ["Work setup", "Remote — Brazil, LATAM or global"],
        ["Contract", "CLT, PJ or international contractor"]
      ]
    },
    experience: {
      title: "Experience",
      subtitle: "Fifteen years, mostly backend, mostly at scale.",
      showMore: "Show earlier roles", showLess: "Show fewer roles",
      current: "Present",
      items: [
        {
          company: "Grupo Boticário", role: "Senior Backend Engineer (Software Specialist II) — Digital Financial Products",
          period: "Aug 2024 — Present", location: "Remote · São Paulo", featured: true,
          stack: ["Kotlin", "Apigee", "Kafka", "GCP", "New Relic", "AWS", "Kubecost"],
          bullets: [
            "Found a critical observability blind spot: 6+ fragmented third-party integrations (WhatsApp, phone, web, backend processors) handling 35M+ requests/month (~2TB) with no unified visibility. Designed a serverless API governance pipeline on Apigee, Kafka, GCP and New Relic — proactive alerting cut customer-facing incidents, and the behavioural data it exposed drove an 80% reduction in unfinished debt-recovery contracts, recovering ~R$1M/year.",
            "Led a cross-squad FinOps initiative across 4 squads running over-provisioned EC2 and RDS. Introduced Kubecost, AWS Cost Calculator and internal dashboards, negotiated architectural changes with Tech Managers, coached developers, tracked it in monthly reports. 60% cloud cost reduction — ~US$18k/month, ~R$1.1M/year.",
            "Led security hardening across the same 4 squads: 300+ unresolved high/critical vulnerabilities, no unified remediation strategy. Implemented SAST, GitHub Dependabot and Docker image hardening; defined the remediation plan and negotiated prioritisation. 240+ vulnerabilities eliminated — 80% reduction, hitting the stream's OKR."
          ]
        },
        {
          company: "Grupo Boticário", role: "Senior Backend Engineer — Marketplace Seller Support",
          period: "Jan 2024 — Jul 2024", location: "Remote · São Paulo",
          stack: ["Kotlin", "Spring Boot", "JWT", "AWS"],
          bullets: [
            "Built the Seller Center notifications module for a marketplace serving ~3,000 sellers — automated comms for critical seller actions. Issue resolution time down 30%, support tickets down 25%.",
            "Designed the Seller Center FAQ module with dynamically managed content and relevance-based search — 60% fewer support tickets on common questions."
          ]
        },
        {
          company: "Grupo Boticário", role: "Senior Backend Engineer — Marketplace-Out",
          period: "Feb 2023 — Dec 2023", location: "Remote · São Paulo",
          stack: ["Kotlin", "GraphQL", "Spring Reactor", "New Relic", "Opsgenie"],
          bullets: [
            "Cut dynamic quoting latency from 1000ms to 200ms by isolating bottlenecks in both application code and infrastructure.",
            "Hardened partner integrations with circuit breakers and fallbacks — lower cost, faster detection of inconsistencies.",
            "Security champion for the squad; on-call for production incidents; gave the team's Spring Reactor and GraphQL talks."
          ]
        },
        {
          company: "Grupo Boticário", role: "Senior Backend Engineer — Marketplace-In Consumer",
          period: "Mar 2022 — Jan 2023", location: "Remote · São Paulo",
          stack: ["Kotlin", "GraphQL", "Spring Boot"],
          bullets: [
            "Built the module connecting sellers to internal backoffice tools — the platform scaled from 5 to ~3,000 sellers with fast issue turnaround.",
            "Advocated for and led GraphQL adoption across the value stream."
          ]
        },
        {
          company: "PicPay", role: "Senior Backend Engineer — Open Banking",
          period: "Jun 2021 — Feb 2022", location: "São Paulo",
          stack: ["Kotlin", "Spring Boot", "Hexagonal architecture", "TDD"],
          bullets: [
            "Designed and built consent management for Open Banking, integrating with major financial institutions' APIs under strict data-security requirements.",
            "Acted as technical lead: hexagonal architecture, pair programming, test automation, TDD; mentored new developers and interviewed candidates."
          ]
        },
        {
          company: "Zup Innovation", role: "Senior Software Engineer",
          period: "Nov 2020 — Jun 2021", location: "São Paulo",
          stack: ["Java", "Kotlin", "Spring Boot"],
          bullets: [
            "Led credit card product recommendation systems, materially raising card acquisition rates.",
            "Supported the team's migration from Java to Kotlin."
          ]
        },
        {
          company: "C6 Bank", role: "Senior Software Engineer",
          period: "Oct 2019 — Nov 2020", location: "São Paulo",
          stack: ["Kotlin", "Java", "Salesforce", "REST"],
          bullets: [
            "Built Salesforce CRM integrations that cut service time by up to 30%.",
            "Co-built the payment machine acquisition system, raising conversion.",
            "Integrated chatbot APIs, reducing response time and human handoffs."
          ]
        },
        {
          company: "Objective Solutions", role: "Senior Java/.NET Developer",
          period: "Apr 2019 — Oct 2019", location: "Brazil",
          stack: ["Java", ".NET", "SQL"],
          bullets: ["Delivered high-performance accounting reporting for a client's core financial reporting stack."]
        },
        {
          company: "Ame Digital", role: "Senior Backend Engineer",
          period: "Sep 2018 — Apr 2019", location: "São Paulo",
          stack: ["Java", "Spring WebFlux", "Reactor", "Microservices"],
          bullets: [
            "Led the refactor of the monolithic wallet service into microservices, specialising the wallet for movement registration.",
            "Rebuilt hot paths on Spring WebFlux — Black Friday load absorbed with 30% fewer machines."
          ]
        },
        {
          company: "Invillia", role: ".NET Developer / Java Backend Developer",
          period: "Jun 2017 — Sep 2018", location: "Araras, Brazil",
          stack: ["Java", ".NET", "Microservices"],
          bullets: [
            "Redesigned backoffice and fraud-detection applications for outsourced clients.",
            "Built a cache layer for data bureau responses — ~50% savings on API query costs.",
            "Broke a monolithic anti-fraud module into microservices, moving releases from bi-weekly to on-demand."
          ]
        },
        {
          company: "SergipeTec", role: "Senior .NET Developer / Java Developer",
          period: "Nov 2014 — Jun 2017", location: "Aracaju, Brazil",
          stack: [".NET", "Java", "SSO"],
          bullets: [
            "Led .NET standards adoption: 30% efficiency gain, 25% fewer bugs.",
            "Built internal high-performance libraries and a private NuGet server — 40% less development time.",
            "Split systems into independent modules (50% faster deploys) and implemented SSO (60% fewer auth issues)."
          ]
        },
        {
          company: "ITConsulting", role: "Software Developer",
          period: "Jun 2013 — Jul 2014", location: "Aracaju, Brazil",
          stack: ["Java", "SQL"],
          bullets: [
            "Built a resume submission and management platform integrated with existing HR systems — 30% more efficient candidate data handling.",
            "Helped design a public-services process management system projected to serve 5,000+ citizens/month."
          ]
        },
        {
          company: "ThoughtWorks", role: "Consultant Developer",
          period: "Jan 2013 — Apr 2013", location: "Porto Alegre, Brazil",
          stack: ["Java", "Apache Solr", "Lucene"],
          bullets: [
            "Improved faceted search and result relevance for a US e-commerce client using Solr and Lucene — synonyms, ranking adjustments.",
            "Search was 2% of traffic but 60% of conversion; the work moved conversion and sales measurably."
          ]
        },
        {
          company: "INFOX Tecnologia", role: "Junior Java Developer",
          period: "Nov 2010 — Dec 2011", location: "Aracaju, Brazil",
          stack: ["Java", "Scrum"],
          bullets: [
            "Built automations for the Brazilian Electronic Judicial Process (PJ-e), cutting processing time.",
            "Contributed to the SIDAGRO application redesign — usability and performance."
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "What I reach for, roughly in order of how often.",
      groups: [
        { name: "Languages", items: ["Kotlin", "Java", "TypeScript", "C# / .NET", "SQL"] },
        { name: "Frameworks", items: ["Spring Boot", "Spring WebFlux", "Project Reactor", "Spring Cloud", "Node.js / NestJS", "Hibernate / JPA", "GraphQL"] },
        { name: "Architecture", items: ["Microservices", "Event-driven", "Hexagonal", "Clean architecture", "REST API design", "API governance", "Resilience patterns"] },
        { name: "Cloud & infra", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Serverless", "Apigee"] },
        { name: "Data & messaging", items: ["Apache Kafka", "RabbitMQ", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Query optimization"] },
        { name: "Observability", items: ["New Relic", "Datadog", "Prometheus", "Kibana", "Opsgenie", "On-call / incident response"] },
        { name: "Quality & security", items: ["JUnit", "Mockito", "MockK", "Kotest", "TDD", "SAST", "Dependabot", "JWT / SSO"] },
        { name: "Practice", items: ["FinOps / cost optimization", "Technical leadership", "Mentoring", "Technical interviewing", "AI-assisted development", "Agile / Kanban"] }
      ],
      certsTitle: "Certifications",
      eduTitle: "Education"
    },
    writing: {
      title: "Writing",
      subtitle: "Notes from production — mostly Kotlin, the JVM, and what things cost to run.",
      allPosts: "All posts on Medium",
      empty: "Posts didn't load — read them directly on Medium.",
      talksTitle: "Speaking & community"
    },
    code: {
      title: "Code",
      subtitle: "Public repositories, pulled live from GitHub.",
      allRepos: "All repositories on GitHub",
      empty: "Repositories didn't load — browse them directly on GitHub.",
      updated: "updated"
    },
    connect: {
      title: "Elsewhere",
      linkedin: { name: "LinkedIn", desc: "Full career history, recommendations and the occasional post." },
      github:   { name: "GitHub",   desc: "Public repositories and code samples." },
      medium:   { name: "Medium",   desc: "Long-form writing on Kotlin, the JVM and architecture." }
    },
    contact: {
      title: "Get in touch",
      blurb: "Best reached by email. I read everything and reply to anything that isn't a template.",
      emailLabel: "Email", locationLabel: "Location", locationValue: "Greater São Paulo, Brazil · UTC−3",
      cvLabel: "Résumé", cvEn: "English (PDF)", cvPt: "Português (PDF)"
    },
    footer: {
      built: "Built with plain HTML, CSS and JavaScript. Hosted on GitHub Pages.",
      source: "Source"
    }
  },

  pt: {
    meta: {
      title: "Raphael Pantaleão — Engenheiro de Software Backend Sênior",
      description: "Engenheiro Backend Sênior. 15 anos em fintech, e-commerce e marketplaces no Brasil. Kotlin, Java, Spring Boot, Kafka, AWS. Sistemas com 35M+ requisições/mês."
    },
    nav: { about: "Sobre", impact: "Resultados", experience: "Experiência", skills: "Skills",
           writing: "Artigos", code: "Código", contact: "Contato" },
    ui: {
      langLabel: "Idioma", themeLabel: "Tema",
      themeLight: "Claro", themeDark: "Escuro", themeAuto: "Sistema",
      downloadCV: "Baixar CV", viewAll: "Ver tudo", loading: "Carregando…",
      backToTop: "Voltar ao topo", skipToContent: "Ir para o conteúdo",
      copied: "Copiado", copy: "Copiar e-mail"
    },
    hero: {
      eyebrow: "Engenheiro Backend Sênior · São Paulo, Brasil · UTC−3",
      name: "Raphael Pantaleão",
      tagline: "Construo backends que aguentam carga.",
      blurb: "Fluxos de pagamento na Black Friday. Cotação de marketplace sob picos de tráfego. Plataformas financeiras com 35M+ requisições por mês. Quinze anos de estrada, a maior parte em fintech e marketplaces brasileiros — Grupo Boticário, PicPay, C6 Bank, Zup, Ame Digital, ThoughtWorks.",
      ctaPrimary: "Falar comigo", ctaSecondary: "Baixar CV",
      availability: "Aberto a vagas sênior / staff de backend — remoto"
    },
    metrics: {
      title: "Resultados selecionados",
      items: [
        { value: "35M+",  label: "requisições/mês",    note: "~2TB/mês em 6+ integrações, unificadas sob um pipeline de governança" },
        { value: "60%",   label: "de corte em nuvem",  note: "~US$18k/mês (~R$1,1M/ano) em 4 squads, via iniciativa de FinOps" },
        { value: "240+",  label: "vulnerabilidades eliminadas", note: "80% de redução em achados altos e críticos — OKR do value stream batido" },
        { value: "5×",    label: "cotação mais rápida", note: "Tempo de resposta de 1000ms para 200ms em marketplace de alto tráfego" },
        { value: "30%",   label: "menos máquinas",     note: "Carga de Black Friday absorvida com 30% menos infra após reescrita em WebFlux" },
        { value: "15",    label: "anos entregando",    note: "Do Java no setor público a plataformas distribuídas de fintech" }
      ]
    },
    about: {
      title: "Sobre",
      paras: [
        "Meu trabalho fica onde a arquitetura encontra o resultado financeiro. Os sistemas que desenho são julgados por latência, confiabilidade e quanto custam para rodar — e aprendi que a parte difícil raramente é o código. É convencer Tech Managers a bancar a mudança e depois formar as pessoas que vão entregá-la.",
        "Boa parte do que me orgulha começou como algo que ninguém tinha pedido: um ponto cego de observabilidade que ninguém tinha nomeado, quatro squads gastando a mais em EC2 em silêncio, 300 vulnerabilidades abertas que todo mundo já tinha aprendido a ignorar. Gosto de achar essas coisas, dimensionar o business case e então de fato conduzir a correção entre times.",
        "Antes disso teve pesquisa de graduação em robôs móveis autônomos — localização por filtro de partículas, decisão bayesiana, publicada pelo IEEE. O formato do problema não mudou tanto: informação imperfeita, estado distribuído, decisões sob incerteza."
      ],
      lookingTitle: "O que procuro",
      looking: "Posições sênior ou staff de backend em empresas orientadas a produto — fintech, e-commerce, marketplaces complexos — onde decisões arquiteturais são tomadas de forma deliberada e engenharia tem voz na mesa de liderança. Remoto, do Brasil.",
      factsTitle: "Resumo",
      facts: [
        ["Localização", "Grande São Paulo, Brasil (UTC−3)"],
        ["Idiomas", "Português (nativo), Inglês (fluente, C1–C2)"],
        ["Modelo", "Remoto — Brasil, LATAM ou global"],
        ["Contratação", "CLT, PJ ou contractor internacional"]
      ]
    },
    experience: {
      title: "Experiência",
      subtitle: "Quinze anos, majoritariamente backend, majoritariamente em escala.",
      showMore: "Mostrar experiências anteriores", showLess: "Mostrar menos",
      current: "Atual",
      items: [
        {
          company: "Grupo Boticário", role: "Engenheiro Backend Sênior (Especialista de Software II) — Produtos Financeiros Digitais",
          period: "Ago 2024 — Atual", location: "Remoto · São Paulo", featured: true,
          stack: ["Kotlin", "Apigee", "Kafka", "GCP", "New Relic", "AWS", "Kubecost"],
          bullets: [
            "Identifiquei um ponto cego crítico de observabilidade: 6+ integrações de terceiros fragmentadas (WhatsApp, telefone, web, processadores backend) processando 35M+ requisições/mês (~2TB) sem visibilidade unificada. Desenhei um pipeline serverless de governança de APIs com Apigee, Kafka, GCP e New Relic — o alerta proativo reduziu incidentes que afetavam clientes, e os dados comportamentais expostos levaram a uma redução de 80% em contratos de recuperação de dívida não finalizados, recuperando ~R$1M/ano.",
            "Liderei uma iniciativa de FinOps entre 4 squads com EC2 e RDS superdimensionados. Introduzi Kubecost, AWS Cost Calculator e dashboards internos, negociei mudanças arquiteturais diretamente com Tech Managers, orientei desenvolvedores e acompanhei tudo em relatórios mensais. Redução de 60% no custo de nuvem — ~US$18k/mês, ~R$1,1M/ano.",
            "Liderei o endurecimento de segurança nos mesmos 4 squads: 300+ vulnerabilidades altas e críticas em aberto, sem estratégia unificada. Implementei SAST, GitHub Dependabot e hardening de imagens Docker; defini o plano de remediação e negociei priorização. 240+ vulnerabilidades eliminadas — 80% de redução, batendo o OKR do stream."
          ]
        },
        {
          company: "Grupo Boticário", role: "Engenheiro Backend Sênior — Suporte ao Seller (Marketplace)",
          period: "Jan 2024 — Jul 2024", location: "Remoto · São Paulo",
          stack: ["Kotlin", "Spring Boot", "JWT", "AWS"],
          bullets: [
            "Construí o módulo de notificações do Seller Center para um marketplace com ~3.000 sellers — comunicação automatizada para ações críticas. Tempo de resolução de problemas 30% menor, abertura de tickets 25% menor.",
            "Desenhei o módulo de FAQ do Seller Center, com conteúdo gerenciado dinamicamente e busca por relevância — 60% menos tickets sobre dúvidas comuns."
          ]
        },
        {
          company: "Grupo Boticário", role: "Engenheiro Backend Sênior — Marketplace-Out",
          period: "Fev 2023 — Dez 2023", location: "Remoto · São Paulo",
          stack: ["Kotlin", "GraphQL", "Spring Reactor", "New Relic", "Opsgenie"],
          bullets: [
            "Reduzi a latência da cotação dinâmica de 1000ms para 200ms, isolando gargalos tanto no código quanto na infraestrutura.",
            "Reforcei integrações com parceiros usando circuit breakers e fallbacks — menos custo e detecção mais rápida de inconsistências.",
            "Security champion do squad; on-call para incidentes em produção; ministrei as talks de Spring Reactor e GraphQL do time."
          ]
        },
        {
          company: "Grupo Boticário", role: "Engenheiro Backend Sênior — Marketplace-In Consumer",
          period: "Mar 2022 — Jan 2023", location: "Remoto · São Paulo",
          stack: ["Kotlin", "GraphQL", "Spring Boot"],
          bullets: [
            "Construí o módulo que conecta sellers às ferramentas internas de backoffice — a plataforma escalou de 5 para ~3.000 sellers com resolução rápida de problemas.",
            "Defendi e liderei a adoção de GraphQL no value stream."
          ]
        },
        {
          company: "PicPay", role: "Engenheiro Backend Sênior — Open Banking",
          period: "Jun 2021 — Fev 2022", location: "São Paulo",
          stack: ["Kotlin", "Spring Boot", "Arquitetura hexagonal", "TDD"],
          bullets: [
            "Desenhei e construí a gestão de consentimento do Open Banking, integrando com APIs de grandes instituições financeiras sob requisitos rígidos de segurança de dados.",
            "Atuei como líder técnico: arquitetura hexagonal, pair programming, automação de testes, TDD; mentorei novos desenvolvedores e entrevistei candidatos."
          ]
        },
        {
          company: "Zup Innovation", role: "Engenheiro de Software Sênior",
          period: "Nov 2020 — Jun 2021", location: "São Paulo",
          stack: ["Java", "Kotlin", "Spring Boot"],
          bullets: [
            "Liderei sistemas de recomendação de produtos de cartão de crédito, elevando de forma relevante a taxa de aquisição.",
            "Apoiei a migração do time de Java para Kotlin."
          ]
        },
        {
          company: "C6 Bank", role: "Engenheiro de Software Sênior",
          period: "Out 2019 — Nov 2020", location: "São Paulo",
          stack: ["Kotlin", "Java", "Salesforce", "REST"],
          bullets: [
            "Construí integrações com CRM Salesforce que reduziram o tempo de atendimento em até 30%.",
            "Co-construí o sistema de aquisição de maquininhas, aumentando a conversão.",
            "Integrei APIs do chatbot, reduzindo tempo de resposta e necessidade de atendimento humano."
          ]
        },
        {
          company: "Objective Solutions", role: "Desenvolvedor Sênior Java/.NET",
          period: "Abr 2019 — Out 2019", location: "Brasil",
          stack: ["Java", ".NET", "SQL"],
          bullets: ["Entreguei relatórios contábeis de alta performance para o núcleo de relatórios financeiros de um cliente."]
        },
        {
          company: "Ame Digital", role: "Engenheiro Backend Sênior",
          period: "Set 2018 — Abr 2019", location: "São Paulo",
          stack: ["Java", "Spring WebFlux", "Reactor", "Microsserviços"],
          bullets: [
            "Liderei a refatoração do serviço monolítico de carteira em microsserviços, especializando a carteira no registro de movimentações.",
            "Reconstruí caminhos críticos em Spring WebFlux — carga de Black Friday absorvida com 30% menos máquinas."
          ]
        },
        {
          company: "Invillia", role: "Desenvolvedor .NET / Backend Java",
          period: "Jun 2017 — Set 2018", location: "Araras, Brasil",
          stack: ["Java", ".NET", "Microsserviços"],
          bullets: [
            "Redesenhei aplicações de backoffice e detecção de fraude para clientes.",
            "Construí uma camada de cache para respostas de bureaus de dados — ~50% de economia em custos de consulta de API.",
            "Quebrei um módulo antifraude monolítico em microsserviços, tirando releases de quinzenais para sob demanda."
          ]
        },
        {
          company: "SergipeTec", role: "Desenvolvedor Sênior .NET / Java",
          period: "Nov 2014 — Jun 2017", location: "Aracaju, Brasil",
          stack: [".NET", "Java", "SSO"],
          bullets: [
            "Liderei a adoção de padrões .NET: 30% de ganho de eficiência, 25% menos bugs.",
            "Construí bibliotecas internas de alta performance e um servidor NuGet privado — 40% menos tempo de desenvolvimento.",
            "Fragmentei sistemas em módulos independentes (deploys 50% mais rápidos) e implementei SSO (60% menos problemas de autenticação)."
          ]
        },
        {
          company: "ITConsulting", role: "Desenvolvedor de Software",
          period: "Jun 2013 — Jul 2014", location: "Aracaju, Brasil",
          stack: ["Java", "SQL"],
          bullets: [
            "Construí uma plataforma de envio e gestão de currículos integrada aos sistemas de RH — 30% mais eficiência no tratamento de dados de candidatos.",
            "Ajudei a desenhar um sistema de gestão de processos para serviços públicos, projetado para atender 5.000+ cidadãos/mês."
          ]
        },
        {
          company: "ThoughtWorks", role: "Consultant Developer",
          period: "Jan 2013 — Abr 2013", location: "Porto Alegre, Brasil",
          stack: ["Java", "Apache Solr", "Lucene"],
          bullets: [
            "Melhorei busca facetada e relevância de resultados para um cliente de e-commerce dos EUA com Solr e Lucene — sinônimos e ajustes de ranking.",
            "A busca era 2% do tráfego mas 60% da conversão; o trabalho moveu conversão e vendas de forma mensurável."
          ]
        },
        {
          company: "INFOX Tecnologia", role: "Desenvolvedor Java Júnior",
          period: "Nov 2010 — Dez 2011", location: "Aracaju, Brasil",
          stack: ["Java", "Scrum"],
          bullets: [
            "Construí automações para o Processo Judicial Eletrônico (PJ-e), reduzindo o tempo de tramitação.",
            "Contribuí no redesenho da aplicação SIDAGRO — usabilidade e performance."
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "O que eu uso, mais ou menos na ordem da frequência.",
      groups: [
        { name: "Linguagens", items: ["Kotlin", "Java", "TypeScript", "C# / .NET", "SQL"] },
        { name: "Frameworks", items: ["Spring Boot", "Spring WebFlux", "Project Reactor", "Spring Cloud", "Node.js / NestJS", "Hibernate / JPA", "GraphQL"] },
        { name: "Arquitetura", items: ["Microsserviços", "Event-driven", "Hexagonal", "Clean architecture", "Design de APIs REST", "Governança de APIs", "Padrões de resiliência"] },
        { name: "Cloud e infra", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Serverless", "Apigee"] },
        { name: "Dados e mensageria", items: ["Apache Kafka", "RabbitMQ", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Otimização de queries"] },
        { name: "Observabilidade", items: ["New Relic", "Datadog", "Prometheus", "Kibana", "Opsgenie", "On-call / resposta a incidentes"] },
        { name: "Qualidade e segurança", items: ["JUnit", "Mockito", "MockK", "Kotest", "TDD", "SAST", "Dependabot", "JWT / SSO"] },
        { name: "Prática", items: ["FinOps / otimização de custos", "Liderança técnica", "Mentoria", "Entrevistas técnicas", "Desenvolvimento assistido por IA", "Ágil / Kanban"] }
      ],
      certsTitle: "Certificações",
      eduTitle: "Formação"
    },
    writing: {
      title: "Artigos",
      subtitle: "Anotações da produção — sobretudo Kotlin, JVM e quanto as coisas custam para rodar.",
      allPosts: "Todos os artigos no Medium",
      empty: "Os artigos não carregaram — leia direto no Medium.",
      talksTitle: "Palestras e comunidade"
    },
    code: {
      title: "Código",
      subtitle: "Repositórios públicos, buscados ao vivo no GitHub.",
      allRepos: "Todos os repositórios no GitHub",
      empty: "Os repositórios não carregaram — veja direto no GitHub.",
      updated: "atualizado"
    },
    connect: {
      title: "Em outros lugares",
      linkedin: { name: "LinkedIn", desc: "Histórico completo de carreira, recomendações e posts ocasionais." },
      github:   { name: "GitHub",   desc: "Repositórios públicos e exemplos de código." },
      medium:   { name: "Medium",   desc: "Textos longos sobre Kotlin, JVM e arquitetura." }
    },
    contact: {
      title: "Falar comigo",
      blurb: "E-mail funciona melhor. Leio tudo e respondo tudo que não for template.",
      emailLabel: "E-mail", locationLabel: "Localização", locationValue: "Grande São Paulo, Brasil · UTC−3",
      cvLabel: "Currículo", cvEn: "Inglês (PDF)", cvPt: "Português (PDF)"
    },
    footer: {
      built: "Feito com HTML, CSS e JavaScript puros. Hospedado no GitHub Pages.",
      source: "Código-fonte"
    }
  }
};
