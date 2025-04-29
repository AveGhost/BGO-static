import { Icon } from "@iconify/react/dist/iconify.js"
import NavList from "../nav-list.component"
import NavButtons from "../nav-buttons.component"
import { AuthContext } from "@/context/AuthProvider"
import { useContext } from "react"
import DropDownElement from "../dropdown/dropdown-element.component"
import AuthorAvatar from "@/components/author/author-avatar.component"
import AuthorName from "@/components/author/author-name.component"
import { Roles } from "@/types/RoleTypes"

interface MobileMenuProps {
    isMobileMenuOpen: boolean
    links: {url: string, name: string}[]
    toggleMobileMenu: () => void
}

const MobileMenu = ({isMobileMenuOpen, links, toggleMobileMenu}: MobileMenuProps) => {
    const {user} = useContext(AuthContext)!
    return (
        <div className={`mobile-menu fixed ${isMobileMenuOpen ? "right-0 opacity-100" : "-right-100 opacity-0"} top-0 w-full max-w-[300px] h-full bg-zinc-800 flex flex-col z-50 p-4 shadow-lg shadow-zinc-600 transition-opacity duration-300`}>
            <Icon icon="material-symbols:close-rounded" width="40" height="40" className="cursor-pointer ml-auto" onClick={toggleMobileMenu} />
            <NavList links={links} classes="flex flex-col !items-start w-full md:hidden" />
            {!user ?
            <NavButtons classes="flex mt-auto" onClick={toggleMobileMenu} />
            :
            <>
                <ul className="mt-6 border-t border-zinc-600 py-2 w-full">
                    {user.user_role  === Roles.EDITOR || user.user_role  === Roles.ADMINISTRATOR ? <DropDownElement url="/dashboard/add-game" name="Dodaj recencje" icon="ic:round-post-add" onClick={toggleMobileMenu} /> : null}
                    {user.user_role  === Roles.EDITOR || user.user_role  === Roles.ADMINISTRATOR ? <DropDownElement url="/dashboard/my-posts" name="Twoje posty" icon="dashicons:admin-post" onClick={toggleMobileMenu} /> : null}
                    {user.user_role === Roles.ADMINISTRATOR && <DropDownElement url="/" name="Wszystkie posty" icon="ic:round-all-inbox" onClick={toggleMobileMenu} />}
                    <DropDownElement url="/dashboard/edit-profile" name="Edytuj profil" icon="carbon:settings" onClick={toggleMobileMenu} />
                    <DropDownElement url="/" name="Wyloguj" icon="hugeicons:logout-04" onClick={toggleMobileMenu} />
                </ul>
                <div className="flex gap-4 items-center mt-auto">
                    <AuthorAvatar avatar='/avatar.png' />
                    <AuthorName name={user.first_name} />
                </div>
            </>
            }
        </div>
    )
}

export default MobileMenu