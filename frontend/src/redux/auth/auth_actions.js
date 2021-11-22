import axios from "axios"
import { AuthActionType } from "./auth_action_type"

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem("access")) {
        const config = {
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            }
        };

        const body = JSON.stringify({token:localStorage.getItem("access")})

        try {
            const response = axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,body,config)
            if (response.data.code !=="token_not_valid") {
                dispatch({
                    type:AuthActionType.AUTHENTICATED_SUCCESS
                })
            } else {
                dispatch({
                    type:AuthActionType.AUTHENTICATED_FAIL
                })
            }
        } catch (error) {
            dispatch({
                type:AuthActionType.AUTHENTICATED_FAIL
            })
        }   
    }else{
        dispatch({
            type:AuthActionType.AUTHENTICATED_FAIL
        })
    }
}



export const signUp = (username, email, password, re_password) => async dispatch => {
    // Configure header file
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    };

    // convert data into string to send back to server
    const body = JSON.stringify({username, email, password, re_password});

    await axios
        .post(`${process.env.REACT_APP_API_URL}/auth/users/`,body,config)
        .then(response => {
            dispatch({
                type:AuthActionType.SIGNUP_SUCCESS,
                payload:response.data
            })
        })
        .catch(error => {
            console.log("error",error.response.data)
            dispatch({
                type:AuthActionType.SIGNUP_FAIL
            })
        })
}

export const verifyRegistration = (uid,token) => async dispatch => {
    // Configure header file
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    };

    // convert data into string to send back to server
    const body = JSON.stringify({uid, token});

    try {
        axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`,body,config)
        dispatch({
            type:AuthActionType.ACTIVATION_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:AuthActionType.ACTIVATION_FAIL
        })
    }
}



export const load_user = () => async dispatch => {
    if (localStorage.getItem("access")) {
        const config = {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`JWT ${localStorage.getItem("access")}`,
                "Accept":"application/json",
            }
        };

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`,config)
            dispatch({
                type:AuthActionType.USER_LOADED_SUCCESS,
                payload:response.data
            })
        } catch (error) {
            dispatch({
                type:AuthActionType.USER_LOADED_FAIL
            })
        }
    } else{
        dispatch({
            type:AuthActionType.USER_LOADED_FAIL
        })
    }
}


export const signIn = (username,password) => async dispatch => {
    // Configure header file
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    };

    // convert data into string to send back to server
    const body = JSON.stringify({username, password});

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`,body,config)
        console.log(response)
        dispatch({
            type:AuthActionType.SIGNIN_SUCCESS,
            payload:response.data
        })

        dispatch(load_user())
    } catch (error) {
        dispatch({
            type:AuthActionType.SIGNIN_FAIL
        })
    }
}


export const logout = () => dispatch => {
    dispatch({
        type:AuthActionType.LOGOUT
    })
}