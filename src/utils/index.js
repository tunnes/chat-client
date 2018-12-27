export const extractReceiver = (users, currentUser) => (
  [...users.filter(user => user.id != currentUser.id)].pop()
)

export const storageGet = key => (
  JSON.parse(localStorage.getItem(key))
)

export const storageSet = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value))
)

export const storageDestroy = key => (
  localStorage.removeItem(key)
)