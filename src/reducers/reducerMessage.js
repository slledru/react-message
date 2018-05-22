import {
  NEW_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE,
  GET_MESSAGES, BEGIN_EDIT_MESSAGE
} from '../constants'

const messages = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return [
        ...state,
        ...action.payload.map((data) => {
          data.inEditMode = false
          return data
        })
      ]

    case NEW_MESSAGE:
      return [
        ...state,
        action.payload
      ]

    case BEGIN_EDIT_MESSAGE:
      return [
        ...state.map((msg) => {
          if (msg.id === action.payload) {
            return { ...msg, inEditMode: !msg.inEditMode }
          }
          return msg
        })
      ]

    case EDIT_MESSAGE:
      return [
        ...state.map((msg) => {
          if (msg.id === action.payload.id) {
            return { ...action.payload, inEditMode: false }
          }
          return msg
        })
      ]

    default:
  }
  return state
}

export default messages
