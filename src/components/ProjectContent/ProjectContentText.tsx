import * as React from "react";
import "../../pages/projectContent/ProjectContent.css"

interface Props {
    children: React.ReactNode;
}

export default function ProjectContentText({
                                               children,
                                           }: Props) {
    return (
        <p className="project-content-text text-sm">
            {children}
        </p>
    );
}