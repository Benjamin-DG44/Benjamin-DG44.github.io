import * as React from "react";
import "../../pages/projectContent/ProjectContent.css";

interface Props {
    text: string;
}

export default function ProjectContentCategory({
                                                   text,
                                               }: Props) {

    return (
        <div className="mb-1-25 project-content-category">
            <h4 className={"text-lg"}>
                {text}
            </h4>
        </div>
    );
}