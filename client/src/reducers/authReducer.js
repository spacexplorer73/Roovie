import {  
    LOGIN_REQUEST,  
    LOGIN_SUCCESS,  
    LOGIN_ERROR,  
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    LOGOUT
} from "../constants/actionTypes"

const initialState = {
    token: null,
    user: {
        username: '',
        email: '',
        userProfilePicture: ''
    },
    isAuthenticated: false,
    loading: false,
    userCreated: ""
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
                user: action.payload.user,
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
                userCreated: action.payload.userCreated
            }

        case REGISTRATION_ERROR:
            return action.payload;

        case UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                isSuccess: false
            }

        case UPDATE_SUCCESS:
            return { 
                ...state, 
                loading: false,
                user: action.payload.user,
                isSuccess: action.payload.isSuccess
            }
        
        case LOGOUT:
            return {
                ...initialState
            }
    }

    return state;
}

export default authReducer;