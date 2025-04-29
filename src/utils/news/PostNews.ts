import api from "@/api/api";
import { PostFormData } from "@/types/PostFormData";


export default async function postNews(data: PostFormData) {
    try {
        const response = await api.post("/news",data);
        return response.data;
    } catch (error: any) {
        console.error(error);
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
}