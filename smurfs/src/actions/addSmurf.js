import axios from 'axios'

export const ADDING = 'ADDING'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAIL = 'ADD_FAIL'

export const addSmurf = character => dispatch => {
    dispatch({ type: ADDING })
    console.log(character)
    axios
        .post(`http://localhost:3333/smurfs`, character)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_FAIL, payload: true })
        })
}