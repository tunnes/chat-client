import { connect } from 'react-redux'
import Chat from '../components/chat'
import { bindActionCreators } from 'redux'
import { toggleGroupForm } from '../store/actions'

const mapStateToProps = state => ({
  currentConversation: state.currentConversation,
  groupForm: state.groupForm,
  layout: state.layout
})

const mapDispatchToProps = dispatchEvent => (
  bindActionCreators({ toggleGroupForm }, dispatchEvent)
)

export default connect(mapStateToProps, mapDispatchToProps)(Chat)