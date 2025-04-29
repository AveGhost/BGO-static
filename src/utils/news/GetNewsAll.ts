import api from "@/api/api";

export default async function getNewsAll({page}: {page?: number,} = {}) {
    try {
        const response = await api.get(`/news`, {
            params:{
                page: page,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}