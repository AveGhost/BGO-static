import api from "@/api/api";

export default async function getNews({id}: {id: number}) {
    try {
        const response = await api.get(`/news/${id}`, {});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}