import axios from "axios";
import { PasswordActionType } from "./passwords_actions_types";

export const reset_password = (email) => async dispatch=> {
    const config = {
        headers:{
            "Content-Type":"application/json",
        }
    };

    const body = JSON.stringify({email})
    console.log("body",body)

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,body,config)

        dispatch({
            type:PasswordActionType.PASSWORD_RESET_SUCCESS
        })
        
    } catch (error) {
        dispatch({
        type:PasswordActionType.PASSWORD_RESET_FAIL
        })
    }
}


export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers:{
            "Content-Type":"application/json",
        }
    };

    const body = JSON.stringify({uid,token,new_password,re_new_password})

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,body,config)
        dispatch({
            type:PasswordActionType.PASSWORD_RESET_CONFIRM_SUCCESS
        })
        
    } catch (error) {
        dispatch({
            type:PasswordActionType.PASSWORD_RESET_CONFIRM_FAIL
        })
    }
}