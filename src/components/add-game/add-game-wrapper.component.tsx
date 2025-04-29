'use client'

import FormWrapper from "../ui/form/form-wrapper.component"
import FormInput from "../ui/form/form-input.component"
import FormSelect from "../ui/form/form-select/form-select.component"
import Button from "../ui/button/button.component"
import { platforms, platformValues, platformsLabels, Platform } from "@/types/PlatformTypes"
import postGame from "@/utils/games/PostGame"
import { useState } from "react"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"

const AddGameWrapper = () => {
    const [formData, setFormData] = useState({title: '', coverImage: '', description: '', platform: "" as Platform, categories: [] as string[]})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePlatformChange = (value: string | string[]) => {
        const key = platformValues[value as string];
        setFormData((prev) => ({ ...prev, platform: key }));
    };     

    const handleCategoryChange = (value: string | string[]) => {
        setFormData((prev) => ({ ...prev, categories: value as string[] }));
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const promise = postGame(formData)
            await toast.promise(promise, {
                loading: "Trwa dodawanie gry...",
                success: "Gra została dodana",
                error: (err) => err.message || 'Wystąpił błąd przy dodawaniu gry',
            })

            setTimeout(() => {
                redirect(`/dashboard/add-post?title=${formData.title}`)
            }, 500)
        } catch (err) {}
    }

    return (
        <FormWrapper onSubmit={formSubmit}>
            <FormInput type="text" placeholder="Tytuł" name="title" value={formData.title} event={handleInputChange} icon="fluent:xbox-controller-48-regular" />
            <FormInput type="text" placeholder="Okładka gry" name="coverImage" value={formData.coverImage} event={handleInputChange} icon="material-symbols-light:image-outline" />
            <FormInput type="text" placeholder="Opis" name="description" value={formData.description} event={handleInputChange} icon="fluent:textbox-16-regular" />
            <FormSelect icon="garden:platform-26" title="Wybierz platforme:" elements={platforms.map(p => platformsLabels[p as Platform])} onChange={handlePlatformChange} isSingle={true} />
            <FormSelect icon="arcticons:rpg-simple-dice" title="Wybierz gatunki:" elements={["Action", "RPG", "MMO", "Fighting", "Survival"]} onChange={handleCategoryChange} />
            <Button type="submit" text="Dodaj grę"/>
        </FormWrapper>
    )
}

export default AddGameWrapper