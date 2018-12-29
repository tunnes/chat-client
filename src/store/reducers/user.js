import * as type from '../../constants/action_types'
import * as session from '../../constants/session_keys'
import { storageGet } from '../../utils/index'

const INITIAL_STATE = {
  token: storageGet(session.CHAT_USER_TOKEN),
  data: storageGet(session.CHAT_USER_DATA),
  valid: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SET_USER_DATA:
      return { ...state, ...action.payload }
    case type.SET_USER_VALIDATE:
      return { ...state, valid: action.payload }
    case type.LOGOUT:
      return { token: '', data: {}, valid: false }
    default:
      return state
  }
}