import api from "@/api/api";

interface LoginData {
    email: string;
    password: string;
}

export default async function handleLogin(data: LoginData){
    try {
        const response = await api.post("/auth/login", data);
        return response.data.token
    } catch (error: any) {
        console.error(error);
        
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
};
