import { Icon } from "@iconify/react/dist/iconify.js"

interface RatingTableElementProps {
    icon: string
    text: string
    isPositive: boolean
}

const RatingTableElement = ({icon,text,isPositive}: RatingTableElementProps) => {
    return (
        <li className="flex items-center text-sm gap-2">
            <Icon icon={icon} width="32" height="32" className={`${isPositive ? "text-green-700" : "text-red-600"} min-w-8`} />
            <span>{text}</span>
        </li>
    )
}

export default RatingTableElement