'use client'

import { createContext, useState, } from "react";
import users from "@/staticData/users.json";
import { User } from "@/types/UserTypes";

interface AuthContextProps {
    user: User
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user] = useState(users[0]);


    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider