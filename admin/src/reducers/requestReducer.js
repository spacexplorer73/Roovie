import {  
    FETCH_REQUESTS_REQUEST,
    FETCH_REQUESTS_SUCCESS,
    FETCH_REQUEST_BY_ID_REQUEST,
    FETCH_REQUEST_BY_ID_SUCCESS,
    DELETE_REQUEST_REQUEST,
    DELETE_REQUEST_SUCCESS
} from "../constants/actionTypes"

const initialState = {
    loading: false,
    isRequestDeleted: false,
    requestDetails: [],
    requests: []
};

const requestReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_REQUEST_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_REQUEST_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                requestDetails: action.payload
            }

        case FETCH_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                requests: action.payload
            }

        case DELETE_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isRequestDeleted: true,
                requests: state.requests.filter((req) => req._id !== action.payload)
            }

        default:
            return state;
    }
}

export default requestReducer;