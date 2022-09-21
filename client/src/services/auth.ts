import { IUser, ServerResponse } from "../types/user";
import { SERVER_URL } from "../types/variables";
import Cookie from "../services/cookie"

type Method = 'GET' | 'PUT' | 'POST' | 'DELETE'

class sendRequest {


    public async GET(endPoint: string, token?: string): Promise<ServerResponse<any>> {

        return await this.send(endPoint, 'GET', token);
    }

    public async POST(endPoint: string, data?: any, token?: string): Promise<ServerResponse<any>> {

        return await this.send(endPoint, 'POST', token, data);
    }

    public async PUT(endPoint: string, data?: any, token?: string): Promise<ServerResponse<any>> {

        return await this.send(endPoint, 'PUT', token, data);
    }

    public async DELETE(endPoint: string, data?: any, token?: string): Promise<ServerResponse<any>> {

        return await this.send(endPoint, 'DELETE', token, data);
    }

    private async send(endPoint: string, method: Method, token?: string, data?: any): Promise<ServerResponse<any>> {
        const response = await fetch(SERVER_URL + endPoint, {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    }
}
export default new sendRequest;


// export const checkIfLoggedin = async (token: string): Promise<ServerResponse<IUser>> => {
//     const url = SERVER_URL + 'user';
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//     })
//     const result = await response.json();
//     return result
// }


// export const GET = async (endPoint: string, token?: string) => {
//     const response = await fetch(SERVER_URL + endPoint, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//     })
//     return await response.json()
// }


// export const sendAuthRequset = async (requsetType: 'login' | 'register', data: Register | Login) => {
//     const url = requsetType === 'login' ? SERVER_URL + 'auth/login' : SERVER_URL + 'users'
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     return await response.json()
// }

// export const requsetCurrentUser = async (token: string) => {
//     const url = SERVER_URL + 'user'
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//     })
//     return await response.json()
// }




// export const setWithExpiry = (key: string, value: any, exp: number) => {
//     const now = new Date();
//     const item = {
//         data: value,
//         expiry: now.getTime() + exp
//     }
//     localStorage.setItem(key, JSON.stringify(item));
// }

// export const getWithExpiry = (key: string) => {
//     const itemString = localStorage.getItem(key)
//     if (!itemString) return null

//     const item = JSON.parse(itemString)
//     const now = new Date()
//     if (now.getTime() > item.expiry) {
//         localStorage.removeItem(key)
//         return null
//     }
//     return item.data
// }

// export const setCookie = (key: string, value: any, maxAge: number): void => {
//     const cookie = new Cookies();
//     const cookieOptions = {
//         path: "/",
//         maxAge: maxAge,
//         secure: true,
//         sameSite: true
//     }
//     cookie.set(key, value, cookieOptions)
// }
// export const getCookie = (key: string): any => {
//     const cookie = new Cookies();
//     return cookie.get(key);
// }
// export const removeCookie = (key: string): void => {
//     const cookie = new Cookies();
//     cookie.remove(key);
// }



