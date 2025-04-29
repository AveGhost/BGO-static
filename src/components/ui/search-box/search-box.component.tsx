'use client'

import SearchInput from "../search-input/search-input.component"

const SearchBox = () => {

    return (
        <div className="relative">
            <SearchInput onSearchResults={() => {}} />
        </div>
    )
}

export default SearchBox