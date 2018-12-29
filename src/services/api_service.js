import Axios from 'axios'

export const authenticate = data => (
  Axios.post('http://localhost:3000/authentication', data)
)

export const validate = data => (
  Axios.post('http://localhost:3000/authentication/validation', data)
)

export const createUser = data => (
  Axios.post('http://localhost:3000/user', data)
)
