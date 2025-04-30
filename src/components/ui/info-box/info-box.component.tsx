'use client'

import Link from "next/link"
import Button from "../button/button.component"
import { useContext } from "react"
import { InfoContext } from "@/context/InfoProvider"

const InfoBox = () => {
    const { isInfoAccepted, setIsInfoAccepted } = useContext(InfoContext)!

    const handleClick = () => {
        setIsInfoAccepted(true)
    }

    if(isInfoAccepted) return

    return (
        <div className="fixed left-4 bottom-4 bg-zinc-600 rounded-lg z-50 max-w-[450px] p-4">
            <p className="mb-4">Wszystkie artykuły prezentowane na tej stronie zostały zaczerpnięte z portalu <Link className="underline font-medium" target="_blank" href={'https://planetagracza.pl'}>PlanetaGracza.pl</Link> i stanowią własność ich oryginalnych autorów. Celem udostępnienia materiałów jest nauka i prezentacja przykładowych publikacji dziennikarskich z zakresu branży gier.</p>
            <Button text="Rozumiem" backgroundColor="bg-green-700" event={handleClick} />
        </div>
    )
}

export default InfoBox