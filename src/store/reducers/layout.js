import * as type from '../../constants/action_types'
import * as navbar from '../../constants/navbar_options'

const INITIAL_STATE = {
  navbarOption: navbar.CONTACTS,
  showEmojiPiker: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SET_NAVBAR_OPTION:
      return { ...state, navbarOption: action.payload }
    case type.TOOGLE_EMOJI_PIKER:
      return { ...state, showEmojiPiker: action.payload }
    default:
      return state
  }
}