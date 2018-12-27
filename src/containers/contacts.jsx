import { connect } from 'react-redux'
import Contacts from '../components/contacts'
import { bindActionCreators } from 'redux'
import { setCurrentConversation } from '../store/actions'

const mapStateToProps = state => ({
  contacts: state.contacts,
  currentUser: state.user.data,
  conversations: state.conversations
})

const mapDispatchToProps = dispatchEvent => (
  bindActionCreators({ setCurrentConversation }, dispatchEvent)
)

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)