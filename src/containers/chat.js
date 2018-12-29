import { connect } from 'react-redux'
import Chat from '../components/chat'

const mapState = state => ({
  currentConversation: state.currentConversation
})

export default connect(mapState, null)(Chat)