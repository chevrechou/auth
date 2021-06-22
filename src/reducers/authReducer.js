

import { combineReducers } from 'redux';

import { REHYDRATE } from 'redux-persist';

export const initState = {
    name: "",
    signedIn: false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        // case REHYDRATE:
        //     console.log(action)
        //     return {
        //         ...state,
        //         name: action.payload.name,
        //         signedIn: action.payload.signedIn
        //     };
        case "FETCH":
            return {
                ...state,
                name: action.user.name,
                signedIn:true
            };

        case "SIGN_OUT":
            return {
                ...state,
                name: "",
                signedIn:false
            };

        case "SIGN_IN":
            return {
                ...state,
                name: action.name,
                signedIn:true
            };

        case "NEW_USER":
            return {
                name: "mike",
                signedIn:true
            };
        default:
            return state;
    }
}
export default authReducer;
