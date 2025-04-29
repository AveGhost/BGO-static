import { Icon } from "@iconify/react/dist/iconify.js";

type EventHandler = (() => void) | (() => void)[];

interface ButtonProps {
    text: string
    event?: EventHandler
    type?: "submit" | "button"
    classes?: string
    icon?: string
    backgroundColor?: string
    color?: string
}

const Button = ({text,event,type,classes,icon,backgroundColor,color}: ButtonProps) => {
    const handleClick = () => {
        if (Array.isArray(event)) {
            event.forEach(fn => fn());
        } else {
            event?.();
        }
    };
    return (
        <button type={type ?? "button"} className={`flex justify-center items-center gap-4 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full ${classes} ${backgroundColor ? `${backgroundColor}` : "bg-zinc-600"} ${color ? `${color}` : "text-white"}`} onClick={handleClick}>
            {text}
            {icon && <Icon icon={icon} width="20" height="20" />}
        </button>
    )
}

export default Button