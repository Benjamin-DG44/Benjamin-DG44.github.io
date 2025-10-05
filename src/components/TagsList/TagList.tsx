import * as React from "react";
import Tag from "../Tag/Tag";

interface TagListProps {
    children?: React.ReactNode;
    data_list: string[];
}

function TagList({data_list}: TagListProps) {
    return (
        <div className="flex-row">
            {data_list.map((item: string, index: number) => (
                <Tag key={index} text={item}/>
            ))}

        </div>
    );
}

export default TagList;
