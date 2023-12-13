import type { NextRequest,NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log("masuk middleware dashboard api")
  return NextResponse.json({ message: 'Auth required' }, { status: 401 })
  if (request.nextUrl.pathname.startsWith('/about')) {
    // This logic is only applied to /about
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}