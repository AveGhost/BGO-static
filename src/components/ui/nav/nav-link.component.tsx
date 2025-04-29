import Link from "next/link"

const NavLink = ({url,name}: {url: string, name: string}) => {
    return (
        <li>
            <Link href={url} className="flex items-center gap-4 cursor-pointer py-2 px-4 rounded-lg hover:text-zinc-300 hover:opacity-70 transition-all duration-300">{name}</Link>
        </li>
    )
}

export default NavLink