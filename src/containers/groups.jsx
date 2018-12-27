import { connect } from 'react-redux'
import Groups from '../components/groups'
import { bindActionCreators } from 'redux'
import { setGroupName, setGroupUsers, createGroup, toggleGroupForm } from '../store/actions'

const mapStateToProps = state => ({
  groupForm: state.groupForm,
  contacts: state.contacts
})

const mapDispatchToProps = dispatchEvent => (
  bindActionCreators({ setGroupName, setGroupUsers, createGroup, toggleGroupForm }, dispatchEvent)
)

export default connect(mapStateToProps, mapDispatchToProps)(Groups)