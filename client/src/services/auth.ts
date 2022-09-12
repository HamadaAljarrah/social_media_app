import { Login, Register } from "../types/user";
import { SERVER_URL } from "../types/variables";



export const sendAuthRequset = async (requsetType: 'login' | 'register', data: Register | Login)=>{
    
    const url = requsetType === 'login' ? SERVER_URL + 'auth/login': SERVER_URL + 'users'
    console.log(url);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

export const setWithExpiry = (key: string, value:any, exp: number)=>{
    const now = new Date();
    const item = {
        data: value,
        expiry: now.getTime() + exp
    } 
    localStorage.setItem(key, JSON.stringify(item));
}

export const getWithExpiry = (key: string)=>{
    const itemString = localStorage.getItem(key)
    if (!itemString) return null

    const item = JSON.parse(itemString)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}