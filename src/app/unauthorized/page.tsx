'use client'

import { Icon } from "@iconify/react/dist/iconify.js"
import { useEffect } from "react"
import { redirect } from "next/navigation"
const Unauthorized = () => {
    
    useEffect(() => {
        setTimeout(() => {
            redirect("/")
        }, 3000)
    }, [])

    return (
        <div className="container mx-auto h-full grid place-items-center items-center grow relative">
            <div className="form w-full max-w-[450px] min-h-[350px] p-4 flex flex-col items-center justify-around">
                <Icon icon="carbon:error" width="84" height="84" style={{ color: "red" }} />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-center mb-6">Nie masz uprawnień do tej strony</h1>
                    <p>Za chwilę zostaniesz przekierowany do strony głównej</p>
                </div>
            </div>
        </div>
    )
}

export default Unauthorized