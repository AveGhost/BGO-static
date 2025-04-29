import HomeLayoutProvider from "@/context/HomeLayoutProvider"
import ListingWrapper from "@/components/article/listing/listing-wrapper"
import { newsTypes } from "@/types/NewsTypes"
import getSearchNews from "@/utils/news/SearchNews"
import RequireAuth from "@/context/RequireAuth"

interface responseTypes {
    content: newsTypes[]
}
const MyPost = async () => {
    const news: responseTypes = await getSearchNews({author_id: 2})
    return (
        <RequireAuth>
            <HomeLayoutProvider>
                <h1 className="text-center text-3xl mt-6">Moje wpisy</h1>
                <ListingWrapper posts={news} page={1} />
            </HomeLayoutProvider>
        </RequireAuth>
    )
}

export default MyPost