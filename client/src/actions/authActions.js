import * as api from "../api/index"
import {  
    LOGIN_REQUEST,
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    LOGOUT,
} from "../constants/actionTypes"

// signin actions
export const login = (formData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LOGIN_REQUEST
            })
    
            // response, if connected to backend or not
            let res = await api.Login(formData)
    
            const { token, user } = res.data;
            localStorage.setItem('profile', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data
            })
            console.log(error)
        }
        
    }
}

// signup actions
export const register = (formData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: REGISTRATION_REQUEST
            })
        
            // response if connected to backend or not
            let res = await api.Register(formData)
        
            const { userCreated } = res.data;
            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: { userCreated }
            })
        } catch (error) {
            dispatch({
                type: REGISTRATION_ERROR,
                payload: error.response.data
            })
            console.log(error)
        }
        
    }
        
}

// Restrict user from directing to signup/signin after authentication
export const isUserAuthenticated = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('profile');
        try {
            if(token) {
                const user = JSON.parse(localStorage.getItem('user'));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        token, user
                    }
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data
            })
            console.log(error)
        }
    }
}

// Update User Profile
export const updateUserProfile = (id, userData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_REQUEST
            })
            const { data: { user, isSuccess } } = await api.UpdateUserProfile(id, userData);
            
            dispatch({ 
                type: UPDATE_SUCCESS,   
                payload: { 
                    user, 
                    isSuccess 
                }
            })

            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.log(error)
        }
    }
}

// logout user
export const logoutUser = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch({
            type: LOGOUT
        })
    }
}