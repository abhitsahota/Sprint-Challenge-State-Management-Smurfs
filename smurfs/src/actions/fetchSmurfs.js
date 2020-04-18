import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING })
    axios.
        get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: true })
        })
}