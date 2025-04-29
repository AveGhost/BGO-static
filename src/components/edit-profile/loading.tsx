import { Skeleton } from "../ui/skeleton"

const Loading = () => {
    return (
        <div className="form w-full max-w-[850px]">
            <div className="flex flex-col gap-4 justify-center items-center h-full p-4">
                    <Skeleton className="w-full h-[250px] rounded-lg" />
                    <Skeleton className="w-full h-4 rounded-lg" />
                    <Skeleton className="w-full h-4 rounded-lg" />
                    <Skeleton className="w-full h-4 rounded-lg" />
                    <Skeleton className="w-full h-10 rounded-lg" />
            </div>
        </div>
    )
}

export default Loading