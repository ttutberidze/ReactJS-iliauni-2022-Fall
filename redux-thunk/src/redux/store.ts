import { createStore, applyMiddleware } from "redux";
import postReducer from './reducers/post';
import thunk from 'redux-thunk';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(postReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;

