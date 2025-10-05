import * as React from "react";
import './Tag.css'

interface TagProps {
    children?: React.ReactNode;
    text: string;
    color?: string;
    backgroundColor?: string;
}

function Tag({text, color = "var(--text-200)", backgroundColor = "var(--primary-700)"}: TagProps) {
    return (
        <span className="tag text-sm" style={{color: color, backgroundColor: backgroundColor}}>
            {text}
        </span>
    );
}

export default Tag;
