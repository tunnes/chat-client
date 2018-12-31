import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import RoomControls from '../components/room_controls'
import { typeMessageInput, createMessage, createConversation, toogleEmoji } from '../store/actions'

const mapState = state => ({
  currentUser: state.user.data,
  messageInput: state.messageInput,
  showEmojiPiker: state.layout.showEmojiPiker,
  currentConversation: state.currentConversation
})

const mapDispatch = dispatch => (
  bindActionCreators({ typeMessageInput, createMessage, createConversation, toogleEmoji }, dispatch)
)

export default connect(mapState, mapDispatch)(RoomControls)