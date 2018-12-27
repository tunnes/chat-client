import { connect } from 'react-redux'
import Sidebar from '../components/sidebar'

const mapState = state => ({
  layout: state.layout,
})

export default connect(mapState, null)(Sidebar)