import * as React from "react";
import {ReactNode} from "react";
import './Card.css';

interface CardProps {
    children?: ReactNode;
    variant: "card" | "photo";
    srcPhoto?: string;
    altText?: string;


}

function Card({children, variant, srcPhoto, altText, }: CardProps) {
    if (variant == "card") {
        return (
            <article className="card shadows">
                {children}
            </article>
        );
    }

    if (variant == "photo") {
        return (
            <img src={srcPhoto} alt={altText} className="photo shadows" loading="lazy"/>
        )
    }

    if (variant == "project") {

    }

}

export default Card;
