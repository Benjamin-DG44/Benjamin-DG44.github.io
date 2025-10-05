import * as React from "react";
import './ProjectCard.css';
import {projects} from "../../constants/Data";
import TagList from "../TagsList/TagList";
import {HugeiconsIcon} from "@hugeicons/react";
import {GithubIcon, GitlabIcon, Globe02Icon} from "@hugeicons/core-free-icons/index";
import {getImageUrl} from "../../utils/getUrls";
import FadeAnimation from "../FadeAnimation/FadeAnimation";


interface ProjectCardProps {
    projectId: number;
    children?: React.ReactNode;
}

function ButtonDepot({depot_url}: { depot_url?: string }) {
    if (!depot_url) return null;                  // rien si vide / undefined
    else if (depot_url.includes("github.com")) {
        return (
            <a className="project-button project-button-github mt-1" href={depot_url} target="_blank" rel="noreferrer">
                <HugeiconsIcon
                    icon={GithubIcon}
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="project-icon logo-github"
                />
                <p className="project-link-github text-base-800">Voir le dépôt</p>
            </a>
        );
    } else if (depot_url.includes("gitlab.com")) {
        return (
            <a className="project-button project-button-gitlab mt-1" href={depot_url} target="_blank" rel="noreferrer">
                <HugeiconsIcon
                    icon={GitlabIcon}
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="project-icon logo-gitlab"
                />
                <p className="project-link project-link-gitlab text-base-800">Voir le dépôt</p>
            </a>
        );
    }
    return null;
}

function ButtonWeb({web_url}: { web_url?: string }) {
    if (!web_url) return null;                  // rien si vide / undefined
    else if (web_url.includes("youtube.com")) {
        return (
            <a className="project-button mt-1" href={web_url} target="_blank" rel="noreferrer">
                <img src={getImageUrl("youtube-logo.svg")} alt="youtube-logo" className="project-icon"/>
                <p className="project-link text-base-800">Voir sur YouTube</p>
            </a>
        );
    } else if (web_url.includes("itch.io")) {
        return (
            <a className="project-button mt-1" href={web_url} target="_blank" rel="noreferrer">
                <img src={getImageUrl("itchio-logo.svg")} alt="itchio-logo" className="project-icon"/>
                <p className="project-link text-base-800">Tester le projet</p>
            </a>
        );
    } else if (web_url.includes("github.io")) {
        return (
            <a className="project-button mt-1" href={web_url} target="_blank" rel="noreferrer">
                <HugeiconsIcon icon={Globe02Icon} strokeWidth={1.3} className="project-icon logo-website"/>
                <p className="project-link text-base-800">Tester le projet</p>
            </a>
        );
    }
    return null;
}


function ProjectCard({projectId, children}: ProjectCardProps) {
    const project = projects.filter(p => p.idProject === projectId)[0]; // seul moyen de récupérer un élément précis

    // TODO : peut-être faire une pastille avec la date du projet sur l'image ? (dans le coin inférieur droit ?)
    return (
        <FadeAnimation direction="down" delay={100}>
            <article className="project-card project-image-shadows">
                {/*TODO : peut-être sympa de mettre une courte vidéo de genre 3s qui se déclenche quand on passe la souris dessus*/}
                <div className="project-image-container">
                    <img src={project.img} alt={project.name} className="project-image" loading="lazy"/>
                </div>
                <div className="project-content">
                    <FadeAnimation direction="right" delay={200}>
                        <p className="project-titles text-xl-bold mb-0-5">{project.name}</p>
                    </FadeAnimation>
                    <FadeAnimation direction="right" delay={250}>
                        <p className="project-resume text-sm mb-1">{project.resume}</p>
                    </FadeAnimation>

                    <FadeAnimation direction="right" delay={300}>
                        <p className="project-titles text-lg-bold mb-0-5">Fonctionnalités clés</p>
                    </FadeAnimation>
                    <ul className="project-features mb-1">
                        {project.features.map((feature, i) => (
                            <FadeAnimation direction="right" delay={350 + i * 50}>
                                <li className="text-sm project-marker project-feature" key={i}>
                                    {feature}
                                </li>
                            </FadeAnimation>
                        ))}
                    </ul>
                    <FadeAnimation direction="right" delay={550}>
                        <p className="project-titles text-lg-bold mb-0-5">Technologies utilisées</p>
                    </FadeAnimation>
                    <FadeAnimation direction="right" delay={600}>
                        <TagList data_list={project.tags}/>
                    </FadeAnimation>

                    <FadeAnimation direction="right" delay={650}>
                        <div className="project-buttons-row">
                            <ButtonDepot depot_url={project.url_depot}/> {/* Bouton Dépôt : GitHub ou GitLab */}
                            <ButtonWeb web_url={project.url_web}/> {/* Bouton Web : Youtube, Itch.io ou Github */}
                        </div>
                    </FadeAnimation>
                    {children}
                </div>
            </article>
        </FadeAnimation>
    );
}

export default ProjectCard;
