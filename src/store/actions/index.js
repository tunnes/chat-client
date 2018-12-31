import * as type from '../../constants/action_types'

export const setCurrentConversation = (conversation) => ({
  type: type.SET_CURRENT_CONVERSATION,
  payload: conversation
})

export const fillConversations = conversations => ({
  type: type.FILL_CONVERSATIONS,
  payload: conversations
})

export const fillContacts = contacts => ({
  type: type.FILL_CONTACTS,
  payload: contacts
})

export const addMessage = message => ({
  type: type.ADD_MESSAGE,
  payload: message
})

export const addConversation = conversation => ({
  type: type.ADD_CONVERSATION,
  payload: conversation
})

export const typeMessageInput = value => ({
  type: type.TYPE_MESSAGE_INPUT,
  payload: { value }
})

export const createMessage = data => ({
  type: type.CREATE_MESSAGE,
  payload: data
})

export const createConversation = data => ({
  type: type.CREATE_CONVERSATION,
  payload: data
})
export const submitAuth = authData => ({
  type: type.SUBMIT_AUTH,
  payload: authData
})

export const validateAuth = (token) => ({
  type: type.VALIDATE_AUTH,
  payload: token
})

export const setGroupName = name => ({
  type: type.SET_GROUP_NAME,
  payload: name
})

export const setGroupUsers = users => ({
  type: type.SET_GROUP_USERS,
  payload: users
})

export const createGroup = groupData => ({
  type: type.CREATE_GROUP,
  payload: groupData
})

export const createUser = payload => ({
  type: type.CREATE_USER,
  payload: payload
})

export const setNavbarOption = option => ({
  type: type.SET_NAVBAR_OPTION,
  payload: option
})

export const logout = () => ({
  type: type.LOGOUT
})

export const toogleEmoji = show => ({
  type: type.TOOGLE_EMOJI_PIKER,
  payload: show
})