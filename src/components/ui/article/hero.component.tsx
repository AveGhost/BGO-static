import Image from "next/image"
import Date from "@/components/ui/date/date.component"

interface HeroProps {
    title: string
    publishDate: string
    author: {
        firstName: string
        lastName?: string
    }
    image: string
}
const Hero = ({title, publishDate, author, image}: HeroProps) => {
    return (
        <div className="xl:grid xl:grid-cols-[180px_1fr]">
            <div className="col-2">
                <h1 className="md:text-6xl text-3xl mb-2 max-w-[800px] font-medium">{title}</h1>
                <div className="flex flex-col text-sm">
                    <span className="text-zinc-400">Opublikowano: <strong><Date date={publishDate} /></strong></span>
                    <span className="text-zinc-400">Autor: <strong>{author.firstName} {author.lastName && author.lastName}</strong></span>
                </div>
            </div>
            <div className="relative xl:w-[1200px] lg:w-[900px] md:w-[700px] w-[100%] h-[400px] md:h-[650px] my-4 col-2">
                <Image
                    src={image}
                    alt="placeholder"
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    )
}

export default Hero