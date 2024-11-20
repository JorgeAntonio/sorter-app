import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from './lib/encript';
import { app_name } from './lib/constants';

// 1. Specify protected and public routes
const protectedRoutes = ['/admin']; // Las subrutas también serán protegidas automáticamente
const publicRoutes = ['/sign-in', '/signup', '/'];

export default async function middleware(req: NextRequest) {
  // 2. Check the current route
  const path = req.nextUrl.pathname;

  // Verifica si la ruta actual comienza con alguna de las rutas protegidas
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get(`${app_name}_session`)?.value;
  const session = await decrypt(cookie);

  // 4. Redirect to /sign-in if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }

  // 5. Redirect to /admin if the user is authenticated and visiting a public route
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/admin')
  ) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
