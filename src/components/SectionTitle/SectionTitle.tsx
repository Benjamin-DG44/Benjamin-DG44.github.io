import * as React from "react";
import UnderLine from "../UnderLine/UnderLine";
import FadeAnimation from "../FadeAnimation/FadeAnimation";

interface SectionTitleProps {
    title: string;
    underline?: boolean;
    children?: React.ReactNode;
}

function SectionTitle({title, underline=true}: SectionTitleProps) {
    if (underline) {
        return (
            <>
                <FadeAnimation direction="down" delay={100}>
                    <p className="text-3xl mb-1">{title}</p>
                    <UnderLine/>
                </FadeAnimation>
            </>
        )
    }

    else {
        return (
            <>
                <p className="text-3xl mb-1">{title}</p>
            </>
        )
    }

}


export default SectionTitle;
