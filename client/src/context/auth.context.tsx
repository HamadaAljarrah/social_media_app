import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from "react";
import { useRefresher } from "../hooks/useRefresh";
import { useUser } from "../hooks/useUser";
import { sendAuthRequset } from "../services/auth";
import Cookie from "../services/cookie"
import { Login } from "../types/user";


type AuthState = {
    currentUser?: any;
    login: (data: Login) => Promise<any>;
    logout: () => void;
}

const authContext = createContext<AuthState>({} as AuthState)

const useAuthProvider = () => {

    const { user } = useUser();
    const { navigate } = useRefresher();
    const [currentUser, setCurrentUser] = useState<any>();

    useEffect(() => {
        setCurrentUser(user);
    }, [user])

    const login = async (data: Login) => {
        const response = await sendAuthRequset('login', data);
        if (response.success) {
            const token = response.data.token;
            const oneHour = 1000 * 60 * 60;
            Cookie.set('token', token, oneHour);
            setCurrentUser(response.data.user)
            navigate("/user/profile")
        }
        return response
    };

    const logout = () => {
        Cookie.remove("token");
        setCurrentUser(undefined);
        navigate("/auth/login")
    };

    return { currentUser, login, logout };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const value = useAuthProvider();

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}
export const useAuth = () => useContext(authContext)
