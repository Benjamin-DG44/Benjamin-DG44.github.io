import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentImage from "../../components/projectContent/ProjectContentImage";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import {getImageProjectUrl} from "../../utils/getUrls";
import * as React from "react";

export default function Project4Content() {

    return (
        <>
            <ProjectTitle>Compétences du BTS</ProjectTitle>
            <ProjectContentItem
                title="
                Répondre à des demandes liées
                au fonctionnement d’une application"
            >

                <ProjectContentText>
                    Après avoir analysé le cahier des charges,
                    nous avons réparti les tâches...
                </ProjectContentText>

                <ProjectContentImage
                    src={getImageProjectUrl("project-traitements_python-main.webp")}
                    alt="Architecture API"
                    caption="Figure 1 : Architecture du projet"
                />

            </ProjectContentItem>

        </>
    );
}