import React, {useEffect, useRef, useState} from "react";
import "./FadeAnimation.css";

type Direction = "up" | "down" | "left" | "right";

interface FadeAnimationProps {
    children: React.ReactNode;
    direction?: Direction; // par défaut "up"
    delay?: number;        // en ms
    threshold?: number;    // déclenchement (0–1)
}

function FadeAnimation({
        children,
        direction = "down",
        delay = 0,
        threshold = 0.1,
    }: FadeAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setShow(true),
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`fade-anim fade-${direction} ${show ? "visible" : ""}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default FadeAnimation;
