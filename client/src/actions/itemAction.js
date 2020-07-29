import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM,ITEMS_LOADING } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors} from './errorActions'

export const getPizza = () => dispatch => {
    dispatch(setItemsLoading());
    axios
    .get('api/item')
    .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
} 
export const addItem = (item) => (dispatch, getState) => {
  axios.post('/api/item',item, tokenConfig(getState))
  .then(res => dispatch({
    type: ADD_ITEM,
    payload: res.data
}))

} 

export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/item/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
    // return {
    //     type: DELETE_ITEM,
    //     payload: id
    // }
} 




export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
} 
