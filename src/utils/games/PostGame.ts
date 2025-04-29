import api from "@/api/api";

interface GameData {
    title: string;
    coverImage: string;
    description: string;
    platform: string;
    categories: string[];
}
export default async function postGame(data: GameData) {
    try {
        const response = await api.post("/games",{
            title: data.title,
            coverImage: data.coverImage,
            description: data.description,
            platform: data.platform.toUpperCase(),
            categories: data.categories.map((category) => category.toUpperCase()),
        });
        return response.data
    } catch (error: any) {
        console.error(error);
        
        const message = error?.response?.data?.message || "Nieznany błąd"
        throw new Error(message)
    }
}