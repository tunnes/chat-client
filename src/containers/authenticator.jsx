import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { validateAuth } from '../store/actions'

import Authenticator from '../components/authenticator'

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => (
  bindActionCreators({ validateAuth }, dispatch)
)

export default connect(mapState, mapDispatch)(Authenticator)