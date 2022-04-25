import bookReducer from './book/bookReducer'
const redux=require('redux');
const creatStore=redux.createStore;
const store=creatStore(bookReducer);

export default store;
