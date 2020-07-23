import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'EGGS' },
    { id: uuid(), name: 'SALAssMI' },
    { id: uuid(), name: 'KASE' },
    { id: uuid(), name: 'lol' },
  ],
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
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
