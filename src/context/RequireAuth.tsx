'use client'

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthProvider";
import { Roles } from "@/types/RoleTypes";

interface RequireAuthProps {
    children: React.ReactNode;
    role?: Roles.ADMINISTRATOR | Roles.EDITOR
}

const RequireAuth = ({ children, role }: RequireAuthProps) => {
    const {user} = useContext(AuthContext)!
    const router = useRouter();
    useEffect(() => {
        if (!user) {
            router.replace("/login");
        } else if (role && user.user_role !== role) {
            router.replace("/unauthorized");
        }
    }, [user, role]);

    if (!user) return null;
    if (role && user.user_role !== role) return null;

    return <>{children}</>;
};

export default RequireAuth;
