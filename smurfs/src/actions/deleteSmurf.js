import axios from 'axios'

export const DELETE_FAIL = 'DELETE_FAIL'

export const deleteSmurf = id => dispatch => {
    console.log(id)
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .catch(err => {
            dispatch({ type: DELETE_FAIL, payload: true })
        })
}