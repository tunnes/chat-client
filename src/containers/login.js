import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitAuth } from '../store/actions'

import Login from '../components/login'

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => (
  bindActionCreators({ submitAuth }, dispatch)
)

export default connect(mapState, mapDispatch)(Login)