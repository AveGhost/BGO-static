'use client'

import { Icon } from "@iconify/react/dist/iconify.js"
import AuthorAvatar from "../../../author/author-avatar.component"
import AuthorName from "../../../author/author-name.component"
import DropDownWrapper from "./dropdown-wrapper.component"
import { useState } from "react"
import { User } from "@/types/UserTypes"
interface UserInfoProps {
    user: User
}

const UserInfo = ({user}: UserInfoProps) => {
    const [openDropDown, setOpenDropDown] = useState(false)
    const toggleDropDown = () => {
        setOpenDropDown(!openDropDown)
    }

    return (
        <div className="md:flex gap-4 items-center hidden relative">
            <AuthorAvatar avatar='/avatar.png' />
            <AuthorName name={user.first_name} />
            <Icon icon="material-symbols-light:arrow-drop-down" width="24" height="24" className={`cursor-pointer ${openDropDown ? "rotate-180" : "rotate-0"}`} onClick={toggleDropDown} />
            {openDropDown && <DropDownWrapper role={user.user_role} toggleDropDown={toggleDropDown} />}
        </div>
    )
}

export default UserInfo