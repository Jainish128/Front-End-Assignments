import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from 'redux-thunk';
// import thunk from "redux-thunk";

const thunkMiddleWare = [reduxThunk];

const store = createStore(rootReducer, applyMiddleware(...thunkMiddleWare));

export default store;
