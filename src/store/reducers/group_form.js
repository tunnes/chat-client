const INITIAL_STATE = {
  show: false,
  users: [],
  name: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_GROUP_NAME':
      return { ...state, name: action.payload }
    case 'SET_GROUP_USERS':
      return { ...state, users: action.payload }
    default:
      return state
  }
}