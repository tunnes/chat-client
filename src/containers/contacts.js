import { connect } from 'react-redux'
import Contacts from '../components/contacts'
import { bindActionCreators } from 'redux'
import { setCurrentConversation } from '../store/actions'

const mapState = state => ({
  contacts: state.contacts,
  currentUser: state.user.data,
  conversations: state.conversations
})

const mapDispatch = dispatch => (
  bindActionCreators({ setCurrentConversation }, dispatch)
)

export default connect(mapState, mapDispatch)(Contacts)