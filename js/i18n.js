/* ============================================
   Internationalization (i18n) System
   FR / EN Language Toggle - Light Theme 4
   ============================================ */

const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.about": "Profil",
        "nav.skills": "Compétences",
        "nav.experience": "Expériences",
        "nav.education": "Formation",
        "nav.contact": "Contact",

        // Hero
        "hero.badge": "Disponible pour de nouveaux projets",
        "hero.greeting": "// Bonjour, je suis",
        "hero.description": "Expert Databricks, Microsoft Fabric & Azure avec <strong>+13 ans d'expérience</strong> dans la conception de data platforms et solutions cloud scalables et sécurisées.",
        "hero.contact": "Me Contacter",
        "hero.download": "Télécharger CV",
        "hero.see_exp": "Voir mes expériences",
        "hero.clients": "Ils m'ont fait confiance",

        // About
        "about.tag": "&lt;about&gt;",
        "about.title": "Mon Profil",
        "about.who": "Qui suis-je ?",
        "about.intro": "Architecte Solutions avec plus de <strong>13 ans d'expérience</strong>, expert <strong>Azure</strong> et <strong>DevOps</strong>. J'interviens sur la conception et la réalisation de solutions cloud, data et IA, scalables et sécurisées.",
        "about.desc2": "J'interviens sur des projets stratégiques avec une forte exigence métier, en assurant cohérence technique, performance et gouvernance. Mon rôle transverse m'amène à <strong>encadrer les Tech Leads</strong> et à structurer les standards d'architecture et d'ingénierie.",
        "about.years": "Années d'expérience",
        "about.years_short": "Années d'exp.",
        "about.projects": "Projets réalisés",
        "about.projects_short": "Projets",
        "about.companies": "Entreprises",
        "about.languages": "Langues",
        "about.french": "Français",
        "about.english": "Anglais",
        "about.arabic": "Arabe",
        "about.native": "Langue maternelle",
        "about.fluent": "Courant",
        "about.interests": "Centres d'intérêt",
        "about.hobbies": "Loisirs",
        "about.sport": "Sport",
        "about.music": "Musique",
        "about.travel": "Voyage",
        "about.location": "Localisation",

        // Skills
        "skills.tag": "&lt;skills&gt;",
        "skills.title": "Mes Compétences",
        "skills.subtitle": "Technologies et méthodologies maîtrisées",
        "skills.backend": "Backend",
        "skills.frontend": "Frontend",
        "skills.security": "Sécurité & Observabilité",
        "skills.methods": "Méthodologies",
        "skills.expertise": "Niveau d'expertise",
        "skills.cloud_arch": "Architecture Cloud & Solutions",
        "skills.data_eng": "Data Engineering & IA",
        "skills.dotnet": "Développement .NET / C#",

        // Experience
        "experience.tag": "&lt;experience&gt;",
        "experience.title": "Mes Expériences",
        "experience.subtitle": "Parcours professionnel et réalisations",
        "exp.lfp.date": "Fév. 2026 - Aujourd'hui",
        "exp.lfp.desc": "Architecture data de la plateforme iSphere, le SI métier de la Ligue de Football Professionnel (clubs, joueurs, contrats, licences, compétitions).",
        "exp.lfp.item1": "Conception de l'architecture data : Lakehouse Databricks en architecture médaillon (bronze / silver / gold)",
        "exp.lfp.item2": "Rôle central au sein de l'équipe iSphere : cadrage des besoins data des domaines métier",
        "exp.lfp.item3": "Implémentation de l'approche Data Mesh : data products par domaine, data contracts",
        "exp.lfp.item4": "Ingestion des événements du SI iSphere (Cosmos DB, Event Sourcing) et des référentiels SQL vers le Lakehouse",
        "exp.lfp.item5": "Gouvernance des données avec Unity Catalog : catalogage, lineage, contrôle d'accès",
        "exp.lfp.item6": "Intégration Microsoft Fabric : exposition des données gold via OneLake, rapports Power BI en Direct Lake",
        "exp.upcoop1.desc": "Co Responsable du pôle architecture au sein de la Fabrik Digitale de Up Coop, en charge de l'accompagnement de l'ensemble des Tech Leads sur leurs projets.",
        "exp.upcoop1.item1": "Accompagnement des Tech Leads sur les choix d'architecture, bonnes pratiques et delivery",
        "exp.upcoop1.item2": "Mise en place des standards techniques : sécurité, qualité, monitoring",
        "exp.upcoop1.item3": "Animation des revues d'architecture et participation aux cadrages projets",
        "exp.upcoop1.item4": "Pilotage transverse de la stratégie FinOps et optimisation des coûts cloud",
        "exp.upcoop1.item5": "Veille & animation technique : animation de la communauté des Tech Leads, organisation de sessions de formation et de partage de connaissances",
        "exp.upcoop1.item6": "Documentation & référentiels : création et maintien de la documentation d'architecture, centralisation des bonnes pratiques",
        "exp.upcoop1.item7": "Data & IA : conception de la Data Platform multi-filiales sur Databricks AWS (Lakehouse, S3), architecture hub-and-spoke et Data Mesh, migration Unity Catalog, POC IA métiers",
        "exp.upcoop1.item9": "Plateforme hybride Microsoft Fabric / Databricks : mirroring des bases opérationnelles (Azure SQL, Cosmos DB) vers OneLake, reporting Power BI",
        "exp.upcoop1.item8": "DevSecOps : adoption de pratiques DevSecOps à l'échelle, intégration sécurité dans les workflows CI/CD et infrastructures as code",

        "exp.upcoop2.desc": "Conception et déploiement d'un écosystème digital à destination des commerçants affiliés et des équipes back-office de Up Coop.",
        "exp.upcoop2.item1": "Architecture microservices orientée domaine (pattern CQRS : SQL en écriture, Cosmos DB en lecture)",
        "exp.upcoop2.item2": "Pipelines ETL distribués sur Databricks pour l'intégration de données partenaires à forte volumétrie",
        "exp.upcoop2.item3": "Infrastructure sécurisée et résiliente : Azure Firewall, Private Endpoint, VNet, Application Gateway, Front Door",
        "exp.upcoop2.item4": "Exposition des APIs via API Management, sécurisation avec Azure AD B2C et Managed Identity",
        "exp.upcoop2.item5": "Mise en œuvre d'une stratégie de sauvegarde et de résilience (multi-régions, RPO/RTO, reprise d'activité)",
        "exp.upcoop2.item6": "Monitoring & alerting avec Azure Monitor, Application Insights, Log Analytics (KQL)",
        "exp.upcoop2.item7": "Référent FinOps : optimisation des coûts, dimensionnement, gouvernance budgétaire des environnements",

        "exp.yoss.desc": "Création de la plateforme YOSS (startup du groupe Adecco) connectant freelances et grands comptes : plateforme data (ingestion, analytics) et services cloud Azure.",
        "exp.yoss.item1": "Conception du data model et des pipelines d'ingestion avec Azure Data Factory",
        "exp.yoss.item2": "Entrepôt analytique Azure SQL Data Warehouse et cubes Azure Analysis Services (SSAS) pour le reporting Power BI",
        "exp.yoss.item3": "Extraction automatisée de données des documents avec Azure Cognitive Services",
        "exp.yoss.item4": "Automatisation des déploiements des pipelines data avec Azure DevOps (CI/CD)",

        "exp.deloitte.title": "Projet TRex - Consultant .NET Senior & Architecte",
        "exp.deloitte.desc": "Participation à la conception et au développement de TRex, une solution interne de gestion et d'édition des déclarations fiscales des clients grands comptes de TAJ.",
        "exp.deloitte.item1": "Définition de l'architecture microservices déployée sur Azure Service Fabric avec orchestration distribuée",
        "exp.deloitte.item2": "Développement du backend applicatif en ASP.NET / WebAPI, structuré en services métier indépendants",
        "exp.deloitte.item3": "Communication interservices via Azure Service Bus avec gestion des messages métiers",
        "exp.deloitte.item4": "Contribution au noyau applicatif (services transverses, gestion des sessions, logique de validation fiscale)",
        "exp.deloitte.item5": "Développement du frontend desktop en WPF avec XAML, incluant des interfaces complexes orientées métier",
        "exp.deloitte.item6": "Intégration de Azure Active Directory pour la gestion des accès et des identités",

        "exp.loreal.desc": "Refonte complète de SoLuxe, une application mobile métier destinée aux commerciaux de la division Luxe pour la prise de commande et le suivi des ventes sur le terrain.",
        "exp.loreal.item1": "Analyse de l'existant et refonte de l'architecture applicative",
        "exp.loreal.item2": "Conception et développement d'une Windows Store App moderne en XAML / C# avec pattern MVVM",
        "exp.loreal.item3": "Mise en œuvre de la synchronisation offline/online avec SQLite et composants SyncFusion",
        "exp.loreal.item4": "Conseils sur les pratiques de continuous integration et configuration de la chaîne de build avec TFS",

        "exp.agb.desc": "Participation à la refonte complète du Core Banking System d'une grande banque privée, en partenariat avec Microsoft Consulting Services.",
        "exp.agb.item1": "Conception et implémentation de l'infrastructure applicative avec Windows Store App, Prism et pattern MVVM",
        "exp.agb.item2": "Développement du noyau métier bancaire (gestion des opérations, comptes, produits) en collaboration avec Microsoft",
        "exp.agb.item3": "Réalisation d'interfaces riches et interactives en WPF / XAML pour les agents front et middle-office",
        "exp.agb.item4": "Intégration des Web API sécurisées, communication interservices via Service Bus, gestion des identités via ADFS",
        "exp.agb.item5": "Développement de composants modulaires avec MEF, instrumentation via Enterprise Library et traçabilité avec ETW",

        // Education
        "education.tag": "&lt;education&gt;",
        "education.title": "Formation",
        "education.heading": "Mon Parcours Académique",
        "education.degree": "Master en Intelligence Artificielle",

        // Contact
        "contact.tag": "&lt;contact&gt;",
        "contact.title": "Travaillons Ensemble",
        "contact.subtitle": "N'hésitez pas à me contacter pour discuter de vos projets",
        "contact.desc": "N'hésitez pas à me contacter pour discuter de vos projets d'architecture, de transformation cloud ou de data.",
        "contact.phone": "Téléphone",
        "contact.website": "Site Web",
        "contact.form.name": "Votre nom",
        "contact.form.name_label": "Nom complet",
        "contact.form.email": "Votre email",
        "contact.form.subject": "Sujet",
        "contact.form.message": "Votre message",
        "contact.form.send": "Envoyer le message",

        // Footer
        "footer.rights": "Tous droits réservés."
    },

    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",

        // Hero
        "hero.badge": "Available for new projects",
        "hero.greeting": "// Hello, I am",
        "hero.description": "Databricks, Microsoft Fabric & Azure Expert with <strong>+13 years of experience</strong> designing scalable and secure data platforms and cloud solutions.",
        "hero.contact": "Contact Me",
        "hero.download": "Download CV",
        "hero.see_exp": "See my experience",
        "hero.clients": "They trusted me",

        // About
        "about.tag": "&lt;about&gt;",
        "about.title": "My Profile",
        "about.who": "Who am I?",
        "about.intro": "Solution Architect with over <strong>13 years of experience</strong>, expert in <strong>Azure</strong> and <strong>DevOps</strong>. I specialize in designing and implementing scalable and secure cloud, data, and AI solutions.",
        "about.desc2": "I work on strategic projects with high business requirements, ensuring technical consistency, performance, and governance. My cross-functional role leads me to <strong>mentor Tech Leads</strong> and establish architecture and engineering standards.",
        "about.years": "Years of Experience",
        "about.years_short": "Years exp.",
        "about.projects": "Projects Completed",
        "about.projects_short": "Projects",
        "about.companies": "Companies",
        "about.languages": "Languages",
        "about.french": "French",
        "about.english": "English",
        "about.arabic": "Arabic",
        "about.native": "Native",
        "about.fluent": "Fluent",
        "about.interests": "Interests",
        "about.hobbies": "Hobbies",
        "about.sport": "Sports",
        "about.music": "Music",
        "about.travel": "Travel",
        "about.location": "Location",

        // Skills
        "skills.tag": "&lt;skills&gt;",
        "skills.title": "My Skills",
        "skills.subtitle": "Technologies and methodologies mastered",
        "skills.backend": "Backend",
        "skills.frontend": "Frontend",
        "skills.security": "Security & Observability",
        "skills.methods": "Methodologies",
        "skills.expertise": "Expertise Level",
        "skills.cloud_arch": "Cloud & Solutions Architecture",
        "skills.data_eng": "Data Engineering & AI",
        "skills.dotnet": ".NET / C# Development",

        // Experience
        "experience.tag": "&lt;experience&gt;",
        "experience.title": "My Experience",
        "experience.subtitle": "Professional journey and achievements",
        "exp.lfp.date": "Feb. 2026 - Present",
        "exp.lfp.desc": "Data architecture of the iSphere platform, the core business IS of the French Professional Football League (clubs, players, contracts, licenses, competitions).",
        "exp.lfp.item1": "Data architecture design: Databricks Lakehouse with medallion architecture (bronze / silver / gold)",
        "exp.lfp.item2": "Central role within the iSphere team: scoping data needs across business domains",
        "exp.lfp.item3": "Data Mesh implementation: data products per domain, data contracts",
        "exp.lfp.item4": "Ingestion of iSphere events (Cosmos DB, Event Sourcing) and SQL referentials into the Lakehouse",
        "exp.lfp.item5": "Data governance with Unity Catalog: cataloging, lineage, access control",
        "exp.lfp.item6": "Microsoft Fabric integration: gold data exposed via OneLake, Power BI reports in Direct Lake",
        "exp.upcoop1.desc": "Co-Head of Architecture at Up Coop's Digital Factory, responsible for supporting all Tech Leads on their projects.",
        "exp.upcoop1.item1": "Supporting Tech Leads on architecture choices, best practices, and delivery",
        "exp.upcoop1.item2": "Implementing technical standards: security, quality, monitoring",
        "exp.upcoop1.item3": "Leading architecture reviews and participating in project scoping",
        "exp.upcoop1.item4": "Cross-functional FinOps strategy management and cloud cost optimization",
        "exp.upcoop1.item5": "Technical watch & community leadership: animating the Tech Leads community, organizing training and knowledge sharing sessions",
        "exp.upcoop1.item6": "Documentation & references: creating and maintaining architecture documentation, centralizing best practices",
        "exp.upcoop1.item7": "Data & AI: design of the multi-subsidiary Data Platform on Databricks AWS (Lakehouse, S3), hub-and-spoke and Data Mesh architecture, Unity Catalog migration, business AI POCs",
        "exp.upcoop1.item9": "Hybrid Microsoft Fabric / Databricks platform: mirroring of operational databases (Azure SQL, Cosmos DB) to OneLake, Power BI reporting",
        "exp.upcoop1.item8": "DevSecOps: organization-wide adoption of DevSecOps practices, security integration in CI/CD workflows and infrastructure as code",

        "exp.upcoop2.desc": "Design and deployment of a digital ecosystem for affiliated merchants and Up Coop back-office teams.",
        "exp.upcoop2.item1": "Domain-oriented microservices architecture (CQRS pattern: SQL for writes, Cosmos DB for reads)",
        "exp.upcoop2.item2": "Distributed ETL pipelines on Databricks for high-volume partner data integration",
        "exp.upcoop2.item3": "Secure and resilient infrastructure: Azure Firewall, Private Endpoint, VNet, Application Gateway, Front Door",
        "exp.upcoop2.item4": "API exposure via API Management, secured with Azure AD B2C and Managed Identity",
        "exp.upcoop2.item5": "Implementation of backup and resilience strategy (multi-region, RPO/RTO, disaster recovery)",
        "exp.upcoop2.item6": "Monitoring & alerting with Azure Monitor, Application Insights, Log Analytics (KQL)",
        "exp.upcoop2.item7": "FinOps Lead: cost optimization, sizing, budget governance across environments",

        "exp.yoss.desc": "Creation of the YOSS platform (Adecco Group startup) connecting freelancers and large companies: data platform (ingestion, analytics) and Azure cloud services.",
        "exp.yoss.item1": "Data model design and ingestion pipelines with Azure Data Factory",
        "exp.yoss.item2": "Azure SQL Data Warehouse analytics store and Azure Analysis Services (SSAS) cubes for Power BI reporting",
        "exp.yoss.item3": "Automated data extraction from documents with Azure Cognitive Services",
        "exp.yoss.item4": "Automated deployment of data pipelines with Azure DevOps (CI/CD)",

        "exp.deloitte.title": "TRex Project - Senior .NET Consultant & Architect",
        "exp.deloitte.desc": "Participated in the design and development of TRex, an internal solution for managing and editing tax declarations for TAJ's large corporate clients.",
        "exp.deloitte.item1": "Microservices architecture definition deployed on Azure Service Fabric with distributed orchestration",
        "exp.deloitte.item2": "Backend application development in ASP.NET / WebAPI, structured into independent business services",
        "exp.deloitte.item3": "Inter-service communication via Azure Service Bus with business message handling",
        "exp.deloitte.item4": "Contribution to the application core (cross-functional services, session management, tax validation logic)",
        "exp.deloitte.item5": "Desktop frontend development in WPF with XAML, including complex business-oriented interfaces",
        "exp.deloitte.item6": "Azure Active Directory integration for access and identity management",

        "exp.loreal.desc": "Complete redesign of SoLuxe, a business mobile application for Luxury division sales representatives for order taking and field sales tracking.",
        "exp.loreal.item1": "Analysis of existing system and application architecture redesign",
        "exp.loreal.item2": "Design and development of a modern Windows Store App in XAML / C# with MVVM pattern",
        "exp.loreal.item3": "Implementation of offline/online synchronization with SQLite and SyncFusion components",
        "exp.loreal.item4": "Guidance on continuous integration practices and TFS build chain configuration",

        "exp.agb.desc": "Participated in the complete redesign of a major private bank's Core Banking System, in partnership with Microsoft Consulting Services.",
        "exp.agb.item1": "Design and implementation of application infrastructure with Windows Store App, Prism, and MVVM pattern",
        "exp.agb.item2": "Banking core business development (operations, accounts, products management) in collaboration with Microsoft",
        "exp.agb.item3": "Development of rich and interactive interfaces in WPF / XAML for front and middle-office agents",
        "exp.agb.item4": "Integration of secure Web APIs, inter-service communication via Service Bus, identity management via ADFS",
        "exp.agb.item5": "Development of modular components with MEF, instrumentation via Enterprise Library and tracing with ETW",

        // Education
        "education.tag": "&lt;education&gt;",
        "education.title": "Education",
        "education.heading": "My Academic Background",
        "education.degree": "Master's in Artificial Intelligence",

        // Contact
        "contact.tag": "&lt;contact&gt;",
        "contact.title": "Let's Work Together",
        "contact.subtitle": "Feel free to contact me to discuss your projects",
        "contact.desc": "Feel free to contact me to discuss your architecture, cloud transformation, or data projects.",
        "contact.phone": "Phone",
        "contact.website": "Website",
        "contact.form.name": "Your name",
        "contact.form.name_label": "Full name",
        "contact.form.email": "Your email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your message",
        "contact.form.send": "Send message",

        // Footer
        "footer.rights": "All rights reserved."
    }
};

// i18n Class
class I18n {
    constructor() {
        // Check localStorage first, then detect browser language
        const savedLang = localStorage.getItem('cv-lang');
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            // Detect browser language (e.g., 'fr-FR' -> 'fr', 'en-US' -> 'en')
            const browserLang = navigator.language || navigator.userLanguage || 'en';
            const langCode = browserLang.split('-')[0].toLowerCase();
            // Default to English
            this.currentLang = 'en';
        }
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.setupToggle();
    }

    setupToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (!langToggle) return;

        const buttons = langToggle.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }

            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.updateLanguage(lang);
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    updateLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('cv-lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.innerHTML = translation;
            }
        });

        const titles = {
            fr: 'Djilali SAHRAOUI - Architecte Solutions / Data Architect',
            en: 'Djilali SAHRAOUI - Solution Architect / Data Architect'
        };
        document.title = titles[lang];

        // Update CV download link based on language
        const cvDownload = document.getElementById('cv-download');
        if (cvDownload) {
            const cvFiles = {
                fr: 'cv-djilali-sahraoui.pdf',
                en: 'cv-djilali-sahraoui-en.pdf'
            };
            cvDownload.href = cvFiles[lang];
        }
    }

    getTranslation(key) {
        return translations[this.currentLang]?.[key] || translations['fr'][key] || key;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
