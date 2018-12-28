import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

const INITIAL_STATE = {
  user_name: '',
  password: ''
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE

    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handlePassword(event) {
    this.setState({ ...this.state, password: event.target.value })
  }

  handleLogin(event) {
    this.setState({ ...this.state, user_name: event.target.value })
  }

  handleAuth(event) {
    event.preventDefault()
    this.props.submitAuth(this.state)
  }

  componentDidUpdate() {
    if (this.props.user.valid) this.props.history.push("/")
  }

  render() {
    return (
      <div className='form__wrapper'>
        <form className='form__inner'>
          <input placeholder="Usuário" type="text" autoComplete="none" value={this.state.user_name} onChange={this.handleLogin} />
          <input placeholder="Senha" type="password" autoComplete="none" value={this.state.password} onChange={this.handlePassword} />
          <button className='form__button' onClick={this.handleAuth}> entrar </button>
          <Link to='/singup' className='form__button inverse'>
            cadastrar-se
          </Link>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)