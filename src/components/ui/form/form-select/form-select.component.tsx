import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"
interface FormSelectProps {
    icon: string
    title: string
    elements: string[]
    isSingle?: boolean
    onChange: (el: string | string[]) => void
}
const FormSelect = ({icon,title,elements,isSingle,onChange}: FormSelectProps) => {
    const [thisTitle,setThisTitle] = useState<string | string[]>(isSingle ? title : [])
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const toggleSelect = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectChange = (el: string) =>{
        if(isSingle){
            setThisTitle(el)
            onChange(el)
        } else {
            const selected = (thisTitle as string[]).includes(el)
            ? (thisTitle as string[]).filter(element => element !== el)
            : [...(thisTitle as string[]), el]
      
            setThisTitle(selected)
            onChange(selected)
        }
    }

    const isSelected = (element: string) => {
        if (isSingle) return thisTitle === element
        return (thisTitle as string[]).includes(element)
    }

    return (
        <div className="w-full relative py-2 px-4 border-1 border-zinc-600 rounded-lg text-white" onClick={toggleSelect}>
            <span className={`cursor-pointer w-full block`}>
                {isSingle ? thisTitle : (thisTitle as string[]).join(", ") || title}
                <Icon icon={icon} width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
                <ul className={`absolute scale-y-0 opacity-0 bg-zinc-600 rounded-lg w-full top-10 right-0 left-0 flex flex-col gap-2 transition-all duration-300 ${isOpen ? "scale-y-100 opacity-100 z-10" : ""}`}>
                    {elements.map((element, index) => (<li key={index} className={`hover:bg-zinc-500 px-4 py-2 w-full cursor-pointer transition-colors duration-300 text-zinc-400 ${index === 0 ? "rounded-t-lg" : index === elements.length - 1 ? "rounded-b-lg" : ""} ${isSelected(element) ? "bg-zinc-400/20" : ""}`} onClick={() => handleSelectChange(element)}>{element}</li>))}
                </ul>
            </span>
        </div>
    )
}

export default FormSelect