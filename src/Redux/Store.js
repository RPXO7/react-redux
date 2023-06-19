import { createStore, combineReducers } from "redux";
import todoReducer from './reducers/todo-reducer'
const rootReducer = combineReducers ({todoReducer, })

const store = createStore()
 export default store