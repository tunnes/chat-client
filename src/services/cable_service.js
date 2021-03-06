import ActionCable from 'actioncable'
import { fillConversations, fillContacts, addMessage, addConversation } from '../store/actions'

import * as type from '../constants/action_types'
export default class CableService {
  constructor (dispatcher) {
    this.dispatcher = dispatcher
    this.connection = null
    this.submit = this.submit.bind(this)
    this.received = this.received.bind(this)
    this.connected = this.connected.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
  }

  perform (token) {
    if (this.connection) this.unsubscribe()
    
    const cable = ActionCable.createConsumer(`${process.env.WS_URL}/cable?token=${token}`)

    const actions = {
      connected: this.connected, received: this.received
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
      case type.ADD_CONVERSATION:
        this.dispatcher(
          addConversation(data.payload)
        )
        break
    }
  }

  submit(data) {
    this.connection.send(data)
  }

  unsubscribe() {
    this.connection.unsubscribe()
  }
}