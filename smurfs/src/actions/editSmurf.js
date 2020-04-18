import axios from 'axios'

export const EDIT_FAIL = 'EDIT_FAIL'

export const editSmurf = newDetails => dispatch => {
    console.log(newDetails)
    axios
        .put(`http://localhost:3333/smurfs/${newDetails.id}`, { name : newDetails.name })
        .catch(err => {
            dispatch({ type: EDIT_FAIL, payload: true })
        })
}