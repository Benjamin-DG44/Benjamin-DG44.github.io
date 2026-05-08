import * as React from "react";
import "../../pages/projectContent/ProjectContent.css";

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function ProjectContentItem({
                                               title,
                                               children,
                                           }: Props) {

    return (
        <div className="project-content-item">

            <ul className="project-content-list">

                <li className="project-content-item-header">

                    <h3 className="project-content-item-title">
                        {title}
                    </h3>

                </li>

            </ul>

            <div className="project-content-item-body">
                {children}
            </div>

        </div>
    );
}