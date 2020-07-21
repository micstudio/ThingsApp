import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';


const initialState = {
    items: [
        { id: uuid(), name: 'EGGS' },
        { id: uuid(), name: 'SALAMI' },
        { id: uuid(), name: 'KASE' },
        { id: uuid(), name: 'lol' },
      ]
}


export default function(state = initialState,action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}