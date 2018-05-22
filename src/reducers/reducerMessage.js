import { NEW_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE, GET_MESSAGES } from '../constants'

const messages = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return [
        ...state,
        ...action.payload
      ]
    default:
  }
  return state
}

export default messages
