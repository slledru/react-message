import { API_URL, API_ERROR, EDIT_MESSAGE } from '../constants'

const editMessage = ( message ) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}/${message.id}`, {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      dispatch({
        type: EDIT_MESSAGE,
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

export default editMessage
