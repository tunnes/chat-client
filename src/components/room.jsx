import React, { Component } from 'react'

import RoomMessage from './room_message'
import RoomControls from '../containers/room_controls'

import { extractReceiver, scrollDown } from '../utils/index'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.roomTitle = this.roomTitle.bind(this)
  }

  componentDidUpdate() {
    scrollDown('.message__wrapper')
  }

  componentDidMount() {
    scrollDown('.message__wrapper')
  }

  roomTitle() {
    return extractReceiver(this.props.currentConversation.users, this.props.currentUser).full_name
  }

  render() {
    return(
      <div className='room__wrapper'>
        <div className='room__title'>
          {this.roomTitle()}
        </div>
        <hr className='room__divisor'/>
        <div className='message__wrapper'>
          {this.props.currentConversation.messages.map((message, index) =>
            <RoomMessage
              key={index}
              content={message.content}
              created_at={message.created_at}
              current={message.user_id == this.props.currentUser.id}
            />
          )}
        </div>
        <div className='message__input-control'>
          <RoomControls />
        </div>
      </div>
    )
  }
}