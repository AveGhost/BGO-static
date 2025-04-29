import ArticleContent from "@/components/ui/article/article-content.component"
import ArticleTitle from "@/components/ui/article/article-title.component"
import ImageReview from "@/components/ui/article/image-article.component"

interface ArticleWrapperProps {
    item: {
        content: string
        id: number
        type: string
        description: string
    }
}

enum ArticleTypes {
    HEADING = 'HEADING',
    PARAGRAPH = 'PARAGRAPH',
    IMAGE = 'IMAGE'
}

const Article= ({item}: ArticleWrapperProps) => {
    return (
        <article key={item.id} className="contents">
            {item.type === ArticleTypes.HEADING || item.type === ArticleTypes.PARAGRAPH ?
            <div className="col-2 max-w-[800px]" key={item.id}>
                {item.type === ArticleTypes.HEADING && <ArticleTitle title={item.content} />}
                {item.type === ArticleTypes.PARAGRAPH && <ArticleContent text={item.content} />}
            </div>: <></>}
            {item.type === ArticleTypes.IMAGE ? <ImageReview image={item.content} quote={item.description} key={item.id} /> : <></>}
        </article>
    )
}

export default Article