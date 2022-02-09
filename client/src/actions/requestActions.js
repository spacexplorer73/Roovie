import * as api from "../api/index";
import { 
    CREATE_REQUEST_REQUEST,
    CREATE_REQUEST_SUCCESS
} from "../constants/actionTypes";

// create a request
export const createRequest = (form) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_REQUEST_REQUEST
            })

            // response, if connected to backend or no
            const { data } = await api.CreateRequest(form);
            console.log(data)
            dispatch({
                type: CREATE_REQUEST_SUCCESS
            })
        } catch (error) {
            console.log(error)
        }
    } 
}