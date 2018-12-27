import { connect } from 'react-redux'
import Conversations from '../components/conversations'
import { bindActionCreators } from 'redux'
import { setCurrentConversation } from '../store/actions'

const mapStateToProps = state => ({
  currentConversation: state.currentConversation,
  conversations: state.conversations,
  currentUser: state.user.data
})

const mapDispatchToProps = dispatchEvent => (
  bindActionCreators({ setCurrentConversation }, dispatchEvent)
)

export default connect(mapStateToProps, mapDispatchToProps)(Conversations)