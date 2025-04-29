'use client'

import FormInput from "../form/form-input.component"
import { useState, useEffect } from "react"

interface SearchInputProps {
    onSearchResults: () => void
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
            setIsSearching(false)
        }

        if(debounceResults.length >= 3) {
            setIsSearching(true)
            fetchSearch()
        } else {
            onSearchResults()
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