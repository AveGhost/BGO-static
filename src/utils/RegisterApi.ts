import api from "@/api/api";

interface RegisterData {
    email: string;
    password: string;
    password2: string;
    first_name: string;
    last_name: string;
    username: string;
}

export default async function handleRegister(data: RegisterData): Promise<string | null> {
    try {
        const response = await api.post("/auth/register", data);
        return null;
    } catch (error: any) {
        console.error(error);
        
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
};
