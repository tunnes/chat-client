import React from 'react'

export default props => (
  <div className={`message__item ${props.current ? 'current' : ''}`}>
    <div className='message__item__content'>
      {props.content}
    </div>
    <div className='message__item__date'>
      {new Date(props.created_at).toLocaleTimeString('pt-br', { hour: 'numeric', minute: 'numeric' })}
    </div>
  </div>
)