import { legacy_createStore ,applyMiddleware} from "redux";
import { data } from "./reducer";
import thunk from "redux-thunk";


export const store = legacy_createStore(data,applyMiddleware(thunk))