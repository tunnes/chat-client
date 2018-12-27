import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.classActive = this.classActive.bind(this)
  }

  classActive(option) {
    if (this.props.layout.navbarOption === option) return 'active'
  }

  render() {
    return (
      <div className='page__nav'>
        <div className='navbar__user-profile'>
          <img className='navbar__user-profile__picture' src={`https://api.adorable.io/avatars/70/${this.props.user.data.user_name}`} />
          <h1 className='navbar__user-profile__name'>{this.props.user.data.full_name}</h1>
        </div>

        <ul className='navbar__options'>
          <li className={`navbar__option ${this.classActive('CONVERSATIONS')}`} onClick={e => this.props.setNavbarOption('CONVERSATIONS') }>
            <span className='navbar__option__icon lnr lnr-bubble'></span>
            Conversas
          </li>
          <li className={`navbar__option ${this.classActive('CONTACTS')}`} onClick={e => this.props.setNavbarOption('CONTACTS') }>
            <span className='navbar__option__icon lnr lnr-users'></span>
            Contatos
          </li>
          <li className={`navbar__option ${this.classActive('CREATE_GROUP')}`} onClick={e => this.props.setNavbarOption('CREATE_GROUP') }>
            <span className='navbar__option__icon lnr lnr-plus-circle'></span>
            Novo Grupo
          </li>
          <li className='navbar__option' onClick={e => this.props.logout() }>
            <span className='navbar__option__icon lnr lnr-exit'></span>
            Sair
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar