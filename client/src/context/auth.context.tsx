import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useRefresher } from "../hooks/useRefresh";
import sendRequset from "../services/auth";
import Cookie from "../services/cookie"
import { IUser, Login, Register, ServerResponse } from "../types/user";


type AuthState = {
    currentUser?: IUser;
    isLoading: boolean,
    login: (data: Login) => Promise<ServerResponse<any>>;
    signUp: (data: Register) => Promise<ServerResponse<any>>;
    logout: () => void;
    isError: any;

}

const authContext = createContext<AuthState>({} as AuthState)

const useAuthProvider = () => {

    const { data: user, isLoading, isError } = useFetch("user");

    const { navigate } = useRefresher();
    const [currentUser, setCurrentUser] = useState<any>();
    useEffect(() => { setCurrentUser(user); }, [user, isLoading])

    const login = async (data: Login) => {
        const response = await sendRequset.POST('auth/login', data);
        if (response.success) {
            const token = response.data.token;
            Cookie.set('token', token, 60 * 60);
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

    const signUp = async (data: Register) => {
        const response = await sendRequset.POST('users', data);
        if (response.success) navigate("/auth/login")
        return response;
    }

    return { currentUser, login, logout, signUp, isLoading, isError };
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
