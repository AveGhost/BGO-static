import HomeLayoutProvider from "@/context/HomeLayoutProvider"
import ListingWrapper from "@/components/article/listing/listing-wrapper"
import { newsTypes } from "@/types/NewsTypes"
import newsData from '@/staticData/news.json'

interface responseTypes {
    content: newsTypes[]
}
const MyPost = async () => {
    const news: responseTypes = newsData
    return (
      <HomeLayoutProvider>
        <h1 className="text-center text-3xl mt-6">Moje wpisy</h1>
        <ListingWrapper posts={news} />
      </HomeLayoutProvider>
    )
}

export default MyPost