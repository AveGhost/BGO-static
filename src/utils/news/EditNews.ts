import api from "@/api/api";
import { PostFormData } from "@/types/PostFormData";


export default async function editNews(data: Partial<PostFormData>, id: number) {
    try {
        const response = await api.put(`/news/${id}`,data);
        return response.data;
    } catch (error: any) {
        console.error(error);
        
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
}