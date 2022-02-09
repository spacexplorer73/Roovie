import { combineReducers } from "redux";

import movie from "./movieReducer";
import request from "./requestReducer";
import auth from "./authReducer";
import mail from "./mailReducer";

const rootReducer = combineReducers({ movie, request, auth, mail })

export default rootReducer;