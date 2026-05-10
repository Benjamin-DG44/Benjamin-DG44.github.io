import {getProjectImage} from "../utils/getUtils";
import {
    G_DRIVE_PROJET_INTRANET,
    G_DRIVE_PROJET_JANVIER,
    G_DRIVE_PROJET_R3ST0_FR,
    G_DRIVE_PROJET_R3STO_ANDROID,
    G_DRIVE_PROJET_R3STO_DESKTOP,
    G_DRIVE_PROJET_THALI,
    G_DRIVE_PROJET_VEILLE_1,
    G_DRIVE_PROJET_VEILLE_2,
    G_DRIVE_STAGE_1,
} from "./URL";

export const EMAIL = "b.delaunay.guitton@gmail.com";

/* =========================
   COMPÉTENCES
========================= */

export const soft_skills = [
    "Travail d'équipe",
    "Autonomie",
    "Communication",
    "Curiosité",
    "Esprit critique",
];

export const personnal_skills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "PHP",
    "Symfony",
    "Doctrine",
    "Java",
    "Swing",
    "JavaFX",
    "JUnit",
    "Python",
    "SQL",
    "PostgreSQL",
    "Express JS",
    "Fastify",
    "Prisma",
    "React",
    "React Native",
    "Zod",
    "Git",
];

export const softwares = [
    "VS Code",
    "NetBeans",
    "Pycharm",
    "Webstorm",
    "IntelliJ IDEA",
    "Android Studio",
    "Looping",
    "Postman",
];

/* =========================
   TYPES
========================= */

export interface ProjectLink {
    label: string;
    url: string;
    type?: "github" | "gitlab" | "demo" | "drive" | "youtube" | "itchio" | "website";
}

export interface Project {
    idProject: number;
    name: string;
    img: string;
    resume: string;
    features: string[];
    tags: string[];
    links?: ProjectLink[];
}

/* =========================
   HELPERS
========================= */

const github = (url: string): ProjectLink => ({
    label: "GitHub",
    url,
    type: "github",
});

const gitlab = (url: string): ProjectLink => ({
    label: "GitLab",
    url,
    type: "gitlab",
});

const demo = (url: string): ProjectLink => ({
    label: "Démo",
    url,
    type: "demo",
});

const drive = (url: string): ProjectLink => ({
    label: "Google Drive",
    url,
    type: "drive",
});

const youtube = (url: string): ProjectLink => ({
    label: "YouTube",
    url,
    type: "youtube",
});

const itchio = (url: string): ProjectLink => ({
    label: "Itch.io",
    url,
    type: "itchio",
});

const website = (label: string, url: string): ProjectLink => ({
    label,
    url,
    type: "website",
});

/* =========================
   PROJETS
========================= */

export const projects: Project[] = [
    {
        idProject: 1,
        name: "HMMMM",
        img: getProjectImage(1, "main.webp"),
        resume:
            "Pour notre dernier projet de Terminale en NSI, notre professeur nous a demandé de créer un projet en " +
            "JavaScript. Avec deux amis, nous avons mis 1 à 2 mois à réaliser ce site web en parallèle des cours. " +
            "Son but ? Faire perdre patience et temps aux joueurs. PS : Le site est entièrement fonctionnel " +
            "(et possède une fin) !",
        features: [
            "Interaction avec l’utilisateur",
            "Mécaniques de frustration/challenge",
            "Progression et fin du jeu",
        ],
        tags: ["Javascript", "HTML", "CSS"],
        links: [
            github("https://github.com/Benjamin-DG44/Projet_HMMMM"),
            demo("https://benjamin-dg44.github.io/Projet_HMMMM"),
        ],
    },

    {
        idProject: 2,
        name: "Jeu vidéo en 2D",
        img: getProjectImage(2, "main.webp"),
        resume:
            "Pour commencer à acquérir des connaissances en développement de jeux vidéo, j'ai suivi un " +
            "tutoriel d'un youtubeur français pour créer un jeu 2D. J'ai apprécié cette expérience, bien " +
            "que le projet soit resté inachevé en raison de bugs liés aux versions différentes du logiciel " +
            "et de la concentration nécessaire pour suivre de longs épisodes (37) de 30 minutes à 1 heure chacun.",
        features: [
            "Mouvements du personnage",
            "Deux niveaux",
            "Système de Game Over",
        ],
        tags: ["C#", "Unity"],
        links: [
            youtube("https://www.youtube.com/watch?v=WtDXk6uuZO4"),
        ],
    },

    {
        idProject: 3,
        name: "Ropebound Rescue",
        img: getProjectImage(3, "main.webp"),
        resume:
            "Ropebound Rescue est un prototype de jeu créé lors de ma première game jam, un événement où " +
            "l'on développe un jeu sur un thème imposé en temps limité (ici 48h). Nous étions deux pour " +
            "concevoir ce jeu autour du thème “connexion” : une corde relie deux personnages contrôlés par " +
            "un seul joueur. Le but est d'activer des leviers pour avancer dans les niveaux.",
        features: [
            "2 personnages contrôlables",
            "2 niveaux différents",
            "Mouvement des personnages restreint par une corde"
        ],
        tags: ["C#", "Unity"],
        links: [
            itchio("https://asxiox.itch.io/ropebound-rescue"),
        ],
    },

    {
        idProject: 4,
        name: "Projet Python : Analyse de logs",
        img: getProjectImage(4, "main.webp"),
        resume: "Le projet \"Analyse de logs\" est le premier a avoir été réalisé durant ma première " +
            "année en BTS SIO. Le but de ce projet est de trier les informations provenant d'un fichier CSV ou TXT. " +
            "Puis de transférer les informations voulu dans un fichier SQL, pour les ajouter à une base de donnée " +
            "existante. Ce projet a été très enrichissant, il m'a permis de travailler en binôme et de développer " +
            "de nouvelles compétences en Python.",
        features: [
            "Extraction de données depuis un fichier texte",
            "Conversion des données aux formats CSV",
            "Insertion des données dans une BDD MariaDB",
        ],
        tags: ["Python", "SQL"],
        links: [
            github("https://github.com/Benjamin-DG44/Projet_Python_Analyse_Logs"),
            drive(G_DRIVE_PROJET_JANVIER),
        ],
    },

    {
        idProject: 5,
        name: "Projet Java : CRUD",
        img: getProjectImage(5, "main.webp"),
        resume: "Le projet \"Thali\" consiste en la mise en place de l'opération CRUD (Create, Read, Update, Delete) " +
            "sur un logiciel codé en JAVA pour une entreprise d'agence de voyage. En parallèle, les informations " +
            "que l'utilisateur rentrait, modifiait une base de données SQL. Ce projet m'a permis de nouveau de " +
            "travailler en binôme. Il m'a aussi appris à travailler sur un projet prémonté (en partie) et donc de " +
            "savoir m'adapter.",
        features: [
            "Opérations CRUD",
            "Interfaces Swing",
            "Connexion base SQL",
        ],
        tags: ["Java", "SQL", "Swing"],
        links: [
            github("https://github.com/Benjamin-DG44/Projet_Java_Thali"),
            drive(G_DRIVE_PROJET_THALI),
        ],
    },

    {
        idProject: 6,
        name: "Projet PHP : Intranet",
        img: getProjectImage(6, "main.webp"),
        resume: "Le projet \"Intranet\" consiste en la mise en place d'outils permettant aux employés d'une organisation " +
            "fictive nommée \"Corpany\". Nous étions 3 à travailler sur ce projet, durant lequel nous devions remplir" +
            "des missions chaque semaine. Ces missions nous guidait sur la mise en place de notre intranet. Ainsi," +
            "on a implémenté un tableau de bord, un espace de documents, un agenda, une messagerie, et les opérations " +
            "CRUD pour les administrateurs.",
        features: [
            "Authentification (identifiant / mot de passe)",
            "Messagerie et espace de stockage personnel",
            "Gestion des rôles avec droits spécifiques",
        ],
        tags: ["PHP", "HTML", "CSS", "SQL", "Python"],
        links: [
            gitlab("https://gitlab.com/AnaisPrt/projet-intranet"),
            drive(G_DRIVE_PROJET_INTRANET),
        ],
    },

    {
        idProject: 7,
        name: "Veille technologique n°1 : Passwordless",
        img: getProjectImage(7, "main.webp"),
        resume: "Les mots de passe sont-ils devenus obsolètes à l’ère du passwordless ? C'est la question à la quelle " +
            "cette veille technologique va répondre. En conclusion, les mots de passe ne sont pas encore devenus " +
            "obsolètes. Le coût économique pour mettre en place les nouveaux moyens d'authentification est beaucoup " +
            "trop élevé pour les entreprises puisque cela impliquerait de devoir changer toute leur infrastructure " +
            "concernant les authentifications.",
        features: [
            "Clés physiques (FIDO2)",
            "Scanners biométriques (empreintes digitales, rétiniens)",
        ],
        tags: ["Feedly", "Google Actualités"],
        links: [
            drive(G_DRIVE_PROJET_VEILLE_1),
        ],
    },

    {
        idProject: 8,
        name: "Stage : Développement d'une app",
        img: getProjectImage(8, "main.webp"),
        resume: "Durant mon stage chez SCR Informatiques, j'ai eu pour mission principale le développement d'une application" +
            "mobile, nommée AVI. Cette application va servir aux formateurs et aux commerciaux de l'entreprise pour réserver " +
            "et noter des restaurants et des hôtels lors de leurs déplacements. J'ai pu assister à la construction d'un projet, " +
            "de sa phase de réflexion à sa phase de développement. Ce qui m'a pris le plus de temps sur ce projet d'entreprise, " +
            "est le développement d'une API.",
        features: [
            "Conception d'un MCD et d'un MLD",
            "Mise en place d'une API REST et d'une BDD",
            "Programmer les formulaires de création et la navigation entre les pages",
        ],
        tags: [
            "React",
            "React Native",
            "Prisma",
            "Express JS",
            "TypeScript",
            "PostgreSQL",
        ],
        links: [
            drive(G_DRIVE_STAGE_1),
        ],
    },

    {
        idProject: 9,
        name: "Site web : R3st0.fr",
        img: getProjectImage(9, "main.webp"),
        resume:
            "Le projet R3st0.fr vise à créer un site web de critiques de restaurants, permettant aux utilisateurs de " +
            "consulter et laisser des avis. Cela leur facilite le choix du restaurant dans lequel ils vont à aller manger.",
        features: [
            "Avis utilisateurs (commentaires et notation)",
            "Comptes utilisateurs",
            "Recherche multicritères",
        ],
        tags: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
        links: [
            gitlab("https://gitlab.com/Jtaille/p1_g3_siteresto2025"),
            drive(G_DRIVE_PROJET_R3ST0_FR),
        ],
    },

    {
        idProject: 10,
        name: "Veille technologique n°2 : Vibe coding",
        img: getProjectImage(10, "main.webp"),
        resume: "Problématique : Le vibe coding va-t-il redéfinir le métier de développeur et la façon de produire du logiciel ? " +
            "Le vibe coding accélère la création de logiciels et permet aux non-développeurs de produire des applications, " +
            "mais il ne remplace pas l’expertise humaine : il transforme les méthodes de production tout en exigeant supervision " +
            "et vérification pour garantir la maintenabilité, la sécurité et la conformité légale.",
        features: [
            "Multi-Agent collaboration",
            "Génération de code par prompt en langage naturel",
            "Simulation et test automatisés"
        ],
        tags: ["Feedly", "Google Actualités", "TLDR", "Daily.dev"],
        links: [
            drive(G_DRIVE_PROJET_VEILLE_2),
        ],
    },

    {
        idProject: 11,
        name: "Autoformation : JavaFX et persistance",
        img: getProjectImage(11, "main.webp"),
        resume: "J’ai réalisé cette application desktop en Java à partir d’un tutoriel de 2015, en utilisant JavaFX " +
            "et la persistance des données, et je souhaite désormais y apporter mes propres modifications.",
        features: [
            "Découverte de JavaFX",
            "Persistance des données",
            "Déploiement d'un JAR",
        ],
        tags: ["Java", "JavaFX", "Maven"],
        links: [
            github("https://github.com/Benjamin-DG44/Entrainement_Java"),
            website(
                "Tutoriel",
                "https://code.makery.ch/fr/library/javafx-tutorial/"
            ),
        ],
    },

    {
        idProject: 12,
        name: "Application native android : R3st0",
        img: getProjectImage(12, "main.webp"),
        resume: "Développement d'une application Android permettant la consultation et la réservation de table dans des " +
            "restaurants via une API REST. La base de données utilisée est inspirée du \"R3st0.fr\"",
        features: [
            "Mise en place d'une API REST",
            "Réservations de restaurants",
            "Consultation de la fiche des restaurants"
        ],
        tags: ["Android", "Java", "PHP"],
        links: [
            gitlab("https://gitlab.com/AnaisPrt/p2_g7_2slam_ap_projet_android"),
            drive(G_DRIVE_PROJET_R3STO_ANDROID),
        ],
    },

    {
        idProject: 13,
        name: "Autoformation : Java",
        img: getProjectImage(13, "main.webp"),
        resume: "Projet personnel d’autoformation en Java à travers une série d’exercices progressifs. " +
            "L’objectif est d’approfondir les bases du langage tout en explorant des concepts plus avancés " +
            "tels que la structuration d’un projet, la manipulation de données et l’utilisation de bibliothèques " +
            "standards.",
        features: [
            "Lecture / écriture de fichiers",
            "Exercices évolutifs",
        ],
        tags: ["Java"],
        links: [
            github("https://github.com/Benjamin-DG44/Entrainement_Java"),
        ],
    },

    {
        idProject: 14,
        name: "Stage : Développement d'une app (suite)",
        img: getProjectImage(14, "main.webp"),
        resume: "Durant ce second stage chez SCR Informatiques, j'ai eu l'opportunité de poursuivre le projet que j'avais " +
            "débuté l'année dernière en binôme. L'objectif durant ces 6 semaines de stage étaient de refactoriser " +
            "l'API, de rendre l'application mobile dynamique et de sortir un APK.",
        features: [
            "Refactorisation de l'API, migration de l'ORM Prisma (v6 -> v7)",
            "Refonte des écrans et formulaires",
            "Génération d'un APK",
        ],
        tags: [
            "React Native",
            "Prisma",
            "Fastify",
            "TypeScript",
            "Zod",
            "PostgreSQL",
        ],
    },

    {
        idProject: 15,
        name: "Application de modération",
        img: getProjectImage(15, "main.png"),
        resume: "Application de bureau codée en Java, structurée selon une architecture MVC, en équipe de 3. Le rôle de cette " +
            "application est de gérer les avis des restaurants provenant du site web \"R3s0.fr\". Cette application " +
            "possède deux types d'utilisateurs : les modérateurs et les responsables. Un responsable possède plus de " +
            "droits qu'un modérateur.",
        features: [
            "Authentification (modérateurs et responsables)",
            "Gestion des rôles, principe du moindre privilèges ",
            "Modération des commentaires",
        ],
        tags: ["Java", "Swing"],
        links: [
            gitlab("https://gitlab.com/AnaisPrt/p3_g1_projet_moderation"),
            drive(G_DRIVE_PROJET_R3STO_DESKTOP),
        ],
    },
];

export const projectImages = {
    1: {
        main: "/images/projects/project-1/main.webp",
    },
    2: {
        main: "/images/projects/project-2/main.webp",
    },
    3: {
        main: "/images/projects/project-3/main.webp",
    },
    4: {
        main: "/images/projects/project-4/main.webp",
    },
    5: {
        main: "/images/projects/project-5/main.webp",
    },
    6: {
        main: "/images/projects/project-6/main.webp",
        admin_panel: "/images/projects/project-6/admin-panel.png",
        tableau_de_bord: "/images/projects/project-6/tableau-de-bord.png",
        connexion: "/images/projects/project-6/connexion.png",
    },
    7: {
        main: "/images/projects/project-7/main.webp",
    },
    8: {
        main: "/images/projects/project-8/main.webp",
    },
    9: {
        main: "/images/projects/project-9/main.webp",
    },
    10: {
        main: "/images/projects/project-10/main.webp",
    },
    11: {
        main: "/images/projects/project-11/main.webp",
    },
    12: {
        main: "/images/projects/project-12/main.webp",
    },
    13: {
        main: "/images/projects/project-13/main.webp",
    },
    14: {
        main: "/images/projects/project-14/main.webp",
    },
    15: {
        main: "/images/projects/project-15/main.webp",
    },
};