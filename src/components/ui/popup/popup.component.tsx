'use client'

import deleteNews from "@/utils/news/DeleteNews"
import { redirect } from "next/navigation"
import Button from "../button/button.component"
import toast from "react-hot-toast"

interface PopupProps {
    text: string
    event?: (open: boolean) => void
    pageId?: number
}

const Popup = ({ text, event, pageId }: PopupProps) => {
    const deleteArticle = async () => {
        if(!pageId) return

        const promise = deleteNews({ id: pageId })
        await toast.promise(promise, {
            loading: 'Usuwanie artykułu...',
            success: 'Artykuł został usunięty',
            error: 'Wystąpił błąd podczas usuwania artykułu',
        })
        event?.(false)
        redirect("/")
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 m-auto p-4 flex items-center justify-center w-full bg-zinc-900/60 z-70">
            <div className="flex flex-col justify-center items-center md:w-[450px] h-[250px] w-full bg-zinc-700 rounded-lg gap-6">
                <h3 className="text-center text-3xl font-medium">Uwaga</h3>
                <p>{text}</p>
                <div className="flex justify-between items-center gap-4 w-full max-w-[250px]">
                    <Button text="Tak" event={deleteArticle} classes="text-sm" backgroundColor="bg-green-600" />
                    <Button text="Nie" event={() => event?.(false)} classes="text-sm" backgroundColor="bg-rose-600" />
                </div>
            </div>
        </div>
    )
}

export default Popup