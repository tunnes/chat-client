import { storageGet } from '../../utils/index'

const INITIAL_STATE = {
  token: storageGet('CHAT_USER_TOKEN'),
  data: storageGet('CHAT_USER_DATA'),
  valid: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.payload }
    case 'SET_USER_VALIDATE':
      return { ...state, valid: action.payload }
    case 'LOGOUT':
      return { token: '', data: {}, valid: false }
    default:
      return state
  }
}