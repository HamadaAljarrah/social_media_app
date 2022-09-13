import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { IUser } from "../types/user";



type Props = {
    children: ReactNode
}
type AuthState = {
    isAuthenticated: boolean,
    setIsAuthenticated: any
}

const authContext = createContext<AuthState>({} as AuthState)

export const AuthProvider = ({ children }: Props) => {
    const { user } = useUser();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        if (user != null) setIsAuthenticated(true);
        if (user == null) setIsAuthenticated(false);
    }, [])

    const value = { isAuthenticated, setIsAuthenticated }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)