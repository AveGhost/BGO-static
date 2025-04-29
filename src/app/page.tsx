import ListingWrapper from "@/components/article/listing/listing-wrapper";
import HomeLayoutProvider from "../context/HomeLayoutProvider";
import { newsTypes } from "@/types/NewsTypes";
import newsData from '@/staticData/news.json'

interface responseTypes {
    content: newsTypes[]
}

export default async function Home() {
  const news: responseTypes = newsData
  return (
    <HomeLayoutProvider>
      <ListingWrapper posts={news} />
    </HomeLayoutProvider>
  )
}
