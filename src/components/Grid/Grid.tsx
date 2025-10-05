import "./grid.css";
import React from "react";

function Grid({ children, gap="1rem", mTop="0" }: { children: React.ReactNode; gap?: string; mTop?: string, className?: React.ReactNode }) {
    const style: React.CSSProperties = {
        gap: gap,
        marginTop: mTop
    } as React.CSSProperties;

    return (
        <div className="grid" style={style}>
            {children}
        </div>
    );
}

export default Grid;