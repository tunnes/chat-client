import React, { Component } from 'react'
import { extractReceiver } from '../utils/index'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const scrollDown = (selector) => {
  let scrollingElement = document.querySelector(selector)
  scrollingElement.scrollTop = scrollingElement.scrollHeight
}

const INITIAL_STATE = {
  showEmojis: false
}

class CurrentConversation extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectEmoji = this.handleSelectEmoji.bind(this)
  }

  componentDidUpdate() {
    scrollDown('.message__wrapper')
  }

  componentDidMount() {
    scrollDown('.message__wrapper')
  }

  handleSubmit(e) {
    console.log("click")
    e.preventDefault()
    if (!this.props.messageInput.value) return

    this.setState({...this.state, showEmojis: false })

    this.props.createMessage({
      user_id: this.props.currentUser.id,
      content: this.props.messageInput.value,
      conversation_id: this.props.currentConversation.id,
      receiver_id: extractReceiver(this.props.currentConversation.users, this.props.currentUser).id
    })
  }

  handleSelectEmoji(data) {
    this.props.typeMessageInput(
      `${this.props.messageInput.value}${data.native}`
    )
  }

  render() {
    return(
      <div className='conversation__wrapper'>
        <div className='conversation__title'>
          {extractReceiver(this.props.currentConversation.users, this.props.currentUser).full_name}
        </div>
        <hr className='conversation__divisor'/>
        <div className='message__wrapper'>
          {this.props.currentConversation.messages.map((message, index) =>
            <div key={index} className={`message__item ${message.user_id == this.props.currentUser.id && 'current'}`}>
              <div className='message__item__content'>
                {message.content}
              </div>
              <div className='message__item__date'>
                {new Date(message.created_at).toLocaleTimeString('pt-br', { hour: 'numeric', minute: 'numeric' })}
              </div>
            </div>
          )}
        </div>
        <div className='message__input-control'>
          <Picker color="#00d286" onSelect={this.handleSelectEmoji} style={{display: (this.state.showEmojis ? 'block' : 'none')}}/>
          <form onSubmit={this.handleSubmit} className='message__input-box'>
            <input type='text' placeholder='Digite sua mensagem...' className='message__input' value={this.props.messageInput.value} onChange={(e) => this.props.typeMessageInput(e.target.value)}/>
            <span className={`lnr lnr-smile message__emoji ${this.state.showEmojis ? 'active' : ''}`} onClick={e => this.setState({...this.state, showEmojis: !this.state.showEmojis })} />
            <button type="submit" className='lnr lnr-location message__button' />
          </form>
        </div>
      </div>
    )
  }
}

export default CurrentConversation