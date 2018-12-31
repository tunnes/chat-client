import React, { Component } from 'react'
import { extractReceiver } from '../utils/index'
import RoomEmoji from '../containers/room_emoji'

export default class RoomControls extends Component {
  constructor(props) {
    super(props)
    this.handleEmoji = this.handleEmoji.bind(this)
    this.messageProps = this.messageProps.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeMessage = this.handleTypeMessage.bind(this)
    this.handleCreateMessage = this.handleCreateMessage.bind(this)
  }

  handleCreateMessage() {
    const message = this.messageProps()
    message.conversation_id ? this.props.createMessage(message) : this.props.createConversation(message)
  }

  messageProps() {
    return {
      user_id: this.props.currentUser.id,
      content: this.props.messageInput.value,
      conversation_id: this.props.currentConversation.id,
      users: this.props.currentConversation.users.map(user => user.id)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.props.messageInput.value) return
    this.props.toogleEmoji(false)
    this.handleCreateMessage()
  }

  handleTypeMessage(event) {
    this.props.typeMessageInput(event.target.value)
  }

  handleEmoji(event) {
    this.props.toogleEmoji(!this.props.showEmojiPiker)
  }

  render() {
    return(
      <div className='message__input-control'>
        <RoomEmoji />
        <form onSubmit={this.handleSubmit} className='message__input-box'>
          <input
            type='text'
            className='message__input'
            onChange={this.handleTypeMessage}
            placeholder='Digite sua mensagem...'
            value={this.props.messageInput.value}
          />

          <span
            onClick={this.handleEmoji}
            className={`lnr lnr-smile message__emoji ${this.props.showEmojiPiker ? 'active' : ''}`}
          />

          <button
            type="submit"
            className='lnr lnr-location message__button'
          />
        </form>
      </div>
    )
  }
}
