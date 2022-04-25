import penReducer from "./pen/penReducer"

const redux=require("redux");
const createStore=redux.createStore;
const store=createStore(penReducer);

export default store;

