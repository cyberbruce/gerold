import { NextResponse } from 'next/server';


export function middleware(request: Request) {
    // Example middleware logic
    console.log('Middleware executed for:', request.url);

    // You can modify the request or response here if needed
    // For example, you can add headers or redirect
    const response = NextResponse.next();
    response.headers.set('X-Custom-Header', 'MyValue');

    return response;
}