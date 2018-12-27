import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Conversation from '../components/conversation'
import { typeMessageInput, createMessage } from '../store/actions'

const mapStateToProps = state => ({
  currentConversation: state.currentConversation,
  conversations: state.conversations,
  messageInput: state.messageInput,
  currentUser: state.user.data
})

const mapDispatchToProps = dispatchEvent => (
  bindActionCreators({ typeMessageInput, createMessage }, dispatchEvent)
)

export default connect(mapStateToProps, mapDispatchToProps)(Conversation)