import * as api from "../api/index";
import {  
    LOGIN_REQUEST,
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,
    LOGOUT,
} from "../constants/actionTypes";

// signin action
export const login = (form) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LOGIN_REQUEST
            })
    
            // response, if connected to backend or not
            let res = await api.Login(form)
            
            const { token, admin } = res.data;
            localStorage.setItem('profile', token);
            localStorage.setItem('admin', JSON.stringify(admin));
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token, admin
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

// signup action
export const register = (formData, history) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: REGISTRATION_REQUEST
            })
        
            // response if connected to backend or not
            let res = await api.Register(formData)

            const { adminCreated } = res.data;
            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: { 
                    adminCreated 
                }
            })

            history.push('/');
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
export const isAdminAuthenticated = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('profile');
        try {
            if(token) {
                const admin = JSON.parse(localStorage.getItem('admin'));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        token, admin
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

// logout user
export const logoutUser = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch({
            type: LOGOUT
        })
    }
}