import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {
    CATEGORY_6,
    getOriginalBTSSkill,
    getReformulatedBTSSkill
} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";

export default function Project10Content() {
    const TABLEAU_COLLECTE_INFORMATION = "https://docs.google.com/spreadsheets/d/17oBYTrv4_FVLWZZ54ONKa8pjjV-WYWFH/edit?usp=drive_link&ouid=108508559207082762674&rtpof=true&sd=true";
    const RESUME_ARTICLES = "https://drive.google.com/file/d/1QeE2ngczTdjsq5jYZTAvhLo4zvYuPIkb/view?usp=drive_link";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_6}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_6, 1)}>
                <ProjectContentText>
                    Afin de suivre l’actualité autour du vibe coding et de l’intelligence artificielle, j’ai utilisé
                    plusieurs outils de veille comme TLDR, Dev.to, Feedly et Daily.dev pour recevoir régulièrement des
                    informations sur les nouvelles pratiques et technologies émergentes. {" "}
                    <ProjectContentLink href={TABLEAU_COLLECTE_INFORMATION}
                                        text={"Tableau de collectes d'information"}/>
                    <ProjectContentLink href={RESUME_ARTICLES} text={"Résumés des articles"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_6, 1)}/>
            </ProjectContentItem>
        </>
    );
}