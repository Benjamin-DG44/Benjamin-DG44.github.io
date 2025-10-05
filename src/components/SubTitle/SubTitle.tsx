import * as React from "react";

interface SubTitleProps {
    text: string;
    mTop?: string;
    mBottom?: string;
}

function SubTitle({text, mTop="0", mBottom="0"}: SubTitleProps) {
    return(
        <p className="text-lg" style={{marginTop: `${mTop}rem`, marginBottom: `${mBottom}rem`}}>{text}</p>
    )
}

export default SubTitle;
