import { combineReducers } from "redux";
import MyReducer from "./MyReducer";
import WishReducer from "./WishReducer";
const rootReducer = combineReducers({
    MyReducer,
    WishReducer
})

export default rootReducer