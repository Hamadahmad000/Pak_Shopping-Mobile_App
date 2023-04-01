import { combineReducers } from "redux";
import MyReducer from "./MyReducer";
import WishReducer from "./WishReducer";
import AddressReducer from "./AddressReducer";
const rootReducer = combineReducers({
    MyReducer,
    WishReducer,
    AddressReducer
})

export default rootReducer