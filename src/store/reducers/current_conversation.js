const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CONVERSATION':
      return action.payload
    default:
      return state
  }
}