import * as React from "react";
import "./ProjectCard.css";
import {projects} from "../../constants/Data";
import TagList from "../TagsList/TagList";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import {Link} from "react-router-dom";
import ProjectLinkButton from "../ProjectLinkButton/ProjectLinkButton";

interface ProjectCardProps {
    projectId: number;
    children?: React.ReactNode;
}

function ProjectCard({
                         projectId,
                         children,
                     }: ProjectCardProps) {

    const project = projects.find(
        (p) => p.idProject === projectId
    );

    if (!project) return null;

    /*
     * On récupère UNIQUEMENT les liens de dépôt
     * pour les afficher sur les cards.
     */
    const depotLinks = project.links?.filter(
        (link) =>
            link.type === "github" ||
            link.type === "gitlab"
    );

    // TODO : peut-être faire une pastille avec la date du projet sur l'image ? (dans le coin inférieur droit ?)

    return (
        <FadeAnimation direction="down" delay={100}>
            <article className="project-card project-image-shadows">

                {/*TODO : peut-être sympa de mettre une courte vidéo de genre 3s qui se déclenche quand on passe la souris dessus*/}

                <div className="project-image-container">
                    <img
                        src={project.img}
                        alt={project.name}
                        className="project-image"
                        loading="lazy"
                    />
                </div>

                <div className="project-content">

                    <FadeAnimation direction="right" delay={200}>
                        <p className="project-titles text-xl-bold mb-0-5">
                            {project.name}
                        </p>
                    </FadeAnimation>

                    <FadeAnimation direction="right" delay={250}>
                        <p className="project-resume text-sm mb-1">
                            {project.resume}
                        </p>
                    </FadeAnimation>

                    <FadeAnimation direction="right" delay={300}>
                        <p className="project-titles text-lg-bold mb-0-5">
                            Fonctionnalités clés
                        </p>
                    </FadeAnimation>

                    <ul className="project-features mb-1">
                        {project.features.map((feature, i) => (
                            <FadeAnimation
                                key={i}
                                direction="right"
                                delay={350 + i * 50}
                            >
                                <li className="text-sm project-marker project-feature">
                                    {feature}
                                </li>
                            </FadeAnimation>
                        ))}
                    </ul>

                    <FadeAnimation direction="right" delay={550}>
                        <p className="project-titles text-lg-bold mb-0-5">
                            Technologies utilisées
                        </p>
                    </FadeAnimation>

                    <FadeAnimation direction="right" delay={600}>
                        <TagList data_list={project.tags}/>
                    </FadeAnimation>

                    <FadeAnimation direction="right" delay={650}>

                        <div className="project-buttons-row">

                            {/* ===== DEPOT ===== */}

                            {depotLinks?.map((link, index) => (
                                <ProjectLinkButton
                                    key={index}
                                    link={link}
                                />
                            ))}

                            {/* ===== VOIR PLUS ===== */}

                            <Link
                                to={`/project/${project.idProject}`}
                                className="project-button mt-1"
                            >
                                En savoir plus
                            </Link>

                        </div>

                    </FadeAnimation>

                    {children}

                </div>
            </article>
        </FadeAnimation>
    );
}

export default ProjectCard;