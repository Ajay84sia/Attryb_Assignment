import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "./authReducer/reducer"
import { reducer as marketplaceReducer } from "./marketplaceReducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    marketplaceReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))