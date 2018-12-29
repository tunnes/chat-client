import ActionCable from 'actioncable'
import { fillConversations, fillContacts, addMessage, createConversation } from '../store/actions'

import * as type from '../constants/action_types'
export default class CableService {
  constructor (dispatcher) {
    this.dispatcher = dispatcher
    this.connection = null
    this.submit = this.submit.bind(this)
    this.received = this.received.bind(this)
    this.connected = this.connected.bind(this)
    this.disconnected = this.disconnected.bind(this)
  }

  perform (token) {
    const cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${token}`)

    const actions = {
      disconnected: this.disconnected,
      connected: this.connected,
      received: this.received,
    }

    const params = {
      channel: 'UsersChannel'
    }

    this.connection = cable.subscriptions.create(params, actions)
  }

  connected () {
    // TODO
  }

  received (data) {
    switch (data.type) {
      case type.FILL_CONVERSATIONS:
        this.dispatcher(
          fillConversations(data.payload)
        )
        break
      case type.FILL_CONTACTS:
        this.dispatcher(
          fillContacts(data.payload)
        )
        break
      case type.ADD_MESSAGE:
        this.dispatcher(
          addMessage(data.payload)
        )
        break
      case type.CREATE_CONVERSATION:
        this.dispatcher(
          createConversation(data.payload)
        )
        break
    }
  }

  submit(data) {
    this.connection.send(data)
  }

  disconnected () {
    // TODO..
  }
}