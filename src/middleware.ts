import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value

  const pathname = request.nextUrl.pathname

  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup')
  const isProtectedPage =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/profile') ||
    pathname.startsWith('/vault')
  if (!accessToken && isAuthPage) {
    return NextResponse.next()
  }

  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!accessToken && isProtectedPage) {
    return NextResponse.redirect(new URL('/signup', request.url))
  }

  return NextResponse.next()
}
