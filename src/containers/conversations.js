import { connect } from 'react-redux'
import Conversations from '../components/conversations'
import { bindActionCreators } from 'redux'
import { setCurrentConversation } from '../store/actions'

const mapState = state => ({
  currentUser: state.user.data,
  conversations: state.conversations,
  currentConversation: state.currentConversation
})

const mapDispatch = dispatch => (
  bindActionCreators({ setCurrentConversation }, dispatch)
)

export default connect(mapState, mapDispatch)(Conversations)