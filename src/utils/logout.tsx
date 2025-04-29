'use client'

import { useContext } from "react"
import { AuthContext } from "@/context/AuthProvider"
import { useRouter } from "next/navigation"

export const Logout = () => {
    const {setToken, setUser} = useContext(AuthContext)!
    const router = useRouter()
    return () => {
        setToken(null)
        setUser(null)
        router.refresh()
    }
}