import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Login } from "../pages/auth/login";
import { Register } from "../pages/auth/register";
import sendRequset from "../services/auth";
import Cookie from "../services/cookie"
import { IUser, ServerResponse } from "../types/user";
import Router from "next/router";


type AuthState = {
    currentUser?: IUser;
    // isLoading: boolean;
    // isError: any;
    login: (data: Login) => Promise<ServerResponse<any>>;
    signUp: (data: Register) => Promise<ServerResponse<any>>;
    logout: () => void;

}

const authContext = createContext<AuthState>({} as AuthState)

const useAuthProvider = () => {

    const { data: user } = useFetch("/user", Cookie.get('token'));
    const [currentUser, setCurrentUser] = useState<IUser>();

    useEffect(() => { setCurrentUser(user); }, [user])



    const login = async (data: Login) => {

        const response = await sendRequset.POST('/auth/login', data);
        if (response.success) {
            const token = response.data.token;
            Cookie.set('token', token, 60 * 60, '/');
            setCurrentUser(response.data.user)
            Router.push('/user/profile')
        }
        return response
    };



    const logout = () => {
        Cookie.remove('token', '/');
        setCurrentUser(undefined);
        Router.push("/auth/login")
    };



    const signUp = async (data: Register) => {
        const response = await sendRequset.POST('users', data);
        if (response.success) Router.push("/auth/login")
        return response;
    }



    return { currentUser, login, logout, signUp };
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
