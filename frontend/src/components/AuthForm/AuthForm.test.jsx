import { render, screen, fireEvent } from '@testing-library/react'
import AuthForm from './AuthForm'

describe('AuthForm', () => {
  const mockSubmit = jest.fn()
  const props = {
    title: 'Login',
    onSubmit: mockSubmit,
    link: { href: '/signup', text: 'Sign up' }
  }

  it('renders correctly', () => {
    render(<AuthForm {...props} />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  it('calls onSubmit with form data', () => {
    render(<AuthForm {...props} />)
    
    fireEvent.change(screen.getByPlaceholderText('Email address'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' }
    })
    fireEvent.click(screen.getByText('Login'))
    
    expect(mockSubmit).toHaveBeenCalledWith('test@example.com', 'password')
  })
})