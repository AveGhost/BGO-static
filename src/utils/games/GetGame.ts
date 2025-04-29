import api from "@/api/api";

export default async function getGames() {
    try {
        const response = await api.get('/games', {});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}