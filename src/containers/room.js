import { connect } from 'react-redux'
import Room from '../components/room'

const mapState = state => ({
  currentUser: state.user.data,
  conversations: state.conversations,
  currentConversation: state.currentConversation,
})

export default connect(mapState, null)(Room)