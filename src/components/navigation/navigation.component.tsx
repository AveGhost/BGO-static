'use client'

import Logo from "../ui/logo/logo.component"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState, useContext } from "react"
import { AuthContext } from "@/context/AuthProvider"
import NavButtons from "../ui/nav/nav-buttons.component"
import NavList from "../ui/nav/nav-list.component"
import MobileMenu from "../ui/nav/mobile-menu/mobile-menu.component"
import UserInfo from "../ui/nav/dropdown/user-info.component"

const Navigation = () => {
    const links = [
        {
            url: "/",
            name: "Gry"
        },
        {
            url: "/about",
            name: "Technologia"
        },
        {
            url: "/",
            name: "Seriale"
        },
        {
            url: "/",
            name: "Filmy"
        }
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const user = useContext(AuthContext)?.user

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="bg-zinc-800 p-3 z-50 w-full sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <NavList links={links} classes="md:flex hidden" />
                {!user ?
                <NavButtons classes="md:flex hidden" />
                :
                <UserInfo user={user} />}
                <Icon icon="material-symbols:menu-rounded" width="40" height="40" className="md:hidden cursor-pointer" onClick={toggleMobileMenu} />
                <MobileMenu isMobileMenuOpen={isMobileMenuOpen} links={links} toggleMobileMenu={toggleMobileMenu} />
            </div>
        </nav>
    )
}

export default Navigation