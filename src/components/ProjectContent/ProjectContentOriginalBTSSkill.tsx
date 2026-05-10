import * as React from "react";
import "../../pages/projectContent/ProjectContent.css"

interface Props {
    skill: string;
}

export default function ProjectContentOriginalBTSSkill({skill}: Props) {
    return <i className="text-sm project-content-original-bts-skill">({skill})</i>;
}