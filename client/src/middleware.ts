import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'



export function middleware(req: NextRequest, res: NextResponse) {

    if (req.nextUrl.pathname.startsWith('/user') && req.cookies.get('token') === undefined) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }


    const isAuth = req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/auth/login' || req.nextUrl.pathname=== '/auth/register' 
    if ( isAuth && req.cookies.get('token') !== undefined) {
        return NextResponse.redirect(new URL('/user/profile', req.url))
    }


    return NextResponse.next();

}

