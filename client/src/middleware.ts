import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'



export function middleware(req: NextRequest, res: NextResponse) {

    if (req.nextUrl.pathname.startsWith('/user') && req.cookies.get('token') === undefined) {
        return NextResponse.redirect(new URL('/auth/login', req.url))

    }
    return NextResponse.next();

}

