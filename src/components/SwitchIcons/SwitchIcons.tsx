import * as React from "react";
import {LucideIcon} from "lucide-react";
import './SwitchIcons.css';

interface SwitchIconsProps {
    iconDefault: LucideIcon;
    iconActive: LucideIcon;
    color?: string;
    cooldown?: number;
    onClick?: () => void;
    showMessage?: boolean;
    message?: string;
}

const SwitchIcons: React.FC<SwitchIconsProps> = ({
                                                     iconDefault: IconDefault,
                                                     iconActive: IconActive,
                                                     color: color,
                                                     cooldown = 2000,
                                                     onClick,
                                                     showMessage = false,
                                                     message = "Copié !",
                                                 }) => {
    const [active, setActive] = React.useState(false);

    const handleClick = () => {
        setActive(true);
        onClick?.();
        setTimeout(() => setActive(false), cooldown);
    };

    return (
        <div className="switch-icons-wrapper">
            {showMessage && active && (
                <div className="switch-tooltip">{message}</div>
            )}
            <button type="button" style={{color: color}} onClick={handleClick} className="switch-btn">
                {active ? <IconActive /> : <IconDefault />}
            </button>
        </div>
    );
};

export default SwitchIcons;
