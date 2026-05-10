import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {
    CATEGORY_1,
    CATEGORY_2,
    CATEGORY_3,
    CATEGORY_4,
    CATEGORY_5,
    getOriginalBTSSkill,
    getReformulatedBTSSkill
} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";
import ProjectContentImage from "../../components/ProjectContent/ProjectContentImage";
import {getProjectImage} from "../../utils/getUtils";

export default function Project9Content() {
    const GITLAB = "https://gitlab.com/Jtaille/p1_g3_siteresto2025";
    const CR_DRIVE = "https://drive.google.com/drive/folders/1LwhtNgl1molnetbVVRoPWqIIdl-QWAC2";
    const CAHIER_DES_CHARGES = "https://drive.google.com/file/d/1bexGRctTuozWr61SZtSFGdD-sMYHWhRc/view?usp=drive_link";
    const CR_EXEMPLE_ITE2_T6 = "https://drive.google.com/drive/folders/1syUjFUTpdnrnmVkfzOmpgtGwgGiwWyMd";
    const TABLEAU_KANBAN = "https://gitlab.com/Jtaille/p1_g3_siteresto2025/-/boards";
    const DAILY_SCRUM = "https://drive.google.com/file/d/10Qy5QwmfzRs3dhmRjBW9lhgh69BLV3mh/view?usp=drive_link";
    const SITE_WEB_DEPLOYEE = "https://10.15.253.248/delaunayguittonb/public/E6/PhpProjectSiteRestoInitial/index.php";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_1}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_1, 4)}>
                <ProjectContentText>
                    Afin d’éviter toute perte de données durant le développement du site web, nous avons utilisé
                    GitLab pour sauvegarder régulièrement le code source et suivre les différentes versions du
                    projet.{" "}
                    <ProjectContentLink href={GITLAB} text={"GitLab"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_1, 4)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    En suivant les demandes du cahier des charges, j’ai participé au développement de plusieurs
                    fonctionnalités du site R3st0.fr comme le système d’avis utilisateurs et la recherche multicritères.
                    J’ai également réalisé des comptes rendus afin de documenter les corrections et évolutions du
                    projet.{" "}
                    <ProjectContentLink href={CR_DRIVE} text={"Compte-rendu"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_3}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_3, 2)}>
                <ProjectContentText>
                    J’ai participé à l’évolution du site web en corrigeant certains problèmes d’affichage et de
                    classement des restaurants afin d’améliorer l’expérience utilisateur et la cohérence des données
                    affichées.{" "}
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_3, 2)}/>
                <ProjectContentImage src={getProjectImage(9, "classement-before-update.png")}
                                     alt={"Classement des restaurants avant la correction du site"}
                                     caption={"Figure 1 : Classement des restaurants avant la correction du site."}/>
                <ProjectContentImage src={getProjectImage(9, "classement-after-update.png")}
                                     alt={"Classement des restaurants après la correction du site"}
                                     caption={"Figure 2 : Classement des restaurants après la correction du site."}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_4}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 0)}>
                <ProjectContentText>
                    Après analyse du cahier des charges, nous avons identifié les objectifs du projet et organisé le
                    travail en équipe afin de répartir les fonctionnalités à développer.{" "}
                    <ProjectContentLink href={CAHIER_DES_CHARGES} text={"Cahier des charges"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 0)}/>
            </ProjectContentItem>

            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 1)}>
                <ProjectContentText>
                    Afin d’assurer un suivi régulier de l’avancement du projet, nous avons utilisé un tableau Kanban
                    ainsi que des Daily Scrum pour répartir les tâches et suivre leur progression.{" "}
                    <ProjectContentLink href={TABLEAU_KANBAN} text={"Tableau Kanban"}/>{" "}
                    <ProjectContentLink href={DAILY_SCRUM} text={"Daily Scrum"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 1)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_5}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_5, 1)}>
                <ProjectContentText>
                    Une fois le site finalisé, nous l’avons déployé sur le réseau de l’établissement afin de permettre
                    son accès aux utilisateurs.{" "}
                    <ProjectContentLink href={SITE_WEB_DEPLOYEE} text={"Site web déployé"}/>{" "}
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_5, 1)}/>
                <ProjectContentImage src={getProjectImage(9, "accueil.png")} alt={"Page d'accueil du site web"}
                                     caption={"Figure 3 : Page d'accueil du site web."}/>
                <ProjectContentImage src={getProjectImage(9, "phpmyadmin.png")} alt={"PhpMyAdmin"}
                                     caption={"Figure 4 : Base de données déployée sur le serveur de la Joliverie par le biais de l'interface graphique."}/>
            </ProjectContentItem>
        </>
    );
}