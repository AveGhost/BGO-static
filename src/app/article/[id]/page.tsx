import SummaryCard from "../../../components/ui/article/summary-card.component"
import AuthorCard from "../../../components/author/author-card.component"
import RatingTable from "../../../components/ui/article/rating-table.component"
import Hero from "@/components/ui/article/hero.component"
import Article from "@/components/article/single/article-wrapper.component"
import ArticleAction from "@/components/ui/article/article-action.component"
import newsData from '@/staticData/news.json'
import newsRichContent from '@/staticData/news_rich_contents.json'
import newsContent from '@/staticData/news_content.json'
import games from '@/staticData/games.json'

interface ArticleItemProps {
    content: string
    id: number
    type: string
    description: string
}

interface PageProps {
    params: Promise<{ id: string }>;
}

const SinglePage = async ({params}: PageProps) => {
    const { id } = await params;
    const news = newsData.content.find((item) => item.id === Number(id))!
    const game = games.find((item) => item.id === Number(news.game_id))!
    const content_id = newsContent.filter(item => item.news_id === Number(id)).map(item => item.content_id)
    const content = newsRichContent.filter(item => content_id.includes(item.id))
    return (
        <section className="py-6 container mx-auto px-4 xl:px-0">
            <Hero title={news.title} publishDate={news.publish_date} author={{firstName: 'Admin'}} image={news.thumbnail} />
            <div className="xl:grid xl:grid-cols-[180px_1fr]">
                {content.map((item: ArticleItemProps) => {
                    return <Article key={item.id} item={item} />
                })}
                <div className="col-2 max-w-[800px]">
                    <SummaryCard rate={news.score} gameTitle={game.title} summaryContent={news.summary_content} summaryTitle={news.summary_title} />
                    <RatingTable pluses={news.plus_list} minuses={news.minus_list} />
                    <div className="bg-zinc-800 rounded-lg">
                        <AuthorCard classes="grid grid-cols-[auto_1fr]" avatar="/avatar.png" name={"Admin"} role={"Administrator"} description="Specjalista od Groznawstwa, który nie stroni od swoich ulubionych tytułów. Rzadko się do tego przyznaje, ale ma prawie 2000 godzin na liczniku w Path of Exile. Pozostałe dwa tytuły w jego świętej trójcy to Assassin’s Creed: Origins oraz Final Fantasy XV. Miłośnik RPG i hack’n’slash, dla którego najważniejsza jest dobra historia, a ściany tekstu są plusem. Po godzinach pisze do szuflady, pije niepokojąco duże ilości kawy i często wraca do swoich ulubionych seriali (o Hannibalu prawdopodobnie gadałby nawet w trumnie)."/>
                    </div>
                </div>
            </div>
            <ArticleAction pageId={Number(id)} />
        </section>
    )
}

export default SinglePage