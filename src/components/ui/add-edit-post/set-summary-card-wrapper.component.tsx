import SetRating from "./set-rating.component"

interface SetSummaryCardWrapperProps {
    children: React.ReactNode
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const SetSummaryCardWrapper = ({ children, score, setScore }: SetSummaryCardWrapperProps) => {
    return (
        <article className="py-4 px-8 bg-zinc-900 rounded-lg grid grid-cols-1 gap-4 md:grid-cols-[1fr_250px] items-center my-8">
            <div className="flex flex-col gap-4">
                {children}
            </div>
            <SetRating score={score} setScore={setScore} classes="w-30 h-30 text-5xl border-4" />
        </article>
    )
}

export default SetSummaryCardWrapper