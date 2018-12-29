import { connect } from 'react-redux'
import NavbarOptions from '../components/navbar_options'

const mapState = state => ({
  layout: state.layout,
})

export default connect(mapState, null)(NavbarOptions)