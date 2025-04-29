import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <section className="py-6 container mx-auto">
            <div className="grid grid-cols-[180px_1fr]">
                <div className="col-2">
                    <Skeleton className="w-full h-14 mb-2 max-w-[800px] font-medium"/>
                    <div className="flex flex-col gap-4 text-sm">
                        <Skeleton className="w-[80px] h-5"/>
                        <Skeleton className="w-[80px] h-5"/>
                    </div>
                </div>
                <Skeleton className="relative w-[1200px] h-[650px] my-4 col-2"/>
            </div>
            <div className="grid grid-cols-[180px_1fr]">
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="col-2 flex flex-col gap-4">
                        <Skeleton className="w-full h-10 py-4 rounded-lg"/>
                        <Skeleton className="w-full h-32 rounded-lg"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Loading