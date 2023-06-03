import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', { code })

  const { token } = registerResponse.data

  const redirectURL =
    redirectTo ?? new URL('/project/nlw-space-time', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 3 // 3 days

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/project/nlw-space-time; max-age=${cookieExpiresInSeconds}`,
    },
  })
}