import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items: [
    // { id: uuid(), name: 'EGGS' },
    // { id: uuid(), name: 'SALAssMI' },
    // { id: uuid(), name: 'KASE' },
    // { id: uuid(), name: 'lol' },
  ],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
    return {
      ...state,
      items: [
          action.payload,
          ...state.items
      ]
    };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ITEMS_LOADING:
        return {
            ...state,
            loading: true,
        }
    default:
      return state;
  }
}
