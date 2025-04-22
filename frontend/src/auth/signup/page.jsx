'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import AuthForm from '@/components/AuthForm/AuthForm'

export default function SignupPage() {
  const { signup } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (email, password) => {
    const { success, error } = await signup(email, password)
    if (!success) {
      setError(error || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm 
        title="Sign Up" 
        onSubmit={handleSubmit} 
        error={error}
        link={{ href: '/login', text: 'Already have an account? Login' }}
      />
    </div>
  )
}