'use client'

import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";


interface InfoContextProps {
    isInfoAccepted: boolean
    setIsInfoAccepted: React.Dispatch<React.SetStateAction<boolean>>
}

export const InfoContext = createContext<InfoContextProps | null>(null);

const InfoProvider = ({ children }: { children: React.ReactNode }) => {
    const [isInfoAccepted, setIsInfoAccepted] = useLocalStorageState('isInfoAccepted', { defaultValue: false })


    return (
        <InfoContext.Provider value={{ isInfoAccepted, setIsInfoAccepted }}>
            {children}
        </InfoContext.Provider>
    )
}

export default InfoProvider