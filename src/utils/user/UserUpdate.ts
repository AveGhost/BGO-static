import api from "@/api/api";
import { User } from "@/types/UserTypes";


export default async function editUser(data: Partial<User>) {
    try {
        const response = await api.put(`/auth/me`,data);
        return response.data;
    } catch (error: any) {
        console.error(error);
        
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
}