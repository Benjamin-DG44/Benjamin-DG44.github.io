import * as React from "react";
import "../../pages/projectContent/ProjectContent.css"

interface Props {
    children: React.ReactNode;
}

export default function ProjectContentTitle({
                                                children,
                                            }: Props) {
    return (
        <h2 className="mb-1 project-content-title">
            {children}
        </h2>
    );
}