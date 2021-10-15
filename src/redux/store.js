

import {createStore, combineReducers} from 'redux'
import {userReducer} from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(combineReducers({
    user: userReducer,
}), composeWithDevTools())
