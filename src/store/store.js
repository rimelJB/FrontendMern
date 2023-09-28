import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from "../../src/reducer/itemReducer";
import userReducer from "../../src/reducer/userReducer";
import shopcardReducer from "../../src/reducer/shopcardReducer";

const rootReducer = combineReducers({itemReducer,userReducer,shopcardReducer});
const middleware = [thunk];
const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__()
    :f=>f
  )
);

export default store;