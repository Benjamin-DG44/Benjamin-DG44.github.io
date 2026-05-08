import {useParams, Link, useNavigate} from "react-router-dom";
import {projects} from "../../constants/Data";
import Footer from "../../components/Footer/Footer";
import * as React from "react";
import "./ProjectPage.css";
import TagList from "../../components/TagsList/TagList";
import Separator from "../../components/Separator/Separator";
import ProjectLinkButton from "../../components/ProjectLinkButton/ProjectLinkButton";
import {projectContents} from "../projectContent/projectContents";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";

export default function ProjectPage() {
    const {projectId} = useParams();
    const navigate = useNavigate();

    const project = projects.find(
        (p) => p.idProject === parseInt(projectId || "")
    );

    /* ===== REDIRECTION SI PROJET INVALIDE ===== */
    React.useEffect(() => {
        if (!project) {
            navigate("/");
        }
    }, [project, navigate]);

    if (!project) return null;

    const content = projectContents[project.idProject];

    function Hero() {
        return (
            <div className="project-hero">
                <img src={project.img} alt={project.name}/>

                <div className="project-hero-overlay"></div>

                <div className="project-hero-content">
                    <h1 className="project-title text-3xl">{project.name}</h1>
                </div>
            </div>
        )
    }

    function Aside() {
        {/*TODO : rendre sticky la barre lors du scroll*/
        }
        return (
            <aside className="project-sidebar">

                {/* TECHNO */}
                <div className="project-box">
                    <ProjectTitle subtitle={true}>Technologies</ProjectTitle>
                    <TagList data_list={project.tags}/>
                </div>

                {/* LIENS */}
                <div className="project-box">
                    <ProjectTitle subtitle={true}>Liens & ressources</ProjectTitle>

                    <div>
                        {project.links?.map((link, index) => (
                            <ProjectLinkButton
                                variant="minimal"
                                key={index}
                                link={link}
                            />
                        ))}
                    </div>
                </div>

                {/* FEATURES */}
                <div className="project-box">
                    <ProjectTitle subtitle={true}>Fonctionnalités clés</ProjectTitle>
                    <ul className="project-list text-sm">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </aside>
        );
    }

    function Resume() {
        return (
            <div className="project-box">
                <ProjectTitle>Résumé du projet</ProjectTitle>
                <p>{project.resume}</p>
            </div>
        );
    }

    function CallToAction() {
        return <div className="project-cta">
            <h3 className="text-xl mb-1">Intéressé par ce projet ?</h3>

            <p className="text-sm mb-1">
                N'hésitez pas à consulter le code source
                ou à me contacter pour plus d'informations.
            </p>

            <div>
                <Link to="/#contact" className="project-button">
                    Me contacter
                </Link>
            </div>
        </div>;
    }

    function MainContent() {
        return <>
            {content && (
                <div className="project-box">
                    {content}
                </div>
            )}
        </>;
    }

    return (
        <section className="project-page">
            <Hero/>
            <div className="project-container">
                <div className="project-grid">
                    <Aside/>
                    <main className="project-main">
                        <Resume/>
                        <Separator/>
                        <MainContent/>
                        <CallToAction/>
                    </main>
                </div>
            </div>
            <Footer/>
        </section>
    );
}