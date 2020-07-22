import { v4 as uuid } from 'uuid';


const initalState = {
    items3: [
        { id: uuid(), name: 'EGGS' },
        { id: uuid(), name: 'SALAMgasdaI' },
        { id: uuid(), name: 'KASE' },
        { id: uuid(), name: 'MULE' },
      ]
};

const rootReducer = (state = initalState,action) => {
    switch (action.type) {
        case ('REMOVE_ITEM'): 
            return {
                ...state,
                items3: state.items3.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    };

};

export default rootReducer;