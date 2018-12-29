import React, { Component } from 'react'
import NavbarItem from './navbar_item'

export default class Contacts extends Component {
  constructor(props) {
    super(props)
    this.selectContact = this.selectContact.bind(this)
    this.newConversation = this.newConversation.bind(this)
    this.conversationByUser = this.conversationByUser.bind(this)
  }

  conversationByUser(id) {
    const finder = conv => conv.users.find(user => user.id == id)
    return this.props.conversations.find(finder)
  }

  newConversation(contact) {
    return {
      id: null, type: 0, users: [ contact, this.props.currentUser ], messages: []
    }
  }

  selectContact(contact) {
    const conv = this.conversationByUser(contact.id) || this.newConversation(contact)
    this.props.setCurrentConversation(conv)
  }

  render() {
    return (
      <div className='navbar__body'>
        <hr className='navbar__body__divisor'/>
        <div className='navbar__body__items'>
          {this.props.contacts.map(contact =>
            <NavbarItem
              key={contact.id}
              title={contact.full_name}
              subtitle={`~${contact.user_name}`}
              onClick={(e) => this.selectContact(contact)}
              src={`https://api.adorable.io/avatars/60/${contact.full_name}`}
            />
          )}
        </div>
      </div>
    )
  }
}