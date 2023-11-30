import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';
import todoReducer from "../slices/todoSlice";
// const initialState = {

// }

// console.log("Store.js initialState----", initialState);

// const reducer = (state = initialState, action) => {
//     // Define Reducers Here
// }

const reducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
    // Add other slices here
});

// console.log("Store.js Reducer----", reducer);


const store = configureStore({
    reducer
});

// console.log("Store.js Store-----------", store);


export default store;