import { Icon } from "@iconify/react/dist/iconify.js"

interface SelectedGameProps {
    text: string
    event?: () => void
}

const SelectedGame = ({text, event}: SelectedGameProps) => {
    return (
        <div className="relative w-full" onClick={event}>
            <h3 className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg cursor-pointer">{text}</h3>
            <Icon icon="arcticons:rpg-simple-dice" width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
        </div>
    )
}

export default SelectedGame