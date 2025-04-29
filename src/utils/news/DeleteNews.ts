import api from "@/api/api";
import { AxiosError } from "axios";

export default async function deleteNews({id}: {id: number}) {
    try {
        const response = await api.delete(`/news/${id}`, {});
        return response.data;
    } catch (error: any) {
        console.error(error);
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
}