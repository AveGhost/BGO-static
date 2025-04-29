'use client'

import FormInput from "../form/form-input.component"
import { searchGames } from "@/utils/games/SearchGames"
import { useState, useEffect } from "react"

interface SearchInputProps {
    onSearchResults: (data: any) => void
    placeholder?: string
}

const SearchInput = ({ onSearchResults, placeholder}: SearchInputProps) => {
    const [search, setSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [debounceResults, setDebounceResults] = useState(search)

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const handleSearch = setTimeout(() => {
            setDebounceResults(search)
        },500)

        return () => {
            clearTimeout(handleSearch)
        }
    },[search])

    useEffect(() => {
        const fetchSearch = async () => {
            const data = await searchGames({ title: debounceResults})
            setIsSearching(false)
            onSearchResults(data)
        }

        if(debounceResults.length >= 3) {
            setIsSearching(true)
            fetchSearch()
        } else {
            onSearchResults({content: [], page: {size: 0, totalElements: 0, totalPages: 0, number: 0}})
            setIsSearching(false)
        }
    },[debounceResults])

    return (
        <>
            <FormInput
                type="text"
                name="search"
                placeholder={placeholder ? placeholder : "Wyszukaj..."}
                value={search}
                icon={isSearching ? "codex:loader" : "ic:round-search"}
                event={searchHandler}
            />
        </>
    )
}

export default SearchInput