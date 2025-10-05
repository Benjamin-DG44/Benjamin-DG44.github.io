import * as React from "react";
import {projects} from "../../constants/Data";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectCardListProps {
    reverse?: boolean;
    limit?: number;
    showMore?: boolean;
}

/**
 * Affiche tous les projets dans l'ordre croissant ou décroissant.
 *
 * @param reverse inverse ou non la liste des projets
 * @param limit nombre de projets affichés
 * @constructor
 */
function ProjectCardListRemaining({ reverse = false, limit}: ProjectCardListProps) {
    let dataRemainingToRender = reverse ? [...projects].reverse() : projects;

    // si limit est défini, on coupe le tableau
    if (limit !== undefined) {
        dataRemainingToRender = dataRemainingToRender.slice(limit);
    }

    return (
        <>
            {dataRemainingToRender.map((p) => (
                <ProjectCard key={p.idProject} projectId={p.idProject} />
            ))}
        </>
    );
}

export default ProjectCardListRemaining;

// Un nouveau composant identique à celui-ci.
// Sauf que lui, fait slice(4).reverse() de cette façon il prend les autres projets.
// Pour afficher tout correctmeent, on crée une nouvelle grille qu'on pourra choisir d'afficher ou non avec le bouton Voir Plus
// Sa fait <div show={isShow}> <Grid><ProjectCardListRemaining limit(projects.length-3) reverse/></Grid></div>
// Puis : |Voir plus| <-> |Voir moins| ==> sur hover du bouton : | Oui |