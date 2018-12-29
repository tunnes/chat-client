import React, { Component } from 'react'
import NavbarOption from '../containers/navbar_options'
export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.optionType = this.optionType.bind(this)
    this.classActive = this.classActive.bind(this)
  }

  classActive(option) {
    if (this.props.layout.navbarOption === option) return 'active'
  }

  optionType(type) {
    return {
      className: `navbar__option ${this.classActive(type)}`,
      onClick: (event => this.props.setNavbarOption(type))
    }
  }

  render() {
    return (
      <div className='page__nav'>
        <ul className='navbar__options'>
          <li { ...this.optionType('CONVERSATIONS') } >
            <span className='navbar__option__label'>Conversas</span>
          </li>
          <li { ...this.optionType('CONTACTS') } >
            <span className='navbar__option__label'>Contatos</span>
          </li>
          <li { ...this.optionType('CREATE_GROUP') } >
            <span className='navbar__option__label'>Novo Grupo</span>
          </li>
          <li className='navbar__option' onClick={e => this.props.logout() }>
            <span className='navbar__option__label'>Sair</span>
          </li>
        </ul>
        <NavbarOption />
      </div>
    )
  }
}
