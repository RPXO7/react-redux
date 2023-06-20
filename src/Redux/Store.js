import { createStore, combineReducers } from "redux";
import todoReducer from './reducers/todo-reducer'

const rootReducer = combineReducers ({todos:todoReducer, })
const store = createStore(rootReducer)
 export default store