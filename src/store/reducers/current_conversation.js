import * as type from '../../constants/action_types'
const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SET_CURRENT_CONVERSATION:
      return action.payload
    default:
      return state
  }
}