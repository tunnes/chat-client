import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const INITIAL_STATE = {
  full_name: '',
  user_name: '',
  password: '',
}

class Singup extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFullName = this.handleFullName.bind(this)
    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleFullName(event) {
    this.setState({ ...this.state, full_name: event.target.value })
  }

  handleUserName(event) {
    this.setState({ ...this.state, user_name: event.target.value })
  }

  handlePassword(event) {
    this.setState({ ...this.state, password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createUser({ ...this.state })
  }

  componentDidUpdate() {
    if (this.props.user.valid) this.props.history.push("/")
  }

  render() {
    return (
      <div className='form__wrapper'>
        <form className='form__inner u__large-form'>
          <input placeholder="Nome completo" type="text" value={this.state.full_name} onChange={this.handleFullName} autoComplete="none" />
          <input placeholder="Usuário" type="text" value={this.state.user_name} onChange={this.handleUserName} autoComplete="none" />
          <input placeholder="Senha" type="password" value={this.state.password} onChange={this.handlePassword} autoComplete="none" />
          <button className='form__button' onClick={this.handleSubmit}> Confirmar </button>
        </form>
      </div>
    )
  }
}

export default withRouter(Singup)