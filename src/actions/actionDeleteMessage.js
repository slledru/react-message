import { API_URL, API_ERROR, DELETE_MESSAGE } from '../constants'

const deleteMessage = ( message ) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}/${message.id}`, {
      method: 'DELETE'
    })
    if (response.status === 200) {
      const json = await response.json()
      dispatch({
        type: DELETE_MESSAGE,
        payload: json
      })
    }
    else {
      dispatch({
        type: API_ERROR,
        payload: response
      })
    }
  }
}

export default deleteMessage
