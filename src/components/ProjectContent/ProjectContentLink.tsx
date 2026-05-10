import * as React from "react";
import {ExternalLink} from "lucide-react";
import "../../pages/projectContent/ProjectContent.css";

interface Props {
    href: string;
    text: string,
}

export default function ProjectContentLink({
                                               href,
                                               text,
                                           }: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="project-content-link"
        >
            <span>
                {text}
            </span>

            <ExternalLink
                size={16}
                strokeWidth={2}
            />
        </a>
    );
}