import { COURSE_FAILUER,COURSE_SUCCESS,COURSE_REQUEST } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    data:[],
    message:""
};

export const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case COURSE_REQUEST:
            return { ...state, isLoading: true };
        case COURSE_SUCCESS:
             return { ...state, isLoading: false ,message:payload};
        case COURSE_FAILUER:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
};
