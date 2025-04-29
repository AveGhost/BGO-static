import Rating from "./rating.component"

interface SummaryCardProps {
    rate: number
    gameTitle: string
    summaryContent: string
    summaryTitle: string
}

const SummaryCard = ({rate, gameTitle, summaryContent, summaryTitle}: SummaryCardProps) => {
    return (
        <article className="py-4 px-8 bg-zinc-900 rounded-lg grid grid-cols-1 gap-4 md:grid-cols-[1fr_250px] items-center my-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-sm">{gameTitle}</h2>
                <h3 className="md:text-3xl text-2xl font-medium">{summaryTitle}</h3>
                <p className="text-zinc-300 text-sm">{summaryContent}</p>
            </div>
            <Rating rate={rate} classes="w-30 h-30 text-5xl border-4" />
        </article>
    )
}

export default SummaryCard