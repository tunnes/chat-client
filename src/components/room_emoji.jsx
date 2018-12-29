import React, { Component } from 'react'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default class RoomEmoji extends Component {
  constructor(props) {
    super(props)
    this.pikerStyle = this.pikerStyle.bind(this)
    this.handleSelectEmoji = this.handleSelectEmoji.bind(this)
  }

  handleSelectEmoji(data) {
    this.props.typeMessageInput(`${this.props.messageInput.value}${data.native}`)
  }

  pikerStyle() {
    return { display: this.props.showEmojiPiker ? 'block' : 'none'}
  }

  render() {
    return(
      <Picker color="#00d286" style={this.pikerStyle()} onSelect={this.handleSelectEmoji} />
    )
  }
}