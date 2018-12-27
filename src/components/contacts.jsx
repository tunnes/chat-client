import React from 'react'

const extractConversation = (conversations, id) => (
  conversations.find(
    conversation => conversation.users.find(user => user.id == id)
  )
)

const selectContact = (contact, props) => {
  const conversation = extractConversation(props.conversations, contact.id)
  if (conversation) {
    props.setCurrentConversation(conversation)
  } else {
    const newConversation = { id: null, type: 0, users: [ contact, props.currentUser ], messages: [] }
    props.setCurrentConversation(newConversation)
  }
}

export default props => (
  <div className='sidebar'>
    <div className='sidebar__title'>Contatos</div>
    <hr className='sidebar__divisor'/>
    <div className='sidebar__items'>
      {props.contacts.map(contact =>
        <div className='conversations__item' key={contact.id} onClick={(event) => selectContact(contact, props)}>
          <img className='conversations__item__image' src={`https://api.adorable.io/avatars/60/${contact.full_name}`} />
          <div className='conversations__item__body'>
            <h4>{contact.full_name}</h4>
            <h5>{`~${contact.user_name}`}</h5>
          </div>
        </div>
      )}
    </div>
  </div>
)