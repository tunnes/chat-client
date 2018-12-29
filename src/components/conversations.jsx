import React, { Component } from 'react'

import NavbarItem from './navbar_item'
import { extractReceiver } from '../utils/index'

export default class Conversations extends Component {
  constructor(props) {
    super(props)
    this.title = this.title.bind(this)
    this.messagesPreview = this.messagesPreview.bind(this)
    this.activeConversation = this.activeConversation.bind(this)
  }

  title(conversation) {
    if (conversation.access_type == '0') {
      return extractReceiver(conversation.users, this.props.currentUser).full_name
    } else {
      return conversation.title || "Sem titulo"
    }
  }

  activeConversation(conv){
    return this.props.currentConversation && this.props.currentConversation.id == conv.id
  }

  messagesPreview(messages) {
    return messages.length ? [...messages].pop().content : null
  }

  render() {
    return(
      <div className='navbar__body'>
      <hr className='navbar__body__divisor'/>
      <div className='navbar__body__items'>
        {this.props.conversations.map((conversation, index) => (
           <NavbarItem
            key={index}
            title={this.title(conversation)}
            active={this.activeConversation(conversation)}
            subtitle={this.messagesPreview(conversation.messages)}
            onClick={(e) => this.props.setCurrentConversation(conversation)}
            src={`https://api.adorable.io/avatars/60/${this.title(conversation)}`}
            footer={new Date(conversation.created_at).toLocaleDateString('pt-br', { year: 'numeric', month: 'short' })}
          />
        ))}
      </div>
    </div>
    )
  }
}