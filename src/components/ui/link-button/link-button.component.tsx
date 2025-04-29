import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"

interface LinkButtonProps {
    text: string
    href: string
    icon?: string
    onClick?: () => void
    classes?: string
    backgroundColor?: string
    color?: string
}

const LinkButton = ({ text, href, icon, onClick, classes, backgroundColor, color }: LinkButtonProps) => {
    return (
        <Link href={href} onClick={onClick} className={`flex gap-4 items-center justify-center rounded-lg px-4 py-2 w-full hover:opacity-70 transition-all duration-300 cursor-pointer ${classes} ${backgroundColor ? `${backgroundColor}` : "bg-zinc-600"} ${color ? `${color}` : "text-white"}`}>
            {text}
            {icon && <Icon icon={icon} width="20" height="20" />}
        </Link>
    )
}

export default LinkButton