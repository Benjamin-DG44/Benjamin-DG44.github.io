import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {CATEGORY_2, CATEGORY_4, getOriginalBTSSkill, getReformulatedBTSSkill} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";
import ProjectContentImage from "../../components/ProjectContent/ProjectContentImage";
import {getProjectImage} from "../../utils/getUtils";

export default function Project14Content() {
    const RAPPORT_STAGE_2 = "https://drive.google.com/file/d/11jA1sPj7hUHlbja2Yyj1CMEvsg-oFR1n/view?usp=drive_link";
    const VIDEO_DEMONSTRATION = "https://drive.google.com/file/d/1kgcZaCorbNpWJl1-5ViAuZvSwyt6YK_2/view?usp=drive_link";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem
                title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    J'ai dû redévelopper entièrement l'API en passant sur une nouvelle stack à cause d'une mise à jour
                    majeure de l'ORM qu'on utilisait. J'en ai donc profité pour améliorer sa structure afin de
                    la rendre plus maintenable dans le temps. De même, nous avons développer les dernières
                    fonctionnalités que nous n'avions pas eu le temps de développer au stage précédent et pour certaines
                    les adapter à la nouvelle API. {" "}
                    <ProjectContentLink href={RAPPORT_STAGE_2} text={"Rapport de stage n°2"}/>{" "}
                    <ProjectContentLink href={VIDEO_DEMONSTRATION} text={"Vidéo de démonstration de l'application"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
                <ProjectContentImage src={getProjectImage(14, "avi-accueil.png")}
                                     alt={"Écran d'accueil de l'application AVI"}
                                     caption={"Figure 1 : Écran d'accueil de l'application AVI"}/>
            </ProjectContentItem>
        </>
    );
}