import React, { Component } from 'react'
import Chat from '../containers/chat'
import Login from '../containers/login'

export default class Authenticator extends Component {
  componentWillMount() {
    if (this.props.user.data && this.props.user.token) this.props.validateAuth(this.props.user.token)
  }

  authReady () {
    return this.props.user.data && this.props.user.valid
  }

  render() {
    return this.authReady() ? <Chat /> : <Login />
  }
}