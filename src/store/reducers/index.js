import { combineReducers } from "redux"

import user from './user'
import layout from './layout'
import contacts from './contacts'
import groupForm from './group_form'
import messageInput from './message_input'
import conversations from './conversations'
import currentConversation from './current_conversation'

export default combineReducers({
  currentConversation,
  conversations,
  messageInput,
  groupForm,
  contacts,
  layout,
  user
})