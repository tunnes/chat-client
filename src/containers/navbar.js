import { connect } from 'react-redux'

import Navbar from '../components/navbar'
import { bindActionCreators } from 'redux'
import { setNavbarOption, logout } from '../store/actions'

const mapState = state => ({
  layout: state.layout,
  user: state.user
})

const mapDispatch = dispatch => (
  bindActionCreators({ setNavbarOption, logout }, dispatch)
)

export default connect(mapState, mapDispatch)(Navbar)