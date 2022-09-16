import { Cookies } from "react-cookie";
import { IUser, Login, Register, ServerResponse } from "../types/user";
import { SERVER_URL } from "../types/variables";



export const sendAuthRequset = async (requsetType: 'login' | 'register', data: Register | Login) => {
    const url = requsetType === 'login' ? SERVER_URL + 'auth/login' : SERVER_URL + 'users'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

export const requsetCurrentUser = async (token: string) => {
    const url = SERVER_URL + 'user'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return await response.json()
}

export const setWithExpiry = (key: string, value: any, exp: number) => {
    const now = new Date();
    const item = {
        data: value,
        expiry: now.getTime() + exp
    }
    localStorage.setItem(key, JSON.stringify(item));
}

export const getWithExpiry = (key: string) => {
    const itemString = localStorage.getItem(key)
    if (!itemString) return null

    const item = JSON.parse(itemString)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.data
}

export const setCookie = (key: string, value: any, maxAge: number): void => {
    const cookie = new Cookies();
    const cookieOptions = {
        path: "/",
        maxAge: maxAge,
        secure: true,
        sameSite: true
    }
    cookie.set(key, value, cookieOptions)
}
export const getCookie = (key: string): any => {
    const cookie = new Cookies();
    return cookie.get(key);
}
export const removeCookie = (key: string): void => {
    const cookie = new Cookies();
    cookie.remove(key);
}



export const checkIfLoggedin = async (token: string): Promise<ServerResponse<IUser>> => {
    const url = SERVER_URL + 'user';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const result = await response.json();
    return result
}