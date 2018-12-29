import React, { Component } from 'react'
import NavbarItem from './navbar_item'
export default class Groups extends Component {
  constructor (props) {
    super(props)
    this.toggleUser = this.toggleUser.bind(this)
  }

  toggleUser (user_id) {
    let users = this.props.groupForm.users

    if (users.find(id => id == user_id)) {
      users = users.filter(id => id !== user_id)
    } else {
      users.push(user_id)
    }

    this.props.setGroupUsers(users)
  }

  render () {
    return (
      <div className='navbar__body'>
        <div className='navbar__body__items'>
          <div className="navbar__body__input" >
            <input
              type="text"
              value={this.props.groupForm.name}
              placeholder='Digite o nome para o grupo...'
              onChange={e => this.props.setGroupName(e.target.value)}
            />
            <i
              className="lnr lnr-plus-circle navbar__body__input__confirm"
              onClick={e => this.props.createGroup(this.props.groupForm)}
            />
          </div>
          {this.props.contacts.map((contact, index) =>
            <NavbarItem
              key={index}
              title={contact.full_name}
              subtitle={`~${contact.user_name}`}
              onClick={e => this.toggleUser(contact.id)}
              src={`https://api.adorable.io/avatars/60/${contact.full_name}`}
              selected={this.props.groupForm.users.find(u => u == contact.id)}
            />
          )}
        </div>
      </div>
    )
  }
}
