import api from './api'

export const loginUser = async (email, password) => {
  const response = await api.post('/login', {
    user: { email, password }
  })
  return response.data.user
}

export const signupUser = async (email, password) => {
  const response = await api.post('/signup', {
    user: { email, password, password_confirmation: password }
  })
  return response.data.user
}

export const logoutUser = async () => {
  await api.delete('/logout')
}

export const getCurrentUser = async () => {
  const response = await api.get('/me')
  return response.data
}