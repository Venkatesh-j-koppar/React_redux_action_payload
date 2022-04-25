import Reducer from "../redux/bagReducer"
import logger from "redux-logger"
import {createStore,applyMiddleware} from 'redux'
//const redux=require('redux');

const store=createStore(Reducer,applyMiddleware(logger));


export default store;