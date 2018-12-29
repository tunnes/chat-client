import * as type from '../../constants/action_types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FILL_CONVERSATIONS:
      return action.payload
    case type.CREATE_CONVERSATION:
      return state.concat(action.payload)
    case type.ADD_MESSAGE:
      const conversations = state
      const finder = (conv) => (conv.id === action.payload.conversation_id)
      conversations.find(finder).messages.push(action.payload)
      return [...conversations]
    default:
      return state
  }
}