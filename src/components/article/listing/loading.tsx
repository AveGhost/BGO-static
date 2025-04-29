import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    const isGrid = true
    const loadingItems = Array.from({length: 4})
    return (
        <div className={`grid ${isGrid ? "xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" : "grid-cols-1"} gap-8 pb-8 px-4 container mx-auto`}>
            {loadingItems.map((_, index) => (
                <div key={index} className="flex flex-col gap-4 w-full">
                    <Skeleton className="w-full h-[250px] rounded-lg" />
                    <Skeleton className="w-full h-4 rounded-lg" />
                    <Skeleton className="w-full h-10 rounded-lg" />
                    <div className="flex justify-between items-center">
                        <Skeleton className="w-[80px] h-5 mt-auto rounded-lg" />
                        <Skeleton className="w-[80px] h-5 mt-auto rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Loading