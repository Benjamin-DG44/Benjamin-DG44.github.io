import * as React from "react";
import "../../pages/projectPage/ProjectPage.css";

type TitleProps = {
    children: React.ReactNode;
    subtitle?: boolean;
};

export default function ProjectTitle({children, subtitle = false}: TitleProps) {
    return (
        <div className="project-section-title-wrapper">
            <span className="project-section-marker"></span>
            <h3 className={subtitle ? "project-section-subtitle text-lg" : "project-section-title"}>
                {children}
            </h3>
        </div>
    );
}