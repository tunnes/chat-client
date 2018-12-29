import * as type from '../../constants/action_types'

const INITIAL_STATE = {
  value: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.TYPE_MESSAGE_INPUT:
      return action.payload
    default:
      return state
  }
}