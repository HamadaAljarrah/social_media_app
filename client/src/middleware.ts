import { NextResponse, } from 'next/server'
import type { NextRequest } from 'next/server'

export interface TypedNextRequest extends NextRequest {
    token?: string
}

export function middleware(request: TypedNextRequest, res: NextResponse) {
    const token = request.cookies.get('token');
    console.log(token);
    
    request.token = token;
    if (token === undefined) {
        return NextResponse.redirect(new URL('/, request.url'))

    }
    return NextResponse.next();
}

export const config = {
    matcher: '/'
}