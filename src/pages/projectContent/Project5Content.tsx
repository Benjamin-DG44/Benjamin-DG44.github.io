import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {CATEGORY_2, CATEGORY_4, getOriginalBTSSkill, getReformulatedBTSSkill} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";

export default function Project5Content() {
    const CR_DRIVE = "https://drive.google.com/drive/folders/1NU_qIPuuNFlV8C9xPTjEUqyRSb1lhx6a";
    const CAHIER_DES_CHARGES = "https://drive.google.com/drive/folders/16YqHo7lMlkB8SBxEyVyT5AUbbdXhbb4R";
    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem
                title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    J’ai répondu aux demandes d’évolution du prototype existant de l’application Java THALI_MINI en
                    ajoutant ou modifiant des fonctionnalités (CRUD des excursions, gestion des étapes), tout en
                    essayant de respecter les normes de développement et l’architecture MVC (GUI, DAO, métier).{" "}
                    <ProjectContentLink href={CR_DRIVE} text={"Compte-rendu"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_4}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 0)}>
                <ProjectContentText>
                    J’ai répondu aux demandes d’évolution du prototype existant de l’application Java THALI_MINI en
                    ajoutant ou modifiant des fonctionnalités (CRUD des excursions, gestion des étapes), tout en
                    essayant de respecter les normes de développement et l’architecture MVC (GUI, DAO, métier).
                    <ProjectContentLink href={CAHIER_DES_CHARGES} text={"Cahier des charges"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 0)}/>
            </ProjectContentItem>
        </>
    );
}