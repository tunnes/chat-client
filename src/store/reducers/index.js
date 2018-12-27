import { combineReducers } from "redux"

import contacts from './contacts'
import groupForm from './group_form'
import messageInput from './message_input'
import conversations from './conversations'
import currentConversation from './current_conversation'

import layout from './layout'
import user from './user'

export default combineReducers({
  currentConversation,
  conversations,
  messageInput,
  groupForm,
  contacts,
  layout,
  user
})