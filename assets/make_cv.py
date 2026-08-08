#!/usr/bin/env python3
"""Generate ATS-safe EN + PT-BR resumes for Raphael Pantaleão.

Single column, no tables/images/icons, real selectable text, Helvetica.
Run:  python3 make_cv.py
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.colors import HexColor
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer,
                                HRFlowable, KeepTogether)

OUT_DIR = os.path.dirname(os.path.abspath(__file__))

INK = HexColor("#111111")
GREY = HexColor("#444444")
RULE = HexColor("#999999")

S = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=19, leading=22,
                           textColor=INK, spaceAfter=2),
    "title": ParagraphStyle("title", fontName="Helvetica", fontSize=11, leading=14,
                            textColor=GREY, spaceAfter=4),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9.2, leading=13,
                              textColor=GREY, spaceAfter=8),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=10.2, leading=12.4,
                         textColor=INK, spaceBefore=6, spaceAfter=2),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.0, leading=11.9,
                           textColor=INK, alignment=TA_JUSTIFY, spaceAfter=4),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=9.6, leading=12.0,
                           textColor=INK, spaceBefore=5, spaceAfter=0),
    "meta": ParagraphStyle("meta", fontName="Helvetica-Oblique", fontSize=8.6, leading=10.8,
                           textColor=GREY, spaceAfter=2.5),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=8.9, leading=11.4,
                             textColor=INK, leftIndent=9, bulletIndent=1,
                             alignment=TA_JUSTIFY, spaceAfter=2.5),
    "skill": ParagraphStyle("skill", fontName="Helvetica", fontSize=8.9, leading=11.6,
                            textColor=INK, spaceAfter=1.5),
}


def rule():
    return HRFlowable(width="100%", thickness=0.6, color=RULE,
                      spaceBefore=1, spaceAfter=4)


def section(title, flows):
    return [Paragraph(title.upper(), S["h2"]), rule()] + flows


def job(role, meta, bullets):
    out = [Paragraph(role, S["role"]), Paragraph(meta, S["meta"])]
    out += [Paragraph("&#8211;&nbsp;" + b, S["bullet"]) for b in bullets]
    return KeepTogether(out) if len(bullets) <= 3 else out


# ======================================================================
#  ENGLISH
# ======================================================================

EN = {
    "file": "Raphael_Pantaleao_CV_EN.pdf",
    "name": "Raphael Pantaleão",
    "title": "Senior Backend Engineer — Kotlin · Java · Spring Boot · Kafka · AWS",
    "contact": ("São Paulo, Brazil (UTC-3) &nbsp;·&nbsp; raphael@pantaleontech.com "
                "&nbsp;·&nbsp; +55 11 95868-4638<br/>"
                "linkedin.com/in/raphael-pantaleao &nbsp;·&nbsp; github.com/raphaelpanta "
                "&nbsp;·&nbsp; pantaleontech.com"),
    "summary_h": "Summary",
    "summary": ("Senior backend engineer with 15 years building distributed systems for Brazilian "
                "fintech, e-commerce and marketplaces. Currently designing API governance and "
                "observability for a financial platform handling 35M+ requests/month (~2TB). "
                "Track record of driving change across squads: 60% cloud cost reduction (~US$18k/month), "
                "240+ high and critical vulnerabilities eliminated, and latency cut from 1000ms to 200ms "
                "on a high-traffic quoting path. Deep Kotlin and JVM background, reactive systems with "
                "Spring WebFlux, event-driven architecture on Kafka, AWS and GCP."),
    "skills_h": "Skills",
    "skills": [
        ("Languages", "Kotlin, Java, TypeScript, C#/.NET, SQL"),
        ("Frameworks", "Spring Boot, Spring WebFlux, Project Reactor, Spring Cloud, Spring Data, "
                       "Hibernate/JPA, Node.js, NestJS, GraphQL"),
        ("Architecture", "Microservices, event-driven architecture, hexagonal architecture, clean architecture, "
                         "REST API design, API governance, circuit breakers and resilience patterns, design patterns"),
        ("Cloud & Infra", "AWS (EC2, RDS, Lambda), GCP, Docker, Kubernetes, Terraform, Serverless, Apigee, "
                          "Gradle, Jenkins, GitHub Actions"),
        ("Data & Messaging", "Apache Kafka, RabbitMQ, PostgreSQL, MySQL, MongoDB, DynamoDB, query optimization"),
        ("Observability", "New Relic, Datadog, Prometheus, Kibana, Opsgenie, on-call and incident response"),
        ("Quality & Security", "JUnit, Mockito, MockK, Kotest, TDD, test automation, SAST, Dependabot, "
                               "Docker image hardening, JWT, SSO"),
        ("Practice", "FinOps and cloud cost optimization, technical leadership, mentoring, technical interviewing, "
                     "AI-assisted development with coding agents, Agile/Kanban"),
    ],
    "exp_h": "Experience",
    "jobs": [
        ("Senior Backend Engineer (Software Specialist II) — Grupo Boticário",
         "Digital Financial Products &nbsp;|&nbsp; August 2024 – Present &nbsp;|&nbsp; Remote, São Paulo, Brazil",
         ["Identified a critical observability blind spot across 6+ fragmented third-party integrations "
          "(WhatsApp, phone, web, backend processors) processing 35M+ requests/month (~2TB) with no unified "
          "visibility. Designed a serverless API governance pipeline using Apigee, Kafka, New Relic and GCP, "
          "consolidating data across post-sales, product and data teams — enabling proactive alerting that cut "
          "customer-facing incidents and surfacing behavioural insights that drove an 80% reduction in unfinished "
          "debt-recovery contracts, recovering ~R$1M/year.",
          "Led a cross-squad FinOps initiative across 4 squads running over-provisioned EC2 and RDS: introduced "
          "Kubecost, AWS Cost Calculator and internal dashboards to right-size infrastructure, negotiated "
          "architectural changes with Tech Managers and coached developers. 60% reduction in cloud costs across "
          "dev, staging and production — ~US$18k/month (R$1.1M/year).",
          "Led security hardening across the same 4 squads, addressing 300+ unresolved high and critical "
          "vulnerabilities: implemented SAST tooling, GitHub Dependabot and Docker image hardening, and negotiated "
          "prioritisation with Tech Managers. Eliminated 240+ vulnerabilities — an 80% reduction — hitting the "
          "value stream's OKR."]),

        ("Senior Backend Engineer (Software Specialist II) — Grupo Boticário",
         "Marketplace Seller Support &nbsp;|&nbsp; January 2024 – July 2024 &nbsp;|&nbsp; Remote, São Paulo, Brazil",
         ["Designed and built the Seller Center notifications module, automating communication for critical "
          "seller actions across a marketplace serving ~3,000 sellers: 30% faster issue resolution and 25% "
          "fewer support tickets.",
          "Designed and implemented the Seller Center FAQ module with dynamically managed help content and "
          "relevance-based search, reducing support tickets for common questions by 60%."]),

        ("Senior Backend Engineer (Software Specialist II) — Grupo Boticário",
         "Marketplace-Out &nbsp;|&nbsp; February 2023 – December 2023 &nbsp;|&nbsp; Remote, São Paulo, Brazil",
         ["Optimised dynamic quoting, cutting response time from 1000ms to 200ms by isolating bottlenecks in "
          "both application code and infrastructure.",
          "Hardened marketplace partner integrations with circuit breakers and fallbacks, reducing cost and "
          "surfacing inconsistencies earlier.",
          "Acted as security champion for the squad, handled on-call duties for production incidents, and "
          "delivered internal talks on Spring Reactor and GraphQL."]),

        ("Senior Backend Engineer (Software Specialist II) — Grupo Boticário",
         "Marketplace-In Consumer &nbsp;|&nbsp; March 2022 – January 2023 &nbsp;|&nbsp; Remote, São Paulo, Brazil",
         ["Built the module connecting sellers to internal backoffice tools, enabling the platform to scale from "
          "5 to approximately 3,000 sellers with fast issue turnaround.",
          "Advocated for and led the adoption of GraphQL across the value stream."]),

        ("Senior Backend Engineer — PicPay",
         "Open Banking &nbsp;|&nbsp; June 2021 – February 2022 &nbsp;|&nbsp; São Paulo, Brazil",
         ["Designed and built Open Banking consent management systems, integrating with leading financial "
          "institutions' APIs under strict data-security requirements.",
          "Acted as technical lead: hexagonal architecture, pair programming, test automation, TDD and design "
          "patterns; mentored new developers and served as a technical interviewer."]),

        ("Senior Software Engineer — Zup Innovation",
         "November 2020 – June 2021 &nbsp;|&nbsp; São Paulo, Brazil",
         ["Led implementation of credit card product recommendation systems, significantly increasing card "
          "acquisition rates.",
          "Supported the team's transition from Java to Kotlin."]),

        ("Senior Software Engineer — C6 Bank",
         "October 2019 – November 2020 &nbsp;|&nbsp; São Paulo, Brazil",
         ["Built Salesforce CRM integrations that reduced service time by up to 30%.",
          "Co-developed the payment machine acquisition system, increasing conversion rates.",
          "Integrated chatbot APIs, reducing response times and the need for human intervention."]),

        ("Senior Backend Engineer — Ame Digital",
         "September 2018 – April 2019 &nbsp;|&nbsp; São Paulo, Brazil",
         ["Led the refactoring of the monolithic wallet service into microservices, specialising the wallet for "
          "movement registration.",
          "Rebuilt hot paths using Spring WebFlux and reactive programming — during Black Friday this absorbed "
          "the same request volume with 30% fewer machines."]),

    ],
    "earlier_h": "Earlier Experience",
    "earlier": [
        ("<b>Senior Java/.NET Software Developer — Objective Solutions</b> &nbsp;|&nbsp; Apr 2019 – Oct 2019 &nbsp;|&nbsp; Brazil<br/>"
         "Delivered high-performance accounting reports supporting a client's core financial reporting stack."),
        ("<b>.NET / Java Backend Developer — Invillia</b> &nbsp;|&nbsp; Jun 2017 – Sep 2018 &nbsp;|&nbsp; Araras, Brazil<br/>"
         "Redesigned backoffice and fraud-detection applications; built a data-bureau response cache saving ~50% on API "
         "query costs; split a monolithic anti-fraud module into microservices, moving releases from bi-weekly to on-demand."),
        ("<b>Senior .NET / Java Developer — SergipeTec</b> &nbsp;|&nbsp; Nov 2014 – Jun 2017 &nbsp;|&nbsp; Aracaju, Brazil<br/>"
         "Led .NET standards adoption (30% efficiency gain, 25% fewer bugs); built internal libraries and a private NuGet "
         "server (40% less development time); modularised systems (50% faster deploys) and implemented SSO (60% fewer auth issues)."),
        ("<b>Software Developer — ITConsulting</b> &nbsp;|&nbsp; Jun 2013 – Jul 2014 &nbsp;|&nbsp; Aracaju, Brazil<br/>"
         "Built a resume submission and management platform integrated with HR systems (30% more efficient candidate data "
         "handling); helped design a public-services process management system projected to serve 5,000+ citizens/month."),
        ("<b>Consultant Developer — ThoughtWorks</b> &nbsp;|&nbsp; Jan 2013 – Apr 2013 &nbsp;|&nbsp; Porto Alegre, Brazil<br/>"
         "Improved faceted search and result relevance for a US e-commerce client with Apache Solr and Lucene. Search was "
         "2% of traffic but 60% of conversion; the work delivered a measurable lift in conversion and sales."),
        ("<b>Junior Java Software Developer — INFOX Tecnologia</b> &nbsp;|&nbsp; Nov 2010 – Dec 2011 &nbsp;|&nbsp; Aracaju, Brazil<br/>"
         "Developed automations for the Brazilian Electronic Judicial Process (PJ-e), cutting processing time; contributed "
         "to the SIDAGRO application redesign."),
    ],
    "edu_h": "Education",
    "edu": [
        ("Postgraduate Degree, Development Leadership — FIAP", "June 2024 – April 2025"),
        ("Postgraduate Degree, Distributed Software Architecture — PUC Minas", "March 2022 – October 2023"),
        ("BSc Computer Science — Universidade Federal de Sergipe", "2006 – 2010"),
    ],
    "cert_h": "Certifications",
    "certs": ["Advanced Scala and Functional Programming — Rock the JVM",
              "Functional Programming Principles in Scala — EPFL",
              "Oracle Certified Associate, Java SE",
              "Oracle Certified Associate, Oracle WebLogic Server 11g System Administrator",
              "Getting Started with Microservices with Istio and IBM Cloud Kubernetes Service"],
    "pub_h": "Publication",
    "pubs": ["Pervasive communication and autonomous decision making in a domestic mobile robot — "
             "IEEE."],
    "lang_h": "Languages & Publication",
    "langs": "Portuguese: native &nbsp;·&nbsp; English: fluent (C1–C2, comfortable in technical interviews "
             "and architecture discussions)",
}


# ======================================================================
#  PORTUGUÊS
# ======================================================================

PT = {
    "file": "Raphael_Pantaleao_CV_PT.pdf",
    "name": "Raphael Pantaleão",
    "title": "Engenheiro de Software Backend Sênior — Kotlin · Java · Spring Boot · Kafka · AWS",
    "contact": ("São Paulo, Brasil (UTC-3) &nbsp;·&nbsp; raphael@pantaleontech.com "
                "&nbsp;·&nbsp; +55 11 95868-4638<br/>"
                "linkedin.com/in/raphael-pantaleao &nbsp;·&nbsp; github.com/raphaelpanta "
                "&nbsp;·&nbsp; pantaleontech.com"),
    "summary_h": "Resumo",
    "summary": ("Engenheiro backend sênior com 15 anos construindo sistemas distribuídos para fintech, "
                "e-commerce e marketplaces no Brasil. Atualmente desenho governança de APIs e observabilidade "
                "para uma plataforma financeira com 35M+ requisições/mês (~2TB). Histórico de conduzir mudanças "
                "entre squads: 60% de redução no custo de nuvem (~US$18k/mês), 240+ vulnerabilidades altas e "
                "críticas eliminadas e latência de 1000ms para 200ms em um fluxo de cotação de alto tráfego. "
                "Base sólida em Kotlin e JVM, sistemas reativos com Spring WebFlux, arquitetura orientada a "
                "eventos com Kafka, AWS e GCP."),
    "skills_h": "Habilidades",
    "skills": [
        ("Linguagens", "Kotlin, Java, TypeScript, C#/.NET, SQL"),
        ("Frameworks", "Spring Boot, Spring WebFlux, Project Reactor, Spring Cloud, Spring Data, "
                       "Hibernate/JPA, Node.js, NestJS, GraphQL"),
        ("Arquitetura", "Microsserviços, arquitetura orientada a eventos, arquitetura hexagonal, clean architecture, "
                        "design de APIs REST, governança de APIs, circuit breakers, padrões de resiliência, design patterns"),
        ("Cloud e Infra", "AWS (EC2, RDS, Lambda), GCP, Docker, Kubernetes, Terraform, Serverless, Apigee, "
                          "Gradle, Jenkins, GitHub Actions"),
        ("Dados e Mensageria", "Apache Kafka, RabbitMQ, PostgreSQL, MySQL, MongoDB, DynamoDB, otimização de queries"),
        ("Observabilidade", "New Relic, Datadog, Prometheus, Kibana, Opsgenie, on-call e resposta a incidentes"),
        ("Qualidade e Segurança", "JUnit, Mockito, MockK, Kotest, TDD, automação de testes, SAST, Dependabot, "
                                  "hardening de imagens Docker, JWT, SSO"),
        ("Prática", "FinOps e otimização de custos, liderança técnica, mentoria, entrevistas técnicas, "
                    "desenvolvimento assistido por IA, Ágil/Kanban"),
    ],
    "exp_h": "Experiência Profissional",
    "jobs": [
        ("Engenheiro Backend Sênior (Especialista de Software II) — Grupo Boticário",
         "Produtos Financeiros Digitais &nbsp;|&nbsp; Agosto 2024 – Atual &nbsp;|&nbsp; Remoto, São Paulo, Brasil",
         ["Identifiquei um ponto cego crítico de observabilidade em 6+ integrações de terceiros fragmentadas "
          "(WhatsApp, telefone, web e processadores de backend) processando 35M+ requisições/mês (~2TB) sem "
          "visibilidade unificada. Desenhei um pipeline serverless de governança de APIs com Apigee, Kafka, "
          "New Relic e GCP, consolidando dados entre pós-venda, produto e dados — alertas proativos reduziram "
          "incidentes visíveis ao cliente e os insights comportamentais levaram a 80% menos contratos de "
          "recuperação de dívida não finalizados, recuperando ~R$1M/ano.",
          "Liderei uma iniciativa de FinOps entre 4 squads com EC2 e RDS superdimensionados: introduzi Kubecost, "
          "AWS Cost Calculator e dashboards internos para dimensionar a infraestrutura, negociei mudanças "
          "arquiteturais com Tech Managers e orientei desenvolvedores. Redução de 60% nos custos de nuvem em dev, "
          "homologação e produção — ~US$18k/mês (R$1,1M/ano).",
          "Liderei o endurecimento de segurança nos mesmos 4 squads, tratando 300+ vulnerabilidades altas e "
          "críticas em aberto: implementei SAST, GitHub Dependabot e hardening de imagens Docker, e negociei "
          "priorização com Tech Managers. Eliminei 240+ vulnerabilidades — redução de 80% — atingindo o OKR do "
          "value stream."]),

        ("Engenheiro Backend Sênior (Especialista de Software II) — Grupo Boticário",
         "Suporte ao Seller (Marketplace) &nbsp;|&nbsp; Janeiro 2024 – Julho 2024 &nbsp;|&nbsp; Remoto, São Paulo, Brasil",
         ["Desenhei e construí o módulo de notificações do Seller Center, automatizando a comunicação de ações "
          "críticas em um marketplace com ~3.000 sellers: resolução de problemas 30% mais rápida e 25% menos "
          "tickets de suporte.",
          "Desenhei e implementei o módulo de FAQ do Seller Center, com conteúdo de ajuda gerenciado dinamicamente "
          "e busca por relevância, reduzindo em 60% os tickets sobre dúvidas comuns."]),

        ("Engenheiro Backend Sênior (Especialista de Software II) — Grupo Boticário",
         "Marketplace-Out &nbsp;|&nbsp; Fevereiro 2023 – Dezembro 2023 &nbsp;|&nbsp; Remoto, São Paulo, Brasil",
         ["Otimizei a cotação dinâmica, reduzindo o tempo de resposta de 1000ms para 200ms ao isolar gargalos "
          "no código da aplicação e na infraestrutura.",
          "Reforcei integrações com parceiros usando circuit breakers e fallbacks, reduzindo custo e detectando "
          "inconsistências mais cedo.",
          "Atuei como security champion do squad, assumi plantões de on-call para incidentes em produção e "
          "ministrei talks internas sobre Spring Reactor e GraphQL."]),

        ("Engenheiro Backend Sênior (Especialista de Software II) — Grupo Boticário",
         "Marketplace-In Consumer &nbsp;|&nbsp; Março 2022 – Janeiro 2023 &nbsp;|&nbsp; Remoto, São Paulo, Brasil",
         ["Construí o módulo que conecta sellers às ferramentas internas de backoffice, permitindo que a plataforma "
          "escalasse de 5 para ~3.000 sellers com resolução rápida de problemas.",
          "Defendi e liderei a adoção de GraphQL em todo o value stream."]),

        ("Engenheiro Backend Sênior — PicPay",
         "Open Banking &nbsp;|&nbsp; Junho 2021 – Fevereiro 2022 &nbsp;|&nbsp; São Paulo, Brasil",
         ["Desenhei e construí sistemas de gestão de consentimento para Open Banking, integrando com APIs das "
          "principais instituições financeiras sob requisitos rigorosos de segurança de dados.",
          "Atuei como líder técnico: arquitetura hexagonal, pair programming, automação de testes, TDD e design "
          "patterns; mentorei novos devs e atuei como entrevistador técnico."]),

        ("Engenheiro de Software Sênior — Zup Innovation",
         "Novembro 2020 – Junho 2021 &nbsp;|&nbsp; São Paulo, Brasil",
         ["Liderei a implementação de sistemas de recomendação de produtos de cartão de crédito, aumentando "
          "significativamente a taxa de aquisição de cartões.",
          "Apoiei a transição do time de Java para Kotlin."]),

        ("Engenheiro de Software Sênior — C6 Bank",
         "Outubro 2019 – Novembro 2020 &nbsp;|&nbsp; São Paulo, Brasil",
         ["Construí integrações com CRM Salesforce que reduziram o tempo de atendimento em até 30%.",
          "Co-desenvolvi o sistema de aquisição de maquininhas de pagamento, aumentando as taxas de conversão.",
          "Integrei APIs de chatbot, reduzindo o tempo de resposta e a necessidade de intervenção humana."]),

        ("Engenheiro Backend Sênior — Ame Digital",
         "Setembro 2018 – Abril 2019 &nbsp;|&nbsp; São Paulo, Brasil",
         ["Liderei a refatoração do serviço monolítico de carteira para uma arquitetura de microsserviços, "
          "especializando a carteira no registro de movimentações.",
          "Reconstruí caminhos críticos com Spring WebFlux e programação reativa — na Black Friday, o mesmo "
          "volume de requisições foi absorvido com 30% menos máquinas."]),

    ],
    "earlier_h": "Experiência Anterior",
    "earlier": [
        ("<b>Desenvolvedor Sênior Java/.NET — Objective Solutions</b> &nbsp;|&nbsp; Abr 2019 – Out 2019 &nbsp;|&nbsp; Brasil<br/>"
         "Relatórios contábeis de alta performance para o núcleo de relatórios financeiros de um cliente."),
        ("<b>Desenvolvedor .NET / Backend Java — Invillia</b> &nbsp;|&nbsp; Jun 2017 – Set 2018 &nbsp;|&nbsp; Araras, Brasil<br/>"
         "Redesenho de aplicações de backoffice e detecção de fraude; cache de respostas de bureaus de dados (~50% de "
         "economia em consultas de API); módulo antifraude monolítico quebrado em microsserviços, levando releases de "
         "quinzenais para sob demanda."),
        ("<b>Desenvolvedor Sênior .NET / Java — SergipeTec</b> &nbsp;|&nbsp; Nov 2014 – Jun 2017 &nbsp;|&nbsp; Aracaju, Brasil<br/>"
         "Adoção de padrões .NET (30% de eficiência, 25% menos bugs); bibliotecas internas e servidor NuGet privado "
         "(40% menos tempo de dev); modularização de sistemas (deploys 50% mais rápidos) e SSO (60% menos erros de auth)."),
        ("<b>Desenvolvedor de Software — ITConsulting</b> &nbsp;|&nbsp; Jun 2013 – Jul 2014 &nbsp;|&nbsp; Aracaju, Brasil<br/>"
         "Plataforma de envio e gestão de currículos integrada aos sistemas de RH (30% mais eficiência); sistema de gestão "
         "de processos para serviços públicos, projetado para 5.000+ cidadãos/mês."),
        ("<b>Consultant Developer — ThoughtWorks</b> &nbsp;|&nbsp; Jan 2013 – Abr 2013 &nbsp;|&nbsp; Porto Alegre, Brasil<br/>"
         "Busca facetada e relevância de resultados para um cliente de e-commerce dos EUA com Apache Solr e Lucene. A busca "
         "era 2% do tráfego mas 60% da conversão; o trabalho gerou aumento mensurável em conversão e vendas."),
        ("<b>Desenvolvedor Java Júnior — INFOX Tecnologia</b> &nbsp;|&nbsp; Nov 2010 – Dez 2011 &nbsp;|&nbsp; Aracaju, Brasil<br/>"
         "Desenvolvi automações para o Processo Judicial Eletrônico (PJ-e), reduzindo o tempo de tramitação; contribuí no "
         "redesenho da aplicação SIDAGRO."),
    ],
    "edu_h": "Formação Acadêmica",
    "edu": [
        ("Pós-graduação em Dev Leadership — FIAP", "Junho 2024 – Abril 2025"),
        ("Pós-graduação em Arquitetura de Software Distribuído — PUC Minas", "Março 2022 – Outubro 2023"),
        ("Bacharelado em Ciência da Computação — Universidade Federal de Sergipe", "2006 – 2010"),
    ],
    "cert_h": "Certificações",
    "certs": ["Advanced Scala and Functional Programming — Rock the JVM",
              "Functional Programming Principles in Scala — EPFL",
              "Oracle Certified Associate, Java SE",
              "Oracle Certified Associate, Oracle WebLogic Server 11g",
              "Microsserviços com Istio e IBM Cloud Kubernetes"],
    "pub_h": "Publicação",
    "pubs": ["Pervasive communication and autonomous decision making in a domestic mobile robot (IEEE)."],
    "lang_h": "Idiomas e Publicação",
    "langs": "Português: nativo &nbsp;·&nbsp; Inglês: fluente (C1–C2)",
}


def build(cfg):
    path = os.path.join(OUT_DIR, cfg["file"])
    doc = SimpleDocTemplate(
        path, pagesize=A4,
        leftMargin=15 * mm, rightMargin=15 * mm,
        topMargin=12 * mm, bottomMargin=10 * mm,
        title="%s — %s" % (cfg["name"], cfg["title"]),
        author=cfg["name"], subject=cfg["title"],
    )

    story = [
        Paragraph(cfg["name"], S["name"]),
        Paragraph(cfg["title"], S["title"]),
        Paragraph(cfg["contact"], S["contact"]),
    ]

    story += section(cfg["summary_h"], [Paragraph(cfg["summary"], S["body"])])

    story += section(cfg["skills_h"], [
        Paragraph("<b>%s:</b> %s" % (k, v), S["skill"]) for k, v in cfg["skills"]
    ])

    exp = []
    for role, meta, bullets in cfg["jobs"]:
        r = job(role, meta, bullets)
        exp += r if isinstance(r, list) else [r]
    story += section(cfg["exp_h"], exp)

    story += section(cfg["earlier_h"], [
        Paragraph(e, S["skill"]) for e in cfg["earlier"]
    ])

    story += section(cfg["edu_h"], [
        Paragraph("<b>%s</b> &nbsp;|&nbsp; %s" % (d, y), S["skill"]) for d, y in cfg["edu"]
    ])

    story += section(cfg["cert_h"], [
        Paragraph(" &nbsp;·&nbsp; ".join(cfg["certs"]), S["skill"])
    ])

    story += section(cfg["lang_h"], [
        Paragraph(cfg["langs"] + " &nbsp;·&nbsp; <b>%s:</b> %s" % (cfg["pub_h"], " ".join(cfg["pubs"])), S["skill"]),
    ])

    doc.build(story)
    return path


if __name__ == "__main__":
    for cfg in (EN, PT):
        print("wrote", build(cfg))
