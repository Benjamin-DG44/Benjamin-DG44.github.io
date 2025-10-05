import React, {useEffect, useState} from "react";

interface TypeWriterProps {
    children: React.ReactNode; // texte à afficher
    speed?: number;            // vitesse en ms par caractère
    className?: string;        // pour styler le <span>
}

function TypeWriterAnimation({
                                 children,
                                 speed = 50,
                                 className = "",
                             }: TypeWriterProps) {
    const [displayed, setDisplayed] = useState("");

    // Convertit children en string si nécessaire
    const text = typeof children === "string" ? children : "";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayed((prev) => prev + text.charAt(index));
            index += 1;
            if (index >= text.length) clearInterval(timer);
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return <span className={className + " typewriter-cursor"}>{displayed}</span>;
}

export default TypeWriterAnimation;
