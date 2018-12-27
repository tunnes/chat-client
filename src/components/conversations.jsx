import React from 'react'
import { extractReceiver } from '../utils/index'

const messagesPreview = messages => {
  return messages.length ? [...messages].pop().content : null
}

const title = (props, conversation) => {
  if (conversation.access_type == '0') {
    return extractReceiver(conversation.users, props.currentUser).full_name
  } else {
    return conversation.title || "Sem titulo"
  }
}

const activeConversation = (props, conversation) => {
  if (props.currentConversation && props.currentConversation.id === conversation.id) {
    return 'active'
  } else {
    return ''
  }
}

export default props => (
  <div className='sidebar'>
    <div className='sidebar__title'>Conversas</div>
    <hr className='sidebar__divisor'/>
    <div className='sidebar__items'>
      {props.conversations.map((conversation, index) => (
        <div
          className={`conversations__item ${activeConversation(props, conversation)}`}
          key={index}
          onClick={(e) => props.setCurrentConversation(conversation)}
        >
          <img className='conversations__item__image' src={`https://api.adorable.io/avatars/60/${title(props, conversation)}`} />
          <div className='conversations__item__body'>
            <h4>{title(props, conversation)}</h4>
            <h5>{messagesPreview(conversation.messages)}</h5>
          </div>
          <div className='conversations__item__footer'>
            {new Date(conversation.created_at).toLocaleDateString('pt-br', { year: 'numeric', month: 'short' })}
          </div>
        </div>
      ))}
    </div>
  </div>
)