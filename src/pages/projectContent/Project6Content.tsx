import ProjectContentItem from "../../components/projectContent/ProjectContentItem";
import ProjectContentText from "../../components/projectContent/ProjectContentText";
import ProjectContentCategory from "../../components/projectContent/ProjectContentCategory";
import ProjectContentLink from "../../components/projectContent/ProjectContentLink";
import ProjectTitle from "../../components/ProjectTitle/ProjectTitle";
import * as React from "react";
import {
    CATEGORY_1,
    CATEGORY_2, CATEGORY_3,
    CATEGORY_4, CATEGORY_5,
    getOriginalBTSSkill,
    getReformulatedBTSSkill
} from "../../utils/getBTSSkills";
import ProjectContentOriginalBTSSkill from "../../components/ProjectContent/ProjectContentOriginalBTSSkill";
import ProjectContentImage from "../../components/ProjectContent/ProjectContentImage";
import {getProjectImage} from "../../utils/getUtils";

export default function Project6Content() {
    const CR_DRIVE = "https://drive.google.com/drive/folders/15sFsYo0cPxOvd2CF-hqqf1EEm9kqW_o9";
    const CAHIER_DES_CHARGES = "https://drive.google.com/drive/folders/1ae9nrmwlBScimeeLqm_TYzKFeDzwwuwV";
    const TABLEAU_KANBAN = "https://gitlab.com/AnaisPrt/projet-intranet/-/issues";
    const GITLAB = "https://gitlab.com/AnaisPrt/projet-intranet";
    const README = "https://gitlab.com/AnaisPrt/projet-intranet/-/blob/main/README.md?ref_type=heads";
    const DEPLOIEMENT_URL = "https://10.15.253.248/delaunayguittonb/public/projet-intranet/php/connexionUtilisateur.php";

    return (
        <>
            <ProjectTitle>
                Compétences du BTS
            </ProjectTitle>
            <ProjectContentCategory text={CATEGORY_1}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_1, 4)}>
                <ProjectContentText>
                    On a simplement utilisé GitLab ainsi que des archives ZIP que nous faisions très souvent au cas où
                    il y aurait un problème avec le projet. Ces sauvegardes étaient stockées pour ma part sur mon
                    OneDrive, et mon pc personnel.{" "}
                    <ProjectContentLink href={GITLAB} text={"GitLab"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_1, 4)}/>
            </ProjectContentItem>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_1, 2)}>
                <ProjectContentText>
                    Il existe différents rôles utilisateurs dans la base de données : "admin" et "utilisateur". Chaque
                    utilisateur de l'intranet possède un rôle interne à l'entreprise. (DIR = Directeur, REH =
                    Responsable des ressources humaines,...). Suivant le rôle en base de données, les utilisateurs n'ont
                    pas tous accès aux mêmes pages.
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_1, 2)}/>
                <ProjectContentImage src={getProjectImage(6, "admin-panel.png")} alt="Tableau d'administration"
                                     caption={"Figure 1 : Tableau d'administration accessible uniquement via un compte adminsitrateur."}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_2}/>
            <ProjectContentItem
                title={getReformulatedBTSSkill(CATEGORY_2, 2)}>
                <ProjectContentText>
                    En suivant les demandes du cahier des charges, j'ai développé l'intranet et notamment les pages :
                    actualités et le tableau de bord. {" "}
                    <ProjectContentLink href={CR_DRIVE} text={"Compte-rendu"}/>{" "}
                    <ProjectContentLink href={README} text={"README"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_2, 2)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_3}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_3, 2)}>
                <ProjectContentText>
                    Nous avons mis en place, une messagerie interne à l’entreprise, un espace personnel où les
                    employés peuvent déposer des documents, et un tableau de bord qui permet de voir l’évolution du
                    chiffre d’affaires de l’entreprise, ainsi que d’autres informations supplémentaires.
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_3, 2)}/>
                <ProjectContentImage src={getProjectImage(6, "tableau-de-bord.png")}
                                     alt={"Tableau de bord de l'intranet"}
                                     caption={"Figure 2 : Tableau de bord, accessible par tous les utilisateurs " +
                                         "de l'intranet. Il permet de suivre les chiffres importants de l'entreprise," +
                                         "de voir les tickets, d'accéder au calendrier, aux actualités et aux dernières " +
                                         "notifications reçues par l'utilisateur."}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_4}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 0)}>
                <ProjectContentText>
                    Après analyse du cahier des charges, nous avons identifié les besoins du projet et réparti les
                    fonctionnalités à développer entre les différents membres du groupe.{" "}
                    <ProjectContentLink href={CAHIER_DES_CHARGES} text={"Cahier des charges"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 0)}/>
            </ProjectContentItem>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_4, 1)}>
                <ProjectContentText>
                    Afin de nous attribuer des tâches efficacement, nous avons utilisé pour la première fois un tableau
                    de Kanban avec des labels. De cette façon, i létait simple pour nous de différencier à quoi
                    correspondait chaque ticket (bugs, améliorations, pages,...).{" "}
                    <ProjectContentLink href={TABLEAU_KANBAN} text={"Tableau Kanban"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_4, 1)}/>
            </ProjectContentItem>

            <ProjectContentCategory text={CATEGORY_5}/>
            <ProjectContentItem title={getReformulatedBTSSkill(CATEGORY_5, 1)}>
                <ProjectContentText>
                    J'ai déployé le projet sur le serveur FTP de La Joliverie via FileZilla et la base de données du
                    projet par le biais de l'interface de PhpMyAdmin. {" "}
                    <ProjectContentLink href={DEPLOIEMENT_URL} text={"Site web déployé"}/>
                </ProjectContentText>
                <ProjectContentOriginalBTSSkill skill={getOriginalBTSSkill(CATEGORY_5, 1)}/>
                <ProjectContentImage src={getProjectImage(6, "connexion.png")} alt={"Page de connexion"}
                                     caption={"Figure 3 : Page de connexion de l'intranet."}/>
                <ProjectContentImage src={getProjectImage(6, "phpmyadmin.png")} alt={"Interface PhpMyAdmin"}
                                     caption={"Figure 4 : Déploiement de la base de données via l'interface PhpMyAdmin."}/>
            </ProjectContentItem>

        </>
    );
}