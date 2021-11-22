import { PasswordActionType } from "./passwords_actions_types";

const initialState = {

}


const PasswordReducer = (state=initialState,action) => {

    const {type} = action
    switch (type) {

        // Set 1
        case PasswordActionType.PASSWORD_RESET_SUCCESS:
            return {
                ...state,
            };
        case PasswordActionType.PASSWORD_RESET_FAIL:
            return {
                ...state,
            };

        // Set 2
        case PasswordActionType.PASSWORD_RESET_CONFIRM_SUCCESS:
            return {
                ...state,
            };
        case PasswordActionType.SIGNIN_FAIL:
            return {
                ...state,
            };
            
        default:
            return state         
    }
}


export default PasswordReducer;