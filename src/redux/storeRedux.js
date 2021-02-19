import menuReducer from "./menuReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./AppContentReducer";
import authReducer from "./authReducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
const { createStore, combineReducers } = require("redux");
const { default: chatReducer } = require("./chatReducer");
const { default: contentReducer } = require("./contentReducer");



let reducer = combineReducers ({ 
    dataContent: contentReducer, 
    dataChat: chatReducer, 
    dataMenu: menuReducer, 
    dataPosts: postsReducer,
    dataProfile: profileReducer,
    dataAuth: authReducer,

})
let storeRedux;
storeRedux = createStore(reducer, applyMiddleware(thunkMiddleware));
export default storeRedux
