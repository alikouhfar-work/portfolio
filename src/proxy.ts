import { DEFAULT_LOCALE, isLocale, LOCALES } from '@/config/site'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const acceptLang = request.headers.get('accept-language')
  const preferred = acceptLang?.split(',')[0].split('-')[0] ?? ''
  const locale = isLocale(preferred) ? preferred : DEFAULT_LOCALE

  const pathnameHasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))

  if (pathnameHasLocale) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
