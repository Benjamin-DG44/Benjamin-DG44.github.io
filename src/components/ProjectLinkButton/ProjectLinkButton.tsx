import {ProjectLink} from "../../constants/Data";
import {HugeiconsIcon} from "@hugeicons/react";
import {
    GithubIcon,
    GitlabIcon,
    Globe02Icon,
    GoogleDriveFreeIcons,
} from "@hugeicons/core-free-icons/index";
import {getImageUrl} from "../../utils/getUrls";
import * as React from "react";
import "./ProjectLinkButton.css";

export interface ProjectLinkButtonProps {
    link: ProjectLink;
    variant?: "default" | "minimal";
}

export default function ProjectLinkButton({link, variant = "default"}: ProjectLinkButtonProps) {
    const isDepot =
        link.type === "github" ||
        link.type === "gitlab";

    const getIcon = () => {
        switch (link.type) {

            case "github":
                return (
                    <HugeiconsIcon
                        icon={GithubIcon}
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="project-icon logo-github"
                    />
                );

            case "gitlab":
                return (
                    <HugeiconsIcon
                        icon={GitlabIcon}
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="project-icon logo-gitlab"
                    />
                );

            case "youtube":
                return (
                    <img
                        src={getImageUrl("youtube-logo.svg")}
                        alt="youtube-logo"
                        className="project-icon"
                    />
                );

            case "itchio":
                return (
                    <img
                        src={getImageUrl("itchio-logo.svg")}
                        alt="itchio-logo"
                        className="project-icon"
                    />
                );

            case "drive":
                return (
                    <HugeiconsIcon
                        icon={GoogleDriveFreeIcons}
                        strokeWidth={1.3}
                        className="project-icon logo-website"
                    />
                );

            default:
                return (
                    <HugeiconsIcon
                        icon={Globe02Icon}
                        strokeWidth={1.3}
                        className="project-icon logo-website"
                    />
                );
        }
    };

    const getText = () => {
        switch (link.type) {

            case "github":
            case "gitlab":
                return "Voir le dépôt";

            case "youtube":
                return "Voir sur YouTube";

            case "itchio":
                return "Tester le projet";

            case "drive":
                return "Voir le drive";

            case "demo":
                return "Tester le projet";

            default:
                return link.label;
        }
    };

    const getButtonClass = () => {

        const isMinimal = variant === "minimal";

        const baseClass = isMinimal
            ? "project-button-minimal"
            : "project-button";

        switch (link.type) {

            case "github":
                return `
                ${baseClass}
                ${isMinimal ? "project-button-github" : "project-button-github"}
                mt-1
            `;

            case "gitlab":
                return `
                ${baseClass}
                ${isMinimal ? "project-button-gitlab" : "project-button-gitlab"}
                mt-1
            `;

            default:
                return `${baseClass} mt-1`;
        }
    };
    return (
        <a
            className={getButtonClass()}
            href={link.url}
            target="_blank"
            rel="noreferrer"
        >
            {getIcon()}

            <p
                className={`
                    ${variant === "minimal" ? "text-sm" : ""}
                    ${isDepot ? "project-link-depot" : ""}
                `}
            >
                {getText()}
            </p>
        </a>
    );
}