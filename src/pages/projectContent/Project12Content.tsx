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
    getOriginalBTSSkill,
    getReformulatedBTSSkill
} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";

export default function Project12Content() {
    const CR_DRIVE = "https://drive.google.com/drive/folders/1mAlZMlVOlWILnDj0JmIFKYzNjXSs0Z-p";
    const CAHIER_DES_CHARGES = "https://drive.google.com/file/d/1oE_YUUefjewKN1Gv3JX_kANZp_O5icog/view?usp=drive_link";
    const GITLAB_ANDROID = "https://gitlab.com/AnaisPrt/p2_g7_2slam_ap_projet_android";
    const GITLAB_API = "https://gitlab.com/Tom_Charbonneau/p2_g7_2slam_ap_projet_android_api";
    const TABLEAU_KANBAN = "https://gitlab.com/AnaisPrt/p2_g7_2slam_ap_projet_android/-/boards";
    const DAILY_SCRUM = "https://drive.google.com/file/d/1vs3nqLm1O0Kz6p040NKMj-18xIWIPEq7/view?usp=drive_link";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_1}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_1, 4)}>
                <ProjectContentText>
                    Durant le développement de l’application Android, nous avons utilisé GitLab afin de sauvegarder
                    régulièrement le projet et suivre les différentes versions du code source.{" "}
                    <ProjectContentLink href={GITLAB_ANDROID} text={"GitLab Android"}/>{" "}
                    <ProjectContentLink href={GITLAB_API} text={"GitLab API"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_1, 4)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    En respectant les demandes définies dans le cahier des charges, j’ai participé au développement
                    d’une application Android permettant la consultation et la réservation de restaurants via une API
                    REST.{" "}
                    <ProjectContentLink href={CR_DRIVE} text={"Compte-rendu"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_4}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 0)}>
                <ProjectContentText>
                    Après étude du cahier des charges, nous avons identifié les fonctionnalités attendues et réparti
                    le développement de l’application entre les membres du groupe.{" "}
                    <ProjectContentLink href={CAHIER_DES_CHARGES} text={"Cahier des charges"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 0)}/>
            </ProjectContentItem>

            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 1)}>
                <ProjectContentText>
                    Le suivi du projet a été réalisé grâce à un tableau Kanban et des réunions Daily Scrum permettant
                    de répartir les tâches et suivre l’avancement du développement. {" "}
                    <ProjectContentLink href={TABLEAU_KANBAN} text={"Tableau Kanban"}/>{" "}
                    <ProjectContentLink href={DAILY_SCRUM} text={"Daily SCRUM"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 1)}/>
            </ProjectContentItem>
        </>
    );
}