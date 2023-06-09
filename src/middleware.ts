import { NextRequest, NextResponse } from 'next/server'

const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  if (!token)
    return NextResponse.redirect(signInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/project/space-time; httpOnly max-age=20`,
      },
    })
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/project/space-time/memory/private',
    '/project/space-time/memory/new',
  ],
}
