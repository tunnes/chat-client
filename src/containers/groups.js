import { connect } from 'react-redux'
import Groups from '../components/groups'
import { bindActionCreators } from 'redux'
import { setGroupName, setGroupUsers, createGroup } from '../store/actions'

const mapState = state => ({
  contacts: state.contacts,
  groupForm: state.groupForm,
  currentUser: state.user.data
})

const mapDispatch = dispatchEvent => (
  bindActionCreators({ setGroupName, setGroupUsers, createGroup }, dispatchEvent)
)

export default connect(mapState, mapDispatch)(Groups)