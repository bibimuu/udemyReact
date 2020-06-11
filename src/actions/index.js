import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";

export const readEvents = () => async dispatch => {

  const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
  const QUERYSTRING = "?token=token123"

  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({type: READ_EVENTS,response})
}
