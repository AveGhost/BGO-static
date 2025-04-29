'use client'

import { createContext, useState } from "react";

interface HomeLayoutProviderProps {
    isGrid: boolean
    toggleGridLayout: () => void
    toggleListLayout: () => void
}

export const HomeLayoutContext = createContext<HomeLayoutProviderProps | null>(null);

const HomeLayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [isGrid, setIsGrid] = useState(true)

    const toggleGridLayout = () => {
        setIsGrid(true)
    }

    const toggleListLayout = () => {
        setIsGrid(false)
    }

    return (
        <HomeLayoutContext.Provider value={{ isGrid, toggleGridLayout, toggleListLayout }}>
            {children}
        </HomeLayoutContext.Provider>
    )
}

export default HomeLayoutProvider