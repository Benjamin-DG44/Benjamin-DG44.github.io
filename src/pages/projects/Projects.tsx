import './Projects.css'
import {PROJECTS_URL} from "../../constants/URL";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Grid from "../../components/Grid/Grid";
import Button from "../../components/Button/Button";
import * as React from "react";
import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import ProjectCardListRemaining from "../../components/ProjectCardListRemaining/ProjectCardListRemaining";
import FadeAnimation from "../../components/FadeAnimation/FadeAnimation";

function Projects() {
    const [showRemaining, setShowRemaining] = React.useState(false); // Gère l'affichage du reste des projets
    const sameGap: string = "3rem";

    return (
        <section className="projects" id={PROJECTS_URL} role="Présenter mes 4 derniers projets">
            <SectionTitle title="Mes réalisations"/>
            <Grid gap={sameGap} mTop="1rem">
                <ProjectCardList limit={4} reverse/>
            </Grid>
            {/*Affiche le reste des projets lorsqu'on clique sur le bouton "Voir plus"*/}
            {showRemaining && (
                <Grid gap={sameGap} mTop={sameGap}>
                    <ProjectCardListRemaining limit={4} reverse/>
                </Grid>
            )}
            <FadeAnimation delay={700}>
                <div className="button-see-more">
                    <Button
                        variant="secondary"
                        border={true}
                        onClick={() => setShowRemaining((prevState) => !prevState)}
                    >
                        <p className="text-lg-bold">{showRemaining ? "Voir moins" : "Voir plus"}</p>
                    </Button>
                </div>
            </FadeAnimation>
        </section>
    );
}

export default Projects;
