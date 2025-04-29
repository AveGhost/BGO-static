import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"

interface DropDownElementProps {
    url: string
    name: string
    icon: string
    onClick?: () => void
}

const DropDownElement = ({ url, name, icon, onClick }: DropDownElementProps) => {
    return (
        <li>
            <Link href={url} className="flex items-center gap-4 cursor-pointer py-2 px-4 rounded-lg hover:text-zinc-300 hover:opacity-70 transition-all duration-300" onClick={onClick}>
                <Icon icon={icon} width="20" height="20" /> {name}
            </Link>
        </li>
    )
}

export default DropDownElement