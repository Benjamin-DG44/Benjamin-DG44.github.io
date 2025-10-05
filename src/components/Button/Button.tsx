import {Link} from "react-scroll";
import "./Button.css";
import * as React from "react";

interface ButtonProps {
    variant: "primary" | "secondary"; // obligatoire
    children: React.ReactNode;        // obligatoire
    animation?: string;               // optionnel
    to?: string;                      // optionnel
    duration?: number;                // optionnel, en millisecondes
    onClick?: () => void;             // optionnel
    className?: string;
    border?: boolean;
}

function Button({ variant, children, to, duration = 500, onClick, animation, border = false }: ButtonProps) {
    const borderStyle: string = '1px solid var(--purple-500)';

    if (to) {
        // Si on a une destination, utiliser Link
        return (
            <Link
                to={to}
                className={`btn btn-${variant} ${animation}`}
                onClick={onClick}
                smooth={true}
                duration={duration} // duration en nombre
            >
                {children}
            </Link>
        );
    }

    // bouton secondaire avec bordure
    if (border == true) {
        return (
            <a className={`btn btn-${variant}`} onClick={onClick} style={{border: borderStyle}}>
                {children}
            </a>
        );
    }

    // Sinon, bouton classique
    return (
        <a className={`btn btn-${variant}`} onClick={onClick}>
            {children}
        </a>
    );
}

export default Button;
