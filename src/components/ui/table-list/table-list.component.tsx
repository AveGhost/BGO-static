import Link from "next/link"
interface TableListProps {
    elements: {
        id: number;
        cover_image: string;
        description: string;
        platform: string;
        title: string;
    }[];
}

const TableList = ({elements}: TableListProps) => {
    return (
        <ul className="flex flex-wrap md:flex-col gap-4 mt-4 px-2">
            {elements.map((element) => 
            <li className="text-zinc-400 text-sm md:text-base cursor-pointer hover:text-white transition-colors duration-300" key={element.id}>
                <Link href={`/dashboard/add-post?id=${element.id}&title=${element.title}`}>{element.title}</Link>
            </li>)}
        </ul>
    )
}

export default TableList