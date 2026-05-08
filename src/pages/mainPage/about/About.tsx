import './About.css'
import {ABOUT_URL, MY_PHOTO} from "../../../constants/URL";
import TagList from "../../../components/TagsList/TagList";
import {personnal_skills, soft_skills, softwares} from "../../../constants/Data";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Card from "../../../components/Card/Card";
import Grid from "../../../components/Grid/Grid";
import SubTitle from "../../../components/SubTitle/SubTitle";
import FadeAnimation from "../../../components/FadeAnimation/FadeAnimation";

function About() {
    return (
        <section className="about" id={ABOUT_URL} role="presentation">
            <SectionTitle title="Qui suis-je ?"/>
            <Grid gap="1.5rem">
                <div className="grid-item-1">
                    <FadeAnimation direction="right" delay={300}>
                        <Card variant="card">
                            <FadeAnimation direction="right" delay={350}>
                                <p className="text-2xl mb-1-25">Hey ! Je m'appelle Benjamin</p>
                            </FadeAnimation>
                            {/* TODO : arranger les classes de titres*/}
                            <FadeAnimation direction="right" delay={400}>
                                <p className="text-sm mb-1">
                                    Je suis passionné par tout ce qui touche à l’informatique de
                                    près
                                    comme de loin, que ça soit du côté software comme hardware. 😁 Mes
                                    qualités sont mon perfectionnisme, ma curiosité, et ma rigueur. Tandis que pour mes
                                    défauts, je suis quelqu’un qui veut parfois faire les choses trop bien au point où,
                                    ça
                                    prenne un peu plus de temps que prévu. Mais au moins, le travail est de qualité
                                    ! <br/><br/>
                                    Mon objectif actuel serait de me perfectionner dans le développement d’application
                                    mobile ou
                                    bureau, dans l'objectif d’acquérir de nouvelles compétences. Ce sont des domaines
                                    qui
                                    m’intéressent fortement et dans lesquels je serais heureux de progresser ! N'hésitez
                                    pas
                                    à
                                    me contacter et à regarder mon CV. 😉
                                </p>
                            </FadeAnimation>
                            <FadeAnimation direction="right" delay={450}>
                                <SubTitle text="Soft skills" mBottom="0.4"/>
                            </FadeAnimation>
                            <FadeAnimation direction="right" delay={500}>
                                <TagList data_list={soft_skills}/>
                            </FadeAnimation>
                            <FadeAnimation direction="right" delay={550}>
                                <SubTitle text="Compétences techniques" mTop="0.6" mBottom="0.4"/>
                            </FadeAnimation>
                            <FadeAnimation direction="right" delay={600}>
                                <TagList data_list={personnal_skills}/>
                            </FadeAnimation>
                            <FadeAnimation direction="right" delay={650}>
                                <SubTitle text="Logiciels" mTop="0.6" mBottom="0.4"/>
                            </FadeAnimation>
                            <FadeAnimation direction="right" delay={700}>
                                <TagList data_list={softwares}/>
                            </FadeAnimation>
                        </Card>
                    </FadeAnimation>
                </div>

                {/* Photo */}
                <div className="grid-item-2">
                    <FadeAnimation direction="left" delay={700}>
                        <Card variant="photo" srcPhoto={MY_PHOTO} altText=" de ma tête"/>
                    </FadeAnimation>
                </div>

            </Grid>
        </section>
    )
}

export default About;
