const INITIAL_STATE = {
  navbarOption: 'CONTACTS',
  showEmojiPiker: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NAVBAR_OPTION':
      return { ...state, navbarOption: action.payload }
    case 'TOOGLE_EMOJI_PIKER':
      return { ...state, showEmojiPiker: action.payload }
    default:
      return state
  }
}