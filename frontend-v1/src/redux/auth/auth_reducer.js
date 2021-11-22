import { AuthActionType } from "./auth_action_type";

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated:null,
    user:null
}


const AuthReducer = (state=initialState,action) => {

    const {type, payload} = action
    switch (type) {
        
        // set 1
        case AuthActionType.SIGNIN_SUCCESS:
            localStorage.setItem("access",payload.access)
            return {
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh,
            };
        case AuthActionType.SIGNIN_FAIL:
        case AuthActionType.LOGOUT:
        case AuthActionType.SIGNUP_FAIL:
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")

            return {
                ...state,
                isAuthenticated:false,
                access:null,
                refresh:null,
                user:null
            };

        // Set 2
        case AuthActionType.AUTHENTICATED_SUCCESS:
            localStorage.setItem("access",payload.access)
            return {
                ...state,
                isAuthenticated:true,
            };
        case AuthActionType.AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated:true,
            };

        // Set 3
        case AuthActionType.USER_LOADED_SUCCESS:
            return {
                    ...state,
                    user:payload
            };
        case AuthActionType.USER_LOADED_FAIL:
            return {
                ...state,
                user:null
            };
        
        case AuthActionType.ACTIVATION_SUCCESS:
        case AuthActionType.AUTHENTICATED_FAIL:
            return{
                ...state,
            }
        default:
            return state
    }
}


export default AuthReducer;