'use client'

import SearchInput from "../search-input/search-input.component"
import { useState } from "react"

interface SearchBoxProps {
    event: (title: string, id: number) => void
}
const SearchBox = ({event}: SearchBoxProps) => {
    const [results, setResults] = useState<any>({content: [], page: {size: 0, totalElements: 0, totalPages: 0, number: 0}})

    const handleSearch = (data: any) => {
        setResults(data)
    }

    return (
        <div className="relative">
            <SearchInput onSearchResults={handleSearch} />
            {results.content.length > 0 &&
            <ul className={`absolute bg-zinc-600 rounded-lg w-full top-10 right-0 left-0 flex flex-col gap-2 transition-all duration-300 z-10`}>
                 {results.content.map((result: any, index: number) => (
                    <li key={index} className={`hover:bg-zinc-500 px-4 py-2 w-full cursor-pointer transition-colors duration-300 text-zinc-400`} onClick={() => event(result.title, result.id)}>
                        {result.title}
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default SearchBox