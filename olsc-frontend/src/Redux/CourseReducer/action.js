import { COURSE_FAILUER,COURSE_SUCCESS,COURSE_REQUEST } from "./actionTypes";
import axios from "axios";  


export const getcourses = (dispatch) => {
    dispatch({ type: COURSE_REQUEST });

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': `${token}`
        }
    };
    return axios.get(`http://localhost:8080/courses/getcourses`, config)
        .then((res) => {
            dispatch({ type: COURSE_SUCCESS, payload: { data:res.data.data } });
        })
        .catch((err) => {
            dispatch({ type: COURSE_FAILUER });
        });
};




export const createcourses = (userData) => (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': token
        }
    };
    dispatch({ type: COURSE_REQUEST });  
    return axios.post("http://localhost:8080/courses/addcourses", userData, config)
        .then((res) => {
            dispatch({type: COURSE_SUCCESS, payload: res.data.message});
        })
        .catch((err) => {
            dispatch({ type: COURSE_FAILUER });
        });
};