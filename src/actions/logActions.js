import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types'

//get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      logs: data
    });
  } catch (err) {
    console.error(err.response);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
}

//set loading to true NO dispatch
export const setLoading = () => {
  return { type: SET_LOADING }
}