import api from "@/api/api";

export default async function getSearchNews({page, author_id, title}: {page?: number, author_id?: number, title?: string} = {}) {
    try {
        const response = await api.get(`/news/search`, {
            params:{
                page: page,
                author_id: author_id,
                title: title
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}