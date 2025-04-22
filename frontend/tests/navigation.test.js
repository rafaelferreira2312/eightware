import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import LoginPage from '@/app/(auth)/login/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

jest.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn().mockResolvedValue({ success: true }),
    loading: false
  })
}))

describe('LoginPage', () => {
  it('redirects to profile after successful login', async () => {
    const mockPush = jest.fn()
    useRouter.mockImplementation(() => ({
      push: mockPush
    }))

    render(<LoginPage />)
    
    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' }
    })
    fireEvent.click(screen.getByText('Login'))
    
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(mockPush).toHaveBeenCalledWith('/profile')
  })
})