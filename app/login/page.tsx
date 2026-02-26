'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TUser } from '../models/TUser'
import LoginForm from '../components/login/LoginForm'

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState<TUser>({
    login: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(values => ({ ...values, [name]: value }))
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
    })
    if (!res.ok) {
      setError('Login inválido')
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return <>
    <LoginForm
      handleLogin={handleLogin}
      handleChange={handleChange}
      error={error}
    >
      {user}
    </LoginForm>
  </>
}