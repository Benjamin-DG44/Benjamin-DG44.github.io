export const CATEGORY_1 = "Gérer le patrimoine informatique";
export const CATEGORY_2 = "Répondre aux incidents et aux demandes d’assistance et d’évolution";
export const CATEGORY_3 = "Développer la présence en ligne de l’organisation";
export const CATEGORY_4 = "Travailler en mode projet";
export const CATEGORY_5 = "Mettre à disposition des utilisateurs un service informatique";
export const CATEGORY_6 = "Organiser son développement professionnel";

/**
 * Tableau de compétences du BTS organisé par catégorie, avec un sous tableau contenant :
 * La compétence originale (0)
 * La compétence reformulée (1)
 */
export const btsSkills = {
    [CATEGORY_1]: [
        "Recenser et identifier les ressources numériques",
        "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
        [
            "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
            "Gérer les droits d’accès aux services informatiques"
        ],
        "Vérifier les conditions de la continuité d’un service informatique",
        [
            "Gérer des sauvegardes",
            "Mettre en œuvre des stratégies de sauvegarde"
        ],
        "Vérifier le respect des règles d’utilisation des ressources numériques",
    ],

    [CATEGORY_2]: [
        [
            "Collecter, suivre et orienter des demandes",
            "Assurer le suivi et le traitement des demandes utilisateurs"
        ],
        [
            "Traiter des demandes concernant les services réseau et système, applicatifs",
            "Intervenir sur des services système, réseau ou applicatifs"
        ],
        [
            "Traiter des demandes concernant les applications",
            "Répondre à des demandes liées au fonctionnement ou à l’évolution d’une application"
        ],
    ],

    [CATEGORY_3]: [
        [
            "Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
            "Valoriser l’image de l’organisation sur les supports numériques"
        ],
        [
            "Référencer les services en ligne de l’organisation et mesurer leur visibilité",
            "Améliorer la visibilité des services en ligne"
        ],
        [
            "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
            "Participer à la mise à jour ou à l’évolution d’un site web en lien avec les données internes"
        ],
    ],

    [CATEGORY_4]: [
        [
            "Analyser les objectifs et les modalités d’organisation d’un projet",
            "Comprendre les objectifs d’un projet et s’adapter à son organisation"
        ],
        [
            "Planifier les activités",
            "Attribution des tâches"
        ],
        [
            "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
            "Analyser l’avancement d’un projet et les écarts constatés"
        ],
    ],

    [CATEGORY_5]: [
        [
            "Réaliser les tests d’intégration et d’acceptation d’un service",
            "Effectuer des tests de validation d’un service"
        ],
        [
            "Déployer un service",
            "Mettre un service à disposition des utilisateurs"
        ],
        [
            "Accompagner les utilisateurs dans la mise en place d’un service",
            "Assister les utilisateurs dans la prise en main d’un service"
        ],
    ],

    [CATEGORY_6]: [
        [
            "Mettre en place son environnement d’apprentissage personnel",
            "?"
        ],
        [
            "Mettre en œuvre des outils et stratégies de veille informationnelle",
            "Suivre l’actualité technologique via des outils de veille pour rester à jour"

        ],
        "Gérer son identité professionnelle",
        "Développer son projet professionnel",
    ],
} as const;

export function getOriginalBTSSkill(category: string, skill: number) {
    return btsSkills[category][skill][0];
}

export function getReformulatedBTSSkill(category: string, skill: number) {
    return btsSkills[category][skill][1];
}