import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {
    CATEGORY_1,
    CATEGORY_2,
    CATEGORY_4,
    CATEGORY_5,
    getOriginalBTSSkill,
    getReformulatedBTSSkill
} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";
import ProjectContentImage from "../../components/ProjectContent/ProjectContentImage";
import {getProjectImage} from "../../utils/getUtils";

export default function Project15Content() {
    const CR_DRIVE = "https://drive.google.com/file/d/1G2lXksb6rg9P-GPHoWDfolZsXVq95e33/view?usp=drive_link";
    const README = "https://gitlab.com/bts_e6/moderation/-/blob/master/README.md?ref_type=heads";
    const CAHIER_DES_CHARGES = "https://drive.google.com/file/d/1nCkOoG-hePWMd3lmIHR8b2Bik9GYr0CA/view?usp=drive_link";
    const GITLAB = "https://gitlab.com/AnaisPrt/p3_g1_projet_moderation/";
    const TABLEAU_KANBAN = "https://gitlab.com/AnaisPrt/p3_g1_projet_moderation/-/boards";
    const DAILY_SCRUM = "https://drive.google.com/file/d/1uH-dVRoKY7gu30kbROwZ8JipworheXxt/view?usp=drive_link";
    const DEPLOIEMENT = "https://drive.google.com/file/d/1kOuqNSWpclzwGFOqRgBaFZuV3sa5bX1r/view?usp=drive_link";
    const MANUEL_UTILISATION = "https://drive.google.com/file/d/1tZ34BZEhmR_mLc0Es1NmfupblAtp9tK9/view?usp=drive_link";
    const EXECUTABLE = "https://www3.jolsio.net/2slamprj3eq1/Java/P3_G1_Projet_Moderation-1.0-SNAPSHOT-jar-with-dependencies.jar";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_1}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_1, 4)}>
                <ProjectContentText>
                    Afin de sécuriser le développement de l’application de modération, nous avons utilisé GitLab pour
                    sauvegarder régulièrement le code source et conserver l’historique des modifications.{" "}
                    <ProjectContentLink href={GITLAB} text={"GitLab"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_1, 4)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    En suivant les demandes définies dans le cahier des charges, j’ai participé au développement de
                    l’application de modération permettant de gérer les avis utilisateurs du site R3st0.fr.{" "}
                    <ProjectContentLink href={CR_DRIVE} text={"Compte-rendu"}/>{" "}
                    <ProjectContentLink href={README} text={"README"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_4}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 0)}>
                <ProjectContentText>
                    Après analyse du cahier des charges, nous avons identifié les besoins du projet et réparti les
                    fonctionnalités à développer entre les différents membres du groupe.{" "}
                    <ProjectContentLink href={CAHIER_DES_CHARGES} text={"Cahier des charges"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 0)}/>
            </ProjectContentItem>

            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 1)}>
                <ProjectContentText>
                    Afin d’organiser efficacement le travail en équipe, nous avons utilisé un tableau Kanban ainsi que
                    des Daily Scrum pour répartir les tâches et suivre l’avancement du projet. {" "}
                    <ProjectContentLink href={TABLEAU_KANBAN} text={"Tableau Kanban"}/>{" "}
                    <ProjectContentLink href={DAILY_SCRUM} text={"Daily SCRUM"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 1)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_5}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_5, 1)}>
                <ProjectContentText>
                    Une fois l’application finalisée, nous avons déployé son exécutable sur le serveur FTP de
                    l’établissement via FileZilla afin de permettre son téléchargement depuis une URL dédiée. {" "}
                    <ProjectContentLink href={DEPLOIEMENT} text={"Déploiement"}/>{" "}
                    <ProjectContentLink href={MANUEL_UTILISATION} text={"Manuel d'utilisation"}/>{" "}
                    <ProjectContentLink href={EXECUTABLE} text={"Exécutable"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_5, 1)}/>
                <ProjectContentImage src={getProjectImage(15, "main.png")} alt={"Écran principal de l'application"}
                                     caption={"Figure 1 : Écran principal de l'application."}/>
                <ProjectContentImage src={getProjectImage(15, "phpmyadmin.png")} alt={"PhpMyAdmin"}
                                     caption={"Figure 2 : Base de données déployée sur le serveur de la Joliverie par le biais de l'interface graphique."}/>
            </ProjectContentItem>
        </>
    );
}