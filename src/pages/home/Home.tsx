import * as React from "react";
import "./Home.css";
import {Link} from "react-scroll";
import Button from "../../components/Button/Button";
import {ABOUT_URL, G_DRIVE_RECAP, HOME_URL, PDF_CV, PROJECTS_URL} from "../../constants/URL";
import {ChevronDown} from "lucide-react";
import FadeAnimation from "../../components/FadeAnimation/FadeAnimation";

function Home() {
    return (
        <section className="home" id={HOME_URL} role="Courte présentation">
            <div className="all-center">
                <FadeAnimation direction="down">
                    <p className="text-3xl text-gradient margin-home">
                        Benjamin <br/> DELAUNAY-GUITTON
                    </p>
                </FadeAnimation>

                <FadeAnimation direction="down" delay={100}>
                    <p className="text-2xl margin-home">
                        Étudiant en BTS SIO option SLAM
                    </p>
                </FadeAnimation>

                <FadeAnimation direction="down" delay={150}>
                    <div className="description">
                        <p className="text-lg ">
                            Je suis actuellement à la{" "}
                            <strong className="text-gradient-2">
                                <i>recherche d'une alternance pour mon année d'étude 2026/2027 en développement logiciel
                                    ou mobile</i>
                            </strong>. Passionné par la programmation. J’entame ma{" "}
                            <strong className="text-gradient-2">
                                <i>seconde année en BTS SIO option SLAM</i>
                            </strong>{" "}
                            à La Joliverie à Nantes. Ayant un attrait pour la{" "}
                            <strong className="text-gradient-2">
                                <i>programmation orientée objet</i>
                            </strong>
                            , je souhaite me spécialiser dans le développement d’applications,
                            qu’elles soient mobiles ou logicielles (desktop).
                        </p>
                    </div>
                </FadeAnimation>

                <FadeAnimation direction="down" delay={200}>
                    <div className="button-group">
                        {/* TODO : à modifier une fois le passage à l'oral fini*/}
                        <Button variant="primary" onClick={() => window.open(G_DRIVE_RECAP)} animation="btn-slide"> {/* to={PROJECTS_URL} */}
                            <p className="text-lg-bold">Voir tableau</p> {/* Voir mon travail */}
                        </Button>
                        <Button variant="secondary" onClick={() => window.open(PDF_CV)}>
                            <p className="text-lg-bold">Télécharger CV</p>
                        </Button>
                    </div>
                </FadeAnimation>

                <FadeAnimation direction="down" delay={250}>
                    <div className="chevron bounce">
                        <Link to={ABOUT_URL} duration={500} smooth={true}>
                            <ChevronDown color="var(--primary-500)" size={"2rem"}/>
                        </Link>
                    </div>
                </FadeAnimation>

            </div>
        </section>
    );
}

export default Home;
