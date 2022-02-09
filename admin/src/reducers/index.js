import { combineReducers } from "redux";

import auth from "./authReducer";
import request from "./requestReducer";
import movie from "./movieReducer";

const rootReducer = combineReducers({ auth, request, movie})

export default rootReducer