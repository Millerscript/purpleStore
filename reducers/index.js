import { combineReducers } from 'redux-immutable'; // CombineReducers: Esto lo que nos permitirá tener más de 1 reducers en nuestra aplicación.
import {List as list} from 'immutable';

const initialState = list([])

const cartItems = (state = initialState, action) => {
    console.log("View state")
    console.log(state)

    switch(action.type){
        case 'ADD_TO_CART':
            return state.push(action.payload)
        case 'REMOVE_FROM_CART':
            return state.filter( cartItem => cartItem.id !== action.payload.id )
        case 'REMOVE_ALL_FROM_CART':
            return list([])
        default:
            return state;
    }
}

export default combineReducers({
    products: cartItems
});