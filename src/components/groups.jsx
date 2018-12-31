import React, { Component } from 'react'
import NavbarItem from './navbar_item'
export default class Groups extends Component {
  constructor (props) {
    super(props)
    this.toggleUser = this.toggleUser.bind(this)
    this.handleCreateGroup = this.handleCreateGroup.bind(this)
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

  handleCreateGroup (event) {
    let users = this.props.groupForm.users
    users.push(this.props.currentUser.id)
    this.props.setGroupUsers(users)
    this.props.createGroup(this.props.groupForm)
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
              onClick={this.handleCreateGroup}
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
