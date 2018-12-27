const INITIAL_STATE = {
  value: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TYPE_MESSAGE_INPUT':
      return action.payload
    default:
      return state
  }
}