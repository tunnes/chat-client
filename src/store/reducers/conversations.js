const INITIAL_STATE = [
  {
    id: '1',
    type: 'PRIVATE',
    users: [
      { id: 3, user_name: 'Vitor' },
      { id: 1, user_name: 'Ayrton Felipe' }
    ],
    messages: [
      // Paginar isso...
      { id: 1, conversation_id: 1, user_id: 3, content: 'Hey!' },
      { id: 2, conversation_id: 1, user_id: 1, content: 'Hooooa!' },
      { id: 3, conversation_id: 1, user_id: 3, content: 'É mole?' },
      { id: 4, conversation_id: 1, user_id: 3, content: 'Não é mole não!' }
    ]
  }
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FILL_CONVERSATIONS':
      return action.payload
    case 'CREATE_CONVERSATION':
      return state.concat(action.payload)
    case 'ADD_MESSAGE':
      const conversations = state
      const finder = (conv) => (conv.id === action.payload.conversation_id)
      conversations.find(finder).messages.push(action.payload)
      return [...conversations]
    default:
      return state
  }
}