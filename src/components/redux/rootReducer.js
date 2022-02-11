import { combineReducers,applyMiddleware } from "redux";        
import keyReducer from "./reducers/keyReducer";
import wordsReducer from "./reducers/wordsReducer";
import thunk from 'redux-thunk'
import exitInfoReducer from "./reducers/exitInfoReducer";


const rootReducer=combineReducers({
    key:keyReducer,
    words:wordsReducer,
    exit:exitInfoReducer
},applyMiddleware(thunk))
export default rootReducer