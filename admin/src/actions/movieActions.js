import * as api from "../api/index";
import {
    ADD_MOVIE_REQUEST, 
    ADD_MOVIE_SUCCESS,
} from "../constants/actionTypes";

// add movie action
export const addMovie = (form, history) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ADD_MOVIE_REQUEST
            })

            // response, if connected to backend or not
            const { data } = await api.AddMovie(form);
            
            history.push('/dashboard');

            dispatch({
                type: ADD_MOVIE_SUCCESS,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}