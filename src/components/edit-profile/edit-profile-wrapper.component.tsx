'use client'

import FormWrapper from "@/components/ui/form/form-wrapper.component"
import FormInput from "@/components/ui/form/form-input.component"
import Button from "@/components/ui/button/button.component"
import FormTextArea from "../ui/form/form-textarea.component"
import editUser from "@/utils/user/UserUpdate"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "@/context/AuthProvider"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"
import UploadImage from "../ui/add-edit-post/upload-image.component"
import PreviewImage from "../ui/add-edit-post/preview-image.component"
import Loading from "./loading"
const EditProfileWrapper = () => {
    const { user, setUser } = useContext(AuthContext)!
    const [avatar, setAvatar] = useState<string | undefined>(user?.avatarUrl)
    const [avatarUrl, setAvatarUrl] = useState<string | undefined>()
    const [formData, setFormData] = useState({
        email: "", 
        first_name: "",
        last_name: "",
        bio: "",
        avatar_url: ""
    })
    
    useEffect(() => {
        setFormData({
            email: user?.email || "",
            first_name: user?.firstName || "",
            last_name: user?.lastName || "",
            bio: user?.bio || "",
            avatar_url: user?.avatarUrl || "",
        })
    }, [user])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedFormData = {
            ...formData,
            avatar_url: avatar,
        };
        try {
            const promise = editUser(updatedFormData);
            const updatedUser = await toast.promise(promise, {
                loading: 'Zapisywanie...',
                success: 'Zapisano pomyślnie',
                error: (err) => err.message || 'Wystąpił błąd podczas zapisywania',
            })

            setUser(updatedUser);
            
            setTimeout(() => {
                redirect('/');
            },300)
        } catch(err) {}
    }

    if(!user) return <Loading />

    return (
        <div className="form w-full max-w-[850px] h-full my-6">
            <div className="flex flex-col gap-4 justify-center h-full items-center p-4">
                <h1 className="text-2xl text-center mb-6">Twoje dane</h1>
                <FormWrapper onSubmit={formSubmit}>
                    {avatar ? <PreviewImage imageRounded="rounded-full" classes="w-32 h-32 mx-auto" previewImage={avatar} deleteImage={() => setAvatar("")} /> 
                    :
                    <UploadImage setPreviewThumbnail={setAvatar} previewThumbnailUrl={avatarUrl} setPreviewThumbnailUrl={setAvatarUrl} height="min-h-[300px]"/>
                    }
                    <div className="flex items-center gap-4">
                        <FormInput icon="majesticons:user-line" type="text" placeholder="Imie" name="first_name" value={formData.first_name} event={handleInputChange} />
                        <FormInput icon="majesticons:user-line" type="text" placeholder="Nazwisko" name="last_name" value={formData.last_name} event={handleInputChange}/>
                    </div>
                    <FormInput icon="carbon:email" type="email" placeholder="Adres e-mail" name="email" value={formData.email} event={handleInputChange}/>
                    <FormTextArea placeholder="O mnie" name="bio" value={formData.bio} event={handleInputChange}/>
                    <Button type="submit" text="Zapisz dane" backgroundColor="bg-sky-800" />
                </FormWrapper>
            </div>
        </div>
    )
}

export default EditProfileWrapper