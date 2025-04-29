import Image from "next/image"

interface ImageReviewProps {
    image: string
    quote?: string
}

const ImageReview = ({image,quote}: ImageReviewProps) => {
    return (
        <div className="grid gap-4 xl:gap-0 xl:grid-cols-[180px_1fr] py-6 col-span-2">
            <span className="text-[14px] pr-3 text-zinc-300 place-content-end row-2 xl:row-auto">{quote}</span>
            <div className="lg:w-[840px] md:w-[720px] w-full h-[450px] relative">
                <Image
                    src={image}
                    alt="review"
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    )
}

export default ImageReview