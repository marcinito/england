import { combineReducers,applyMiddleware } from "redux";        
import keyReducer from "./reducers/keyReducer";
import wordsReducer from "./reducers/wordsReducer";
import thunk from 'redux-thunk'


const rootReducer=combineReducers({
    key:keyReducer,
    words:wordsReducer
},applyMiddleware(thunk))
export default rootReducer