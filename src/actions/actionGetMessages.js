import { API_URL, API_ERROR, GET_MESSAGES } from '../constants'

const getMessages = () => {
  return async (dispatch) => {
    const response = await fetch(API_URL)
    if (response.status === 200) {
      const json = await response.json()
      dispatch({
        type: GET_MESSAGES,
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

export default getMessages
