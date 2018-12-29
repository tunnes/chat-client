import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../store/actions'

import Singup from '../components/singup';

const mapState = state => ({
  user: state.user
})

const mapDispath = dispatch => (
  bindActionCreators({ createUser }, dispatch)
)

export default connect(mapState, mapDispath)(Singup)