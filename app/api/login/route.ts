import { TUser } from '@/app/models/TUser'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(request: Request) {

  const user:TUser =  await request.json()

  // Fake validação
  if (user.login !== 'admin@email.com' || user.password !== '123') {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    )
  }

  // Dados que irão para dentro do token
  const payload = {
    id:1,
    login: user.login,
    role:user.role
  }

  // Cria token
  const token = jwt.sign(payload, process.env.JWT_SECRET! )

  const response = NextResponse.json({ success: true })

  response.cookies.set("token", token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 dia
  })
  
  return response
}