import { TUser } from '@/app/models/TUser'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const user:TUser =  await request.json()

  // Fake validação
  if (user.login !== 'admin@email.com' || user.password !== '123') {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ success: true })

  response.cookies.set('token', 'abc123', {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 dia
  })

  return response
}