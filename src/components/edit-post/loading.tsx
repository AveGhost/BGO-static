import { Skeleton } from "../ui/skeleton"

const Loading = () => {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton className="w-full h-10"/>
            <Skeleton className="w-full h-[650px]"/>
            {Array.from({length: 4}).map((_, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <Skeleton className="w-full h-10"/>
                    <Skeleton className="w-full h-40"/>
                </div>
            ))}
        </div>
    )
}

export default Loading