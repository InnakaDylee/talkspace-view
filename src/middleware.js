import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(request) {
  const authToken = request.cookies.get('token');

    try {
      // console.log(authToken)
      const decodedAuthToken = jwtDecode(authToken.value);
      // console.log(decodedAuthToken)
      if(!decodedAuthToken) {
        if (request.nextUrl.pathname.startsWith('/home')) {
          return NextResponse.redirect(new URL('/login', request.url));
        }
      }
      // You can use the decodedAuthToken for further checks or logging
      // console.log(decodedAuthToken);
    } catch (error) {
      console.error('Failed to decode authToken:', error);
      // Optionally, you can redirect or handle the error
      return NextResponse.redirect(new URL('/login', request.url));
    }

  // Continue to /home if the user is logged in and the token is valid
  return NextResponse.next();
}

// Apply the middleware to the /home route
export const config = {
  matcher: ['/home', '/chat', '/profile'],
};
