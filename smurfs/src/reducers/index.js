import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from '../actions/fetchSmurfs'
import { ADDING, ADD_SUCCESS, ADD_FAIL } from '../actions/addSmurf'
import { DELETE_FAIL } from '../actions/deleteSmurf';

const initialState = {
    isFetching: false,
    error: false,
    smurfs: []
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
            }
        case FETCH_FAIL: 
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case ADDING:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case ADD_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
            }
        case ADD_FAIL: 
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case DELETE_FAIL: 
            return {
                ...state,
                isFetching: false,
                error: true
            }
        
        default: 
            return state
    }
} 