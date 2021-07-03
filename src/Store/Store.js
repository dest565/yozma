import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import ListReducer from './reducers/Listreducer.js';

const middleWares = [thunk];


let store = createStore(
  combineReducers({'List': ListReducer}),
  {},
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
