const INITIAL_STATE = [
  { id: 2, user_name: 'Gustavo' },
  { id: 3, user_name: 'Vitor' },
  { id: 4, user_name: 'Daniel Johnston' },
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FILL_CONTACTS':
      return action.payload
    default:
      return state
  }
}