import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM,ITEMS_LOADING } from '../actions/types';

export const getPizza = () => dispatch => {
    dispatch(setItemsLoading());
    axios
    .get('api/item')
    .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
} 
export const addItem = (item) => dispatch => {
  axios.post('/api/item',item)
  .then(res => dispatch({
    type: ADD_ITEM,
    payload: res.data
}))

} 

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
} 




export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
} 
