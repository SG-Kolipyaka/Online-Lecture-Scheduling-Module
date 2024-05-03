import {INST_REQUEST,INST_SUCCESS,INST_FAILUER, LOGIN_FAILUER,LOGIN_SUCCESS,LOGIN_REQUEST,SIGNUP_FAILUER,SIGNUP_REQUEST,SIGNUP_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    token: "",     
    isAdmin: false,
    isInstructor: false,
    signupsuccess:"",
    data:[]
};

export const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: payload.token,
                isAdmin: payload.isAdmin || false,
                isInstructor: payload.isInstructor || false
            };
        case LOGIN_FAILUER:
            return { ...state, isLoading: false, isError: true };
        case SIGNUP_REQUEST:
            return { ...state, isLoading: true };
        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false ,signupsuccess:payload};
        case SIGNUP_FAILUER:
            return { ...state, isLoading: false, isError: true };
        case INST_REQUEST:
            return { ...state, isLoading: true };
        case INST_SUCCESS:
             return { ...state, isLoading: false ,data:payload};
        case INST_FAILUER:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
};
