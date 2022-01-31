import { combineReducers,applyMiddleware } from "redux";        
import keyReducer from "./reducers/keyReducer";



const rootReducer=combineReducers({
    key:keyReducer,
})
export default rootReducer