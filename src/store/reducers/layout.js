const INITIAL_STATE = {
  navbarOption: 'CONTACTS'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NAVBAR_OPTION':
      return { ...state, navbarOption: action.payload }
    default:
      return state
  }
}