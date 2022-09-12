import React, { createContext, ReactNode, useContext, useState } from 'react'

interface IAuth {
    isAuthenticated: boolean;
    setIsAuthticated: any
}
type Props = {
    children: ReactNode
}
const authContext = createContext<IAuth>({} as IAuth)


export const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setIsAuthticated] = useState<boolean>(false);

    return (
        <authContext.Provider value={{ isAuthenticated, setIsAuthticated }}>{children}</authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)