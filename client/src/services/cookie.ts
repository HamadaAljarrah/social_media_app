import { Cookies } from "react-cookie"

class Cookie {
    private cookie: any;

    constructor() {
        this.cookie = new Cookies();
    }

    public set(key: string, value: any, maxAge: number, path?: string): void {
        const cookieOptions = {
            path: path,
            maxAge: maxAge,
            // secure: true,
            // sameSite: true
        }
        this.cookie.set(key, value, cookieOptions)
    }

    public get(key: string): any {

        return this.cookie.get(key);
    }

    public remove(key: string, path?: string): void {
        const cookieOptions = {
            path: path,

        }
        this.cookie.remove(key, cookieOptions);
    }
}

export default new Cookie