import * as React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {CONTACT_URL, GITHUB_ACCOUNT_URL, GITLAB_ACCOUNT_URL, LINKEDIN_ACCOUNT_URL, PDF_CV} from "../../constants/URL";
import "./Contact.css";
import {Check, Copy, MailCheck, Send} from "lucide-react";
import SwitchIcons from "../../components/SwitchIcons/SwitchIcons";
import {EMAIL} from "../../constants/Data";
import Button from "../../components/Button/Button";
import {HugeiconsIcon} from "@hugeicons/react";
import {GithubIcon, GitlabIcon, Linkedin02Icon} from "@hugeicons/core-free-icons/index";
import FadeAnimation from "../../components/FadeAnimation/FadeAnimation";


function Contact() {
    const handleCopy = () => navigator.clipboard.writeText(EMAIL);

    const handleMail = () => {
        window.location.href = `mailto:${EMAIL}`;
    };

    return (
        <section className="contact" id={CONTACT_URL}>
            <SectionTitle title="Entrons en contact !"/>
            <div className="container all-center">
                <FadeAnimation delay={150}>
                    <p className="text-xl">
                        Actuellement en <strong className="text-gradient-2">recherche active d’un stage du 5 janvier
                        au 12 février 2026</strong> (6 semaines), en développement mobile, web, ou logiciel.
                    </p>
                </FadeAnimation>
                <FadeAnimation delay={200}>
                    <div className="mail-container">
                        <a href={`mailto:${EMAIL}`} className="text-sm mail-link">
                            {EMAIL}
                        </a>
                        <SwitchIcons
                            iconDefault={Copy}
                            iconActive={Check}
                            onClick={handleCopy}
                            showMessage
                            message="Copié !"
                            color="var(--purple-500)"
                        />
                        <SwitchIcons
                            iconDefault={Send}
                            iconActive={MailCheck}
                            onClick={handleMail}
                            color="var(--purple-500)"
                        />
                    </div>
                </FadeAnimation>
                <FadeAnimation delay={250}>
                    <div className="button-group">
                        <Button variant="secondary" onClick={() => window.open(PDF_CV)}>
                            <p className="text-lg-bold">Télécharger CV</p>
                        </Button>
                    </div>
                </FadeAnimation>
                <div className="button-group">
                    <FadeAnimation delay={350}>
                        <a className="social-button logo-gitlab" id="s-btn-1" href={GITLAB_ACCOUNT_URL} target="_blank">
                            <div className="social-item">
                                <HugeiconsIcon
                                    icon={GitlabIcon}
                                    size={28}
                                    strokeWidth={2.25}
                                />
                            </div>
                        </a>
                    </FadeAnimation>
                    <FadeAnimation delay={500}>
                        <a className="social-button logo-linkedin" id="s-btn-2" href={LINKEDIN_ACCOUNT_URL}
                           target="_blank">
                            <div className="social-item">
                                <HugeiconsIcon
                                    icon={Linkedin02Icon}
                                    size={28}
                                    strokeWidth={2.25}
                                />
                            </div>
                        </a>
                    </FadeAnimation>
                    <FadeAnimation delay={650}>
                        <a className="social-button logo-github" id="s-btn-3" href={GITHUB_ACCOUNT_URL} target="_blank">
                            <div className="social-item">
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    size={28}
                                    strokeWidth={2.25}
                                />
                            </div>
                        </a>
                    </FadeAnimation>
                </div>
            </div>
        </section>

    );

}

export default Contact;
