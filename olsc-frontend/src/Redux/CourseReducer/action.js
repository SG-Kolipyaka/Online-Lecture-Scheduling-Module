import { COURSE_FAILUER,COURSE_SUCCESS,COURSE_REQUEST,COURSE_SUCCESS_INST,COURSE_SUCCESS_ASSIGN } from "./actionTypes";
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



export const getinstructors=(dispatch)=>{
    dispatch({ type: COURSE_REQUEST });  
    return axios.get("http://localhost:8080/user/getinstructors")
        .then((res) => {
            console.log(res.data.data)
            dispatch({type: COURSE_SUCCESS_INST, payload: res.data.data});
        })
        .catch((err) => {
            dispatch({ type: COURSE_FAILUER });
        });
}


export const assignlecture = (userData) => (dispatch) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': token
        }
    };
    dispatch({ type: COURSE_REQUEST });  
    return axios.post("http://localhost:8080/courses/assignlectures", userData, config)
        .then((res) => {
            console.log(res.data.message)
            dispatch({type: COURSE_SUCCESS_ASSIGN, payload: res.data.message});
        })
        .catch((err) => {
            dispatch({ type: COURSE_FAILUER });
        });
};