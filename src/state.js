import { createStore } from 'redux';
import { combineReducers } from 'redux';

export const ADD_ZIPCODE = 'ADD_ZIPCODE';
export const REMOVE_ZIPCODE = 'REMOVE_ZIPCODE';

const zipcodesReducer = function(state = [], action) {
    switch (action.type) {
        case ADD_ZIPCODE:
            return [...state, action.zipcode];
        case REMOVE_ZIPCODE:
            return state.filter(zip => zip !== action.zipcode);
        default:
            return state;
    }
}

const reducer = combineReducers({zipcodes: zipcodesReducer});

export default function configureStore(preloadedState) {
    const store = createStore(reducer, preloadedState);
    return store;
}

export const initialAppState = {
    zipcodes: []
};

export const store = configureStore(initialAppState);

console.log('DEFAULT STATE', store.getState());

store.dispatch({type: ADD_ZIPCODE, zipcode: 95742});
store.dispatch({type: ADD_ZIPCODE, zipcode: 29000});
store.dispatch({type: ADD_ZIPCODE, zipcode: 10001});
console.log('AFTER ADDING ZIPCODES', store.getState());

store.dispatch({type: REMOVE_ZIPCODE, zipcode: 10001});
console.log('AFTER REMOVING ZIPCODE 10001', store.getState());