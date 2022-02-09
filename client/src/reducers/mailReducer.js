import {  
    SENDMAIL_REQUEST,
    SENDMAIL_SUCCESS
} from "../constants/actionTypes"

const initialState = {
    loading: false,
};

const mailReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SENDMAIL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SENDMAIL_SUCCESS:
            return {
                ...state, 
                loading: false,
                sendMailSuccess: action.payload.sendMailSuccess
            }
    }

    return state;
}

export default mailReducer;