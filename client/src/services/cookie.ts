import { Cookies } from "react-cookie"

class Cookie {
    private cookie: any;

    constructor() {
        this.cookie = new Cookies();
    }

    public set(key: string, value: any, maxAge: number): void {
        const cookieOptions = {
            // path: "/",
            maxAge: maxAge,
            // secure: true,
            // sameSite: true
        }
        this.cookie.set(key, value, cookieOptions)
    }

    public get(key: string): any {
        return this.cookie.get(key);
    }

    public remove(key: string): void {
        this.cookie.remove(key);
    }
}

export default new Cookie