import { API_URL, API_ERROR, NEW_MESSAGE } from '../constants'

const addMessage = (newMessage) => {
  return async (dispatch) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      dispatch({
        type: NEW_MESSAGE,
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

export default addMessage
