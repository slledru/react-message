import { BEGIN_EDIT_MESSAGE } from '../constants'

const toggleEditMessage = (message) => {
  return {
    type: BEGIN_EDIT_MESSAGE,
    payload: message.id
  }
}

export default toggleEditMessage
