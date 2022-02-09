import {  
    ADD_MOVIE_REQUEST,
    ADD_MOVIE_SUCCESS
} from "../constants/actionTypes"

const initialState = {
    loading: false,
    newMovie: [],
};

const requestReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ADD_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                newMovie: action.payload.data
            };

        default:
            return state;
    }
}

export default requestReducer;