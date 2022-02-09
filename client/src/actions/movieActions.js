import * as api from "../api/index";
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
} from "../constants/actionTypes";

export const fetchMovie = (id, history) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_MOVIE_REQUEST
            })

            // response, if connected to backend or not
            const { data } = await api.FetchMovie(id);

            history.push(`/movie/${id}`);
            
            dispatch({
                type: FETCH_MOVIE_SUCCESS,
                payload: {
                    movieDetails: data
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchPreview = (page) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_PREVIEW_REQUEST
            })

            // response, if connected to backend or not
            const { data: { data } } = await api.FetchPreview(page);
            
            dispatch({
                type: FETCH_PREVIEW_SUCCESS,
                payload: { 
                    data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchAllMovies = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_ALL_MOVIES_REQUEST
            })

            // response, if connected to backend or not
            const { data: { data } } = await api.FetchAllMovies();
            
            dispatch({
                type: FETCH_ALL_MOVIES_SUCCESS,
                payload: { 
                    data 
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchLimitedMovies = (page) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_LIMITED_MOVIES_REQUEST
            })

            // response, if connected to backend or not
            const { data: { data, currentPage, totalNumberOfPages } } = await api.FetchLimitedMovies(page);
            
            dispatch({
                type: FETCH_LIMITED_MOVIES_SUCCESS,
                payload: { 
                    data, currentPage, totalNumberOfPages 
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchMoviesBySearch = (searchQuery) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_MOVIE_BY_SEARCH_REQUEST
            })

            // response, if connected to backend or not
            const { data: { data } } = await api.FetchMoviesBySearch(searchQuery);

            dispatch({
                type: FETCH_MOVIE_BY_SEARCH_SUCCESS,
                payload: {
                    data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const findMovies = (searchQuery) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FIND_MOVIE_REQUEST
            })

            // response, if connected to backend or not
            const { data: { data } } = await api.FindMovies(searchQuery);

            dispatch({
                type: FIND_MOVIE_SUCCESS,
                payload: {
                    data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const likeMovie = (id) => { 
    return async (dispatch) => {
        const token = localStorage.getItem('profile');
        
        try {
            const { data } = await api.LikeMovie(id, token);

            dispatch({ 
                type: LIKE, 
                payload: data 
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const postReview = (value, id) => {
    return async (dispatch) => {
        try {
            const { data } = await api.PostReview(value, id);
            
            dispatch({
                type: COMMENT,
                payload: data
            })

            return data.review;
        } catch (error) {
            console.log(error)
        }
    }
}