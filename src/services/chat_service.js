export const authenticate = data => (
  Axios.post('http://localhost:3000/authentication', data)
)

export const validate = data => (
  Axios.post('http://localhost:3000/authentication', data)
)