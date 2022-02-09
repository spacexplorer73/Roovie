import * as api from "../api/index";
import {
    FETCH_REQUESTS_REQUEST,
    FETCH_REQUESTS_SUCCESS,
    FETCH_REQUEST_BY_ID_REQUEST,
    FETCH_REQUEST_BY_ID_SUCCESS,
    DELETE_REQUEST_REQUEST,
    DELETE_REQUEST_SUCCESS
} from "../constants/actionTypes";

// fetch request (singular) action
export const fetchrequest = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_REQUEST_BY_ID_REQUEST
            })

            // response, if connected to backend or not
            const { data } = await api.FetchRequest(id);

            dispatch({
                type: FETCH_REQUEST_BY_ID_SUCCESS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

// fetch requests action
export const fetchRequests = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_REQUESTS_REQUEST
            })

            // response, if connected to backend or not
            const { data } = await api.FetchRequests();
            
            dispatch({
                type: FETCH_REQUESTS_SUCCESS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

// delete request action
export const deleteRequest = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: DELETE_REQUEST_REQUEST
            })

            // response, if connected to backend or not
            await api.DeleteRequest(id);

            dispatch({
                type: DELETE_REQUEST_SUCCESS,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
}
