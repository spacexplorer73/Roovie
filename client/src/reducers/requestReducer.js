import {
    CREATE_REQUEST_REQUEST,
    CREATE_REQUEST_SUCCESS
} from "../constants/actionTypes";

const initialState = {
    loading: false,
    isSubmit: false
}

export default (state = initialState, action) => {

    switch(action.type) {

        case CREATE_REQUEST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isSubmit: true
            };

        default:
            return state;

    }
}