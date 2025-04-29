'use client'

import { useState } from "react"
import FormWrapper from "../ui/form/form-wrapper.component"
import Button from "../ui/button/button.component"
import FormInput from "../ui/form/form-input.component"
import handleRegister from "@/utils/RegisterApi"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"

const RegisterForm = () => {
    const [formData, setFormData] = useState({email: '', password: '', first_name: '', last_name: '', username: '', password2: ''})
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const promise = handleRegister(formData);
            await toast.promise(promise, {
                loading: 'Rejestracja...',
                success: 'Rejestracja pomyślna',
                error: (err) => err.message || 'Wystąpił błąd podczas rejestracji',
            })
            
            setTimeout(() => {
                redirect('/login');
            },300)
        } catch(err) {}
    }
    return (
        <div className="form flex flex-col justify-center w-full max-w-[450px] min-h-[550px] p-4">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-2xl text-center mb-6">Rejestracja</h1>
                <FormWrapper onSubmit={formSubmit}>
                    <FormInput icon="majesticons:user-line" type="text" placeholder="Imie" name="first_name" value={formData.first_name} event={handleInputChange} />
                    <FormInput icon="majesticons:user-line" type="text" placeholder="Nazwisko" name="last_name" value={formData.last_name} event={handleInputChange}/>
                    <FormInput icon="majesticons:user-line" type="text" placeholder="Nazwa użytkownika" name="username" value={formData.username} event={handleInputChange}/>
                    <FormInput icon="carbon:email" type="email" placeholder="Adres e-mail" name="email" value={formData.email} event={handleInputChange}/>
                    <FormInput icon="carbon:password" type="password" placeholder="Hasło" name="password" value={formData.password} event={handleInputChange}/>
                    <FormInput icon="carbon:password" type="password" placeholder="Powtórz hasło" name="password2" value={formData.password2} event={handleInputChange}/>
                    <Button type="submit" text="Zarejestruj się" />
                </FormWrapper>
            </div>
        </div>
    )
}

export default RegisterForm