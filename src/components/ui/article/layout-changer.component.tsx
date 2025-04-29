'use client'

import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext } from "react"
import { HomeLayoutContext } from "@/context/HomeLayoutProvider"
const LayoutChanger = () => {
    const { isGrid, toggleGridLayout, toggleListLayout } = useContext(HomeLayoutContext)!
    return (
        <div className={`${isGrid ? "xl:col-span-4 md:col-span-2 sm:col-span-1" : "col-span-1"} flex gap-4 mb-6`}>
            <Icon icon="flowbite:grid-solid" width="35" height="35" className={`border-1 border-zinc-600 p-1 cursor-pointer hover:bg-zinc-600 transition-colors duration-300 rounded-lg ${isGrid ? "bg-zinc-600" : ""}`} onClick={toggleGridLayout} />
            <Icon icon="solar:list-linear" width="35" height="35" className={`border-1 border-zinc-600 p-1 cursor-pointer hover:bg-zinc-600 transition-colors duration-300 rounded-lg ${!isGrid ? "bg-zinc-600" : ""}`} onClick={toggleListLayout} />
        </div>
    )
}

export default LayoutChanger