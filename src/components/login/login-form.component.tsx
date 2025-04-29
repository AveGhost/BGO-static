'use client'

import { useState } from "react"
import FormInput from "../ui/form/form-input.component"
import handleLogin from "@/utils/LoginApi"
import Button from "../ui/button/button.component"
import FormWrapper from "../ui/form/form-wrapper.component"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthProvider"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"

const LoginForm = () => {
    const [formData, setFormData] = useState({email: '', password: ''})
    const { setToken } = useContext(AuthContext)!

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const promise = handleLogin(formData)
            await toast.promise(promise, {
                loading: 'Logowanie...',
                success: 'Zalogowano pomyślnie',
                error: (err) => err.message || 'Wystąpił błąd przy logowaniu',
            })
            setToken(await promise)
            
            setTimeout(() => {
                redirect('/');
            },300)
        } catch (err) {}

        setFormData({email: '', password: ''})
    }
    return (
        <div className="form flex flex-col justify-center w-full max-w-[450px] min-h-[350px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl text-center mb-6">Logowanie</h1>
                <FormWrapper onSubmit={formSubmit}>
                    <FormInput icon="majesticons:user-line" type="email" placeholder="Adres e-mail" name="email" value={formData.email} event={handleInputChange} />
                    <FormInput icon="carbon:password" type="password" placeholder="Hasło" name="password" value={formData.password} event={handleInputChange} />
                    <Button type="submit" text="Zaloguj się"/>
                </FormWrapper>
            </div>
        </div>
    )
}

export default LoginForm