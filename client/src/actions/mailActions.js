import * as api from "../api/index";
import {
    SENDMAIL_REQUEST,
    SENDMAIL_SUCCESS
} from "../constants/actionTypes";

export const sendMail = (newsletterData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SENDMAIL_REQUEST
            })

            const { data } = await api.SendMail(newsletterData);
            
            dispatch({
                type: SENDMAIL_SUCCESS,
                payload: {
                    sendMailSuccess: data 
                }
            })
            
        } catch (error) {
            console.log(error);
        }
    }
}