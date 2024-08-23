import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(request) {
  const authToken = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  if (pathname === '/doctor/login') {
    return NextResponse.next();
  }
  
  if (!authToken) {
    // Redirect to login if no token is present
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decodedAuthToken = jwtDecode(authToken.value);
    const userRole = decodedAuthToken.role;

    // Define permitted routes for each role
    const userRoutes = ['/home', '/profile', '/talkbot', '/chat-doctor'];
    const doctorRoutes = ['/doctor', '/doctor/profile'];

    if (userRole === 'user' && !userRoutes.includes(pathname)) {
      // Redirect user roles from routes they are not permitted to access
      return NextResponse.redirect(new URL('/home', request.url));
    }

    if (userRole === 'doctor' && !doctorRoutes.includes(pathname)) {
      // Redirect doctor roles from routes they are not permitted to access
      return NextResponse.redirect(new URL('/doctor', request.url));
    }

    // If the token is valid and the role matches, allow the request
    return NextResponse.next();

  } catch (error) {
    console.error('Failed to decode authToken:', error);
    // Optionally, you can redirect or handle the error
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Apply the middleware to the specified routes
export const config = {
  matcher: ['/home', '/profile', '/talkbot', '/chat-doctor', '/doctor/login' ,'/doctor/:path*'],
};
