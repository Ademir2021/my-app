import { TPerson } from '@/app/models/TPerson'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const person:TPerson =  await request.json()

  // Fake validação
  if (person.name === "") {
    return NextResponse.json(
      { error: 'Favor preencher todos os campos' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ success: true })

  response.cookies.set('token', 'abc123', {
    httpOnly: true,
    path: '/person',
    maxAge: 60 * 60 * 24, // 1 dia
  })
  console.log(person)
  return response
}