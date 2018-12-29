import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import RoomEmoji from '../components/room_emoji'
import { typeMessageInput } from '../store/actions'

const mapState = state => ({
  messageInput: state.messageInput,
  showEmojiPiker: state.layout.showEmojiPiker
})

const mapDispatch = dispatch => (
  bindActionCreators({ typeMessageInput }, dispatch)
)

export default connect(mapState, mapDispatch)(RoomEmoji)