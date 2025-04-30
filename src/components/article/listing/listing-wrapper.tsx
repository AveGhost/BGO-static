'use client'

import ArticleCard from "@/components/ui/article/listing-article-card.component"
import LayoutChanger from "@/components/ui/article/layout-changer.component"
import { newsTypes } from "@/types/NewsTypes"
import { useContext } from "react"
import { HomeLayoutContext } from "@/context/HomeLayoutProvider"

interface responseTypes {
  content: newsTypes[]
}

const ListingWrapper = ({ posts }: { posts: responseTypes }) => {
  const { isGrid } = useContext(HomeLayoutContext)!
  return (
    <>
      <div className={`grid ${isGrid ? "xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" : "grid-cols-1"} gap-8 py-8 px-4 container mx-auto`}>
        <LayoutChanger />
        {posts && posts.content.map((item) => (
          <ArticleCard
            key={item.id}
            href={`/article/${item.id}`}
            rate={item.score}
            isGrid={isGrid}
            image={item.thumbnail}
            title={item.title}
            description={item.teaser}
            author={{ name: 'Admin', date: item.publish_date }}
          />
        ))}
      </div>
    </>
  )
}

export default ListingWrapper
