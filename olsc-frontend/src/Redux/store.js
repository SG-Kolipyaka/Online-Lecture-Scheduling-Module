
import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import {thunk} from "redux-thunk"
import { reducer as authreducer } from "./AuthReducer/reducer"
import { reducer as coursereducer } from "./AuthReducer/reducer"

const rootReducer=combineReducers({
authreducer ,   
coursereducer

})




export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))