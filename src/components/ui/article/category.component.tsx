import Link from "next/link"

const Category = ({category}: {category: string}) => {
    return (
        <Link href={`/${category}`} className="text-sm bg-zinc-600/40 text-zinc-300 py-1 px-2 rounded max-w-fit hover:bg-zinc-600/10 transition-colors duration-300">{category}</Link>
    )
}

export default Category