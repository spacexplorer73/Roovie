import { 
    FETCH_MOVIE_REQUEST, 
    FETCH_MOVIE_SUCCESS,
    FETCH_PREVIEW_REQUEST,
    FETCH_PREVIEW_SUCCESS,
    FETCH_ALL_MOVIES_REQUEST,
    FETCH_ALL_MOVIES_SUCCESS,
    FETCH_LIMITED_MOVIES_REQUEST,
    FETCH_LIMITED_MOVIES_SUCCESS,
    FETCH_MOVIE_BY_SEARCH_REQUEST,
    FETCH_MOVIE_BY_SEARCH_SUCCESS,
    FIND_MOVIE_REQUEST,
    FIND_MOVIE_SUCCESS,
    COMMENT,
    LIKE
} from "../constants/actionTypes"

const initialState = {
    movies: [],
    preview: [],
    allM: [],
    findMovie: [],
    loading: false
}

export default (state = initialState, action) => {

    switch(action.type) {

        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movieDetails: action.payload.movieDetails
            };

        case FETCH_ALL_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_ALL_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                allM: action.payload.data
            };

        case FETCH_LIMITED_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_LIMITED_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.data,
                currentPage: action.payload.currentPage,
                totalNumberOfPages: action.payload.totalNumberOfPages
            };

        case FETCH_PREVIEW_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PREVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                preview: action.payload.data
            };

        case FETCH_MOVIE_BY_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_MOVIE_BY_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.data
            };

        case FIND_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FIND_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                findMovie: action.payload.data
            };

        case LIKE:
            return {
                ...state,
                movieDetails: (state.movieDetails._id === action.payload._id) ? action.payload : state.movieDetails
            }
        
        case COMMENT: 
            return {
                ...state,
                movieDetails: (state.movieDetails._id === action.payload._id) ? action.payload : state.movieDetails
            }

        default:
            return state;

    }
}