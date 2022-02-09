import {  
    LOGIN_REQUEST,  
    LOGIN_SUCCESS,  
    LOGIN_ERROR,  
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,
    LOGOUT
} from "../constants/actionTypes"

const initialState = {
    token: null,
    admin: {
        username: '',
        email: '',
        adminProfilePicture: ''
    },
    isAuthenticated: false,
    loading: false,
    adminCreated: ''
};

const authReducer = (state = initialState, action) => {

    // Parameter to check where the bug is 👇
            //console.log(action)
    // or instead use "redux-devtools-extension" for clarity 
            // (See Store for futher details)

    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state, 
                admin: action.payload.admin,
                token: action.payload.token,
                loading: false,
                isAuthenticated: true
            }

        case LOGIN_ERROR:
            return action.payload;


        case REGISTRATION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                adminCreated: action.payload.adminCreated
            }

        case REGISTRATION_ERROR:
            return action.payload;
   
        case LOGOUT:
            return {
                ...initialState
            }
    }

    return state;
}

export default authReducer;