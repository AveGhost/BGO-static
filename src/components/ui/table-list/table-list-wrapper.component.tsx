'use client'

import SearchInput from "../search-input/search-input.component"
import TableList from "./table-list.component"
import games from "@/staticData/games.json"

const TableListWrapper = () => {

    return (
        <div className="border-1 border-zinc-600 row-1 mt-6 md:mt-0 w-full md:row-auto p-4 rounded-lg xl:absolute left-0 md:max-w-[350px]">
            <h2 className="text-2xl mb-4">Ostatnio dodane gry</h2>
            <SearchInput onSearchResults={() => {}}  />
            <TableList elements={games} />
        </div>
    )
}

export default TableListWrapper