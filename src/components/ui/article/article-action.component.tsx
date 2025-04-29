'use client'

import Button from "../button/button.component"
import LinkButton from "../link-button/link-button.component"
import Popup from "../popup/popup.component"
import { AuthContext } from "@/context/AuthProvider"
import { useState, useContext } from "react"
import { Roles } from "@/types/RoleTypes"
const ArticleAction = ({pageId}: {pageId: number}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useContext(AuthContext)!

    if(user?.user_role !== Roles.ADMINISTRATOR && user?.user_role !== Roles.EDITOR) return
    
    return (
        <>
            <div className="fixed left-0 p-2 w-[80px] h-[150px] md:w-[200px] md:h-[200px] bottom-0 flex flex-col items-center justify-center gap-4">
                <LinkButton text="Edytuj artykuł" href={`/dashboard/edit-post?id=${pageId}`} icon="tabler:edit" classes="text-[0px] !rounded-full !w-12 h-12 !p-0 !gap-0 md:!w-full md:text-sm md:!gap-4 md:!px-4 md:!py-2 md:h-auto md:!rounded-lg" backgroundColor="bg-sky-600" />
                <Button text="Usuń artykuł" event={() => setIsOpen(true)} icon="material-symbols-light:delete-outline-rounded" classes="text-[0px] !rounded-full !w-12 h-12 !p-0 !gap-0 md:!w-full md:text-sm md:!gap-4 md:!px-4 md:!py-2 md:h-auto md:!rounded-lg" backgroundColor="bg-rose-600" />
            </div>
            {isOpen && <Popup text="Czy na pewno chcesz usunąć artykuł?" event={() => setIsOpen(false)} />}
        </>
    )
}

export default ArticleAction