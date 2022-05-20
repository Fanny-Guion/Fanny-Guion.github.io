const skills = [

    {
        name: "HTML",
        background: "Bureau_3_1_HTML.jpg",
        description: [" Le langage HTML : un pour les gouverner tous !"," La base du langage, premiers pas émus dans l'indispensable structure des pages web, qui ne serait rien (ou presque), sans son travail en étroite collaboration avec le CSS."],
        score: "⭐⭐⭐⭐",
        methods: ["link", "BEM", "balise", "formulaire", "script"],
        logo:"logo_HTML.png"
    },

    {
        name: "CSS",
        background: "Bureau_3_2_CSS.jpg",
        description: ["Le CSS : le fidèle compagnon du html ! (le style des pages ne se ferait pas sans lui)"," Une fois les bases acquises, et les complexités 'maîtrisé' (flex, transition, responsive,...) : tout devient possible... tout !","Le plaisir d'une mise en forme réussie 😊."],
        score: "⭐⭐⭐⭐",
        methods: ["display", "position", "hover", "sprite", "transition", "responsive",".stylelint"],
        logo:"logo_CSS.png"
    },

    {
        name: "JS",
        background: "Bureau_3_3_JS.jpg",
        description: ["Le JavaScript : là, on entre dans ma partie préférée !","La recherche des éléments d'un tableau, Les fonctions, les instructions, la manipulation du DOM... en somme, les premières joies de rechercher pendant des heures une virgule perdue 🤣. ",""],
        score: "⭐⭐⭐⭐",
        methods: ["tableau", "fonction", "instruction", "DOM", "évènement", "modularisation"],
        logo:"logo_JS.png"
    },

    {
        name: "NODE",
        background: "Bureau_3_4_NODE.jpg",
        description: ["NODE : à la découverte de la mise en réseau (merci à Ryan Dahl) ! ","Permettant l’exécution de JS côté serveur, grâce à V8, entre le require des modules natifs, tiers & 'maisons', le html-css-js se mettent en fin à la page 😁."," La modularisation quant à elle permet une SOC rigoureuse."],
        score: "⭐⭐⭐",
        methods: ["require", "readline & create Interface", "question & on", "router", "server", "package.json", ".env", "node_module", "express", "ejs, dayjs, ..."],
        logo:"logo_NODE.png"    
    },

    {
        name: "DATA",
        background: "Bureau_3_5_DATA.jpg",
        description: ["DATA : bien gérer une base de données relationnelle !","La méthode merise m'a permise de bien conceptualiser l'application. Puis le langage SQL (via le SGBD postgres), ses requêtes, et leur mise en place par le dataMapper puis par model-view-controller l'ont rendue très concrète."],
        score: "⭐⭐⭐⭐",
        methods: ["MCD ,MLD, MLP", "postgres", "SQL & associations", "database", "dataMapper/MVC", "constructor", "middleware", "static, engine", "session", "async/await"],
        logo:"logo_DATA.png" 
    },
    
    {
        name: "Sequelize",
        background: "Bureau_3_6_Sequelize.jpg",
        description: [ "En avant pour sequelize (on jette tout et on recommence) !","Sequelize est un ORM qui m'a grandement facilité la vie, puisque il possède des requêtes intégrées : FindAll, findByPk,...","En parallèle l'apprentissage de try/catch m'a aussi permis de limiter les if en sapin 🎄."],
        score: "⭐⭐⭐",
        methods: ["sequelize", "try/catch"],
        logo:"logo_SEQUELIZE.png"
    },

    {
        name: "API",
        background: "Bureau_3_7_API.jpg",
        description: ["AJAX : éviter de recharger les pages web !","REST m'a permis de découvrir les méthodes PUT, PATCH & DELETE (en plus de GET & POST).","L'API fetch (& cors) m'a fournit une interface de requêtes pour les BDD web."],
        score: "⭐⭐⭐⭐",
        methods: ["AJAX", "fetch", "API Rest", "(Insomnia, Rest client)"],
        logo:"logo_API.png"  
    },

    {
        name: "SPA",
        background: "Bureau_3_8_SPA.jpg",
        description: ["SPA : mettre à jour le contenu d'une page !", "L'implémentation SPA m'a donné l'occasion de pouvoir mettre à jour les données d'une page. Combiné avec les modules bundler (fusionner) et watcher (grâce à .vue, lit et interagit) cela donne une interaction complète."],
        score: "⭐⭐⭐",
        methods: ["HTML templates", "bundler", "watcher"],
        logo:"logo_AJAX.png" 
    },

    {
        name: "Déploiement",
        background: "Bureau_3_9_Deploiement.jpg",
        description: ["Déploiement : finalité du tout en un !","Le CMS est très pratique, car à partir d'une BDD il permet de gérer l’apparence et le contenu d’un site, et de 'réviser' tout le code (html, css, js...). Et pourquoi ne pas utiliser un NoSQL ? Mais cela est un autre débat 🤣."],
        score: "⭐⭐⭐",
        methods: ["CMS", "release", "NoSQL"],
        logo:"logo_NoSQL.png"
    },

    {
        name: "GitHub",
        background: "Bureau_3_10_GitHub.jpg",
        description: ["GitHub : l'absolu collaboration et versionnage !","Ce qui m'a le plus plu, en plus des fonctionnalités évidentes liées à la gestion des repos, c'est qu'il y a aussi la possibilité de faire de la gestion de projets, à partir des 12 principes de la méthode Agile, grâce au kanban intégré."],
        score: "⭐⭐⭐",
        methods: ["Agile", "gestion de projet", "repositories", "clone", "pull", "branch & checkout", "add-commit-push", "issue", "pull request"],
        logo:"logo_GitHub.png"  
    },
    
    {
        name: "VisualBasic",
        background: "Bureau_3_11_VisualBasic.jpg",
        description: ["Visual Basic : Premiers pas vers le code !","Mon 1er métier, impliquait de nombreuses répétitions. Ce qui m'a naturellement amené à apprendre en autodidacte VBA, autant pour ses fonctions, que pour la création de logiciels de comptabilités."],
        score: "⭐⭐⭐",
        methods: ["sub", "fonction","msgbox", "if... else", "for (each)", "while", "VBProject", "VBComponents","Ucase","split", "DoEvents"],
        logo:"logo_VisualBasic.png"  
    }
]