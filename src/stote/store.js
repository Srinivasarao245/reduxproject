import { createStore,combineReducers } from "redux";
import CounterReducer from "./counter.Reduce";
import todoReducer from "./todoReduce";
import productReducer from "./productReducer";

var store = createStore(combineReducers({CounterReducer,todoReducer,productReducer}))
export default store;