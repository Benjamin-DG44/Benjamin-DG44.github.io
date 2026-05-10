import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {CATEGORY_2, CATEGORY_4, getOriginalBTSSkill, getReformulatedBTSSkill} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";

export default function Project8Content() {
    const RAPPORT_STAGE_1 = "https://drive.google.com/file/d/1TK3ARNokPRBhh4lqtiaR0LHzhN8empbA/view?usp=drive_link";
    const DIAPORAM_STAGE_1 = "https://drive.google.com/file/d/1M48rRyUYixGYW3wLASRra7FkhKpa3if_/view?usp=drive_link";
    const CAHIER_DES_CHARGES = "https://docs.google.com/document/d/1jw7fL1Zu7hKOq5r9IS64iETIyFGwLk0f/edit?usp=sharing&ouid=108508559207082762674&rtpof=true&sd=true";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem
                title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    J’ai participé au développement de l’application mobile AVI, principalement sur la partie backend.
                    J’ai mis en œuvre plusieurs fonctionnalités pour faire communiquer la base de données avec le
                    frontend via une API, conformément aux demandes d’évolution définies dans les réunions d’équipe et
                    le cahier des charges.{" "}
                    <ProjectContentLink href={RAPPORT_STAGE_1} text={"Rapport de stage n°1"}/>{" "}
                    <ProjectContentLink href={DIAPORAM_STAGE_1} text={"Diaporame du sage n°1"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_4}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 0)}>
                <ProjectContentText>
                    J’ai contribué à la structuration du projet AVI en m’appuyant sur le cahier des charges, les
                    maquettes fournies par la designeuse, ainsi que sur les échanges réalisés en réunion d’équipe. J’ai
                    identifié comme enjeu principal la fluidité de communication entre client et serveur, ce qui m’a
                    amené à développer une API REST assurant le lien entre le frontend mobile et la base de données.
                    <ProjectContentLink href={CAHIER_DES_CHARGES} text={"Cahier des charges"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 0)}/>
            </ProjectContentItem>

            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 1)}>
                <ProjectContentText>
                    Utilisation de la plateforme Wrike pour la gestion de projet. Possibilité de voir les tâches à
                    effectuer, le temps restants, de communiquer avec son équipe.
                    <ProjectContentLink href={RAPPORT_STAGE_1} text={"Wrike, page 9"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 1)}/>
            </ProjectContentItem>
        </>
    );
}