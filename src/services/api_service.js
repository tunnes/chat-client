import Axios from 'axios'

export const authenticate = data => (
  Axios.post(`${process.env.API_URL}/authentication`, data)
)

export const validate = data => (
  Axios.post(`${process.env.API_URL}/authentication/validation`, data)
)

export const createUser = data => (
  Axios.post(`${process.env.API_URL}/user`, data)
)
