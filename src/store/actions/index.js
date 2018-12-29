export const setCurrentConversation = (conversation) => ({
  type: 'SET_CURRENT_CONVERSATION',
  payload: conversation
})

export const fillConversations = conversations => ({
  type: 'FILL_CONVERSATIONS',
  payload: conversations
})

export const fillContacts = contacts => ({
  type: 'FILL_CONTACTS',
  payload: contacts
})

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  payload: message
})

export const typeMessageInput = value => ({
  type: 'TYPE_MESSAGE_INPUT',
  payload: { value }
})

export const createMessage = message_data => ({
  type: 'CREATE_MESSAGE',
  payload: message_data
})

export const createConversation = conversation => ({
  type: 'CREATE_CONVERSATION',
  payload: conversation
})

export const submitAuth = authData => ({
  type: 'SUBMIT_AUTH',
  payload: authData
})

export const validateAuth = (token) => ({
  type: 'VALIDATE_AUTH',
  payload: token
})

export const setGroupName = name => ({
  type: 'SET_GROUP_NAME',
  payload: name
})

export const setGroupUsers = users => ({
  type: 'SET_GROUP_USERS',
  payload: users
})

export const createGroup = groupData => ({
  type: 'CREATE_GROUP',
  payload: groupData
})

export const createUser = payload => ({
  type: 'CREATE_USER',
  payload: payload
})

export const setNavbarOption = option => ({
  type: 'SET_NAVBAR_OPTION',
  payload: option
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const toogleEmoji = show => ({
  type: 'TOOGLE_EMOJI_PIKER',
  payload: show
})