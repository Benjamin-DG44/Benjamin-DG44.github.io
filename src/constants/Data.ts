import {getImageProjectUrl} from "../utils/getUrls";

export const EMAIL: string = "b.delaunay.guitton@gmail.com"

// A propos de moi
export const soft_skills: string[] =
    ["Travail d'équipe", "Autonomie", "Communication", "Curiosité", "Esprit critique"];

export const personnal_skills: string[] =
    ["HTML", "CSS", "Javascript", "PHP", "Java", "Python", "MySQL", "PostgreSQL", "Express JS", "Prisma", "React", "React Native"];

export const softwares: string[] =
    ["VS Code", "NetBeans", "Pycharm", "Webstorm", "IntelliJ IDEA", "Android Studio"]


// Projets réalisés
export interface Project {
    idProject: number;
    img: string;
    name: string;
    resume: string;
    features: string[];
    tags: string[];
    url_depot?: string;
    url_web?: string;
}

export const projects: Project[] = [
    {
        idProject: 1,
        img: getImageProjectUrl("project-1-main.webp"),
        name: "HMMMM",
        resume:
            "Pour notre dernier projet de Terminale en NSI, notre professeur nous a demandé de créer un projet en " +
            "JavaScript. Avec deux amis, nous avons mis 1 à 2 mois à réaliser ce site web en parallèle des cours. " +
            "Son but ? Faire perdre patience et temps aux joueurs. PS : Le site est entièrement fonctionnel " +
            "(et possède une fin) !",
        features: [
            "QCM",
            "Trompe l'utilisateur",
            "test"
        ],
        tags: ["Javascript", "HTML", "CSS"],
        url_depot: "https://github.com/Benjamin-DG44/Projet_HMMMM",
        url_web: "https://benjamin-dg44.github.io/Projet_HMMMM",
    },
    {
        idProject: 2,
        img: getImageProjectUrl("project-2-main.webp"),
        name: "Jeu vidéo en 2D",
        resume: "Pour commencer à acquérir des connaissances en développement de jeux vidéo, j'ai suivi un \n" +
            "tutoriel d'un youtubeur français pour créer un jeu 2D. J'ai apprécié cette expérience, bien \n" +
            "que le projet soit resté inachevé en raison de bugs liés aux versions différentes du logiciel \n" +
            "et de la concentration nécessaire pour suivre de longs épisodes (37) de 30 minutes à 1 heure chacun.",
        features: [
            "Mouvements du personnage",
            "2 niveaux différents",
            "Système de GAME OVER"
        ],
        tags: ["C#", "Unity"],
        url_web: "https://www.youtube.com/watch?v=WtDXk6uuZO4"
    },
    {
        idProject: 3,
        img: getImageProjectUrl("project-3-main.webp"),
        name: "Ropebound Rescue",
        resume: "Ropebound Rescue est un prototype de jeu créé lors de ma première game jam, un événement où \n" +
            "l'on développe un jeu sur un thème imposé en temps limité (ici 48h). Nous étions deux pour \n" +
            "concevoir ce jeu autour du thème “connexion” : une corde relie deux personnages contrôlés par \n" +
            "un seul joueur. Le but est d'activer des leviers pour avancer dans les niveaux.",
        features: [
            "2 personnages contrôlables",
            "2 niveaux différents",
            "Mouvement des personnages restreint par une corde"
        ],
        tags: ["C#", "Unity"],
        url_web: "https://asxiox.itch.io/ropebound-rescue"
    },
    {
        idProject: 4,
        img: getImageProjectUrl("project-4-main.webp"),
        name: "Projet Python : Analyse de logs",
        resume: "Le projet \"Analyse de logs\" est le premier a avoir été réalisé durant ma première \n" +
            "année en BTS SIO. Le but de ce projet est de trier les informations provenant d'un fichier CSV ou TXT. \n" +
            "Puis de transférer les informations voulu dans un fichier SQL, pour les ajouter à une base de donnée \n" +
            "existante. Ce projet a été très enrichissant, il m'a permis de travailler en binôme et de développer \n" +
            "de nouvelles compétences en Python.",
        features: [
            "Extraction de données depuis un fichier au format TXT",
            "Insertion des données au format CSV",
            "Insertion des données dans une BDD MariaBD"
        ],
        tags: ["Python", "MySQL"],
        url_depot: "https://github.com/Benjamin-DG44/Projet_Python_Analyse_Logs"
    },
    {
        idProject: 5,
        img: getImageProjectUrl("project-5-main.webp"),
        name: "Projet Java : Opérations CRUD : ",
        resume: "Le projet \"Thali\" consiste en la mise en place de l'opération CRUD (Create, Read, Update, Delete) \n" +
            "sur un logiciel codé en JAVA pour une entreprise d'agence de voyage. En parallèle, les informations \n" +
            "que l'utilisateur rentrait, modifiait une base de données MySQL. Ce projet m'a permis de nouveau de \n" +
            "travailler en binôme. Il m'a aussi appris à travailler sur un projet prémonté (en partie) et donc de \n" +
            "savoir m'adapter.",
        features: [
            "Création des opérations CRUD",
            "Manipulation d'interfaces graphiques (Swing)",
            "Liaison des données avec une BDD"
        ],
        tags: ["Java", "MySQL" , "Swing"],
        url_depot: "https://github.com/Benjamin-DG44/Projet_Java_Thali"
    },
    {
        idProject: 6,
        img: getImageProjectUrl("project-6-main.webp"),
        name: "Projet PHP : Intranet",
        resume: "Le projet \"Intranet\" consiste en la mise en place d'outils permettant aux employés d'une organisation \n" +
            "fictive nommée \"Corpany\". Nous étions 3 à travailler sur ce projet, durant lequel nous devions remplir\n" +
            "des missions chaque semaine. Ces missions nous guidait sur la mise en place de notre intranet. Ainsi,\n" +
            "on a implémenté un tableau de bord, un espace de documents, un agenda, une messagerie, et les opérations \n" +
            "CRUD pour les administrateurs.",
        features: [
            "Mise en place d'un système d'authentification (identifiant/mot de passe)",
            "Création d'une messagerie et d'un espace de stockage personnel",
            "Définition et gestion des rôles utilisateurs avec droits spécifiques",
        ],
        tags: ["PHP", "HTML", "CSS", "MySQL", "Python"],
        url_depot: "https://gitlab.com/AnaisPrt/projet-intranet"
    },
    {
        idProject: 7,
        img: getImageProjectUrl("project-7-main.webp"),
        name: "Stage : Développement d'une app",
        resume: "Durant mon stage chez SCR Informatiques, j'ai eu pour mission principale le développement d'une application\n" +
            "mobile, nommée AVI. Cette application va servir aux formateurs et aux commerciaux de l'entreprise pour réserver \n" +
            "et noter des restaurants et des hôtels lors de leurs déplacements. J'ai pu assister à la construction d'un projet, \n" +
            "de sa phase de réflexion à sa phase de développement. Ce qui m'a pris le plus de temps sur ce projet d'entreprise, \n" +
            "est le développement d'une API.",
        features: [
            "Conception d'un MCD et d'un MLD",
            "Mise en place d'une API REST et d'une BDD",
            "Programmer les formulaires de création et la navigation entre les pages",
        ],
        tags: ["React", "React Native", "CSS", "Prisma", "Express JS", "PostgreSQL"],
    },
];
// TODO : intégrer mes veilles technologiques sur la future seconde page de mon site
// {
//         idProject: 0,
//         img: getImageUrl("autoformation-1-main.webp"),
//         name: "Gestion des performances",
//         resume: "C'est à partir de fin 2024, que j'ai eu pour mission de rédiger une veille technologique \n" +
//             "sur le sujet de mon choix. De ce fait, j'ai voulu là produire sur quelque chose qui me servira plus tard, tant \n" +
//             "sur le plan loisir, que professionnel : \"Les performances graphiques\" dans les jeux vidéos. En cliquant sur le \n" +
//             "lien présent dans la légende, vous aurez accès à mes documents qui ont contribué à la rédaction de cette veille \n" +
//             "technologique.",
//         features: [
//             "",
//             "",
//             ""
//         ],
//         tags: ["", ""],
//         url: ""
//     },
