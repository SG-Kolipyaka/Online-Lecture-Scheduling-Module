
import {INST_REQUEST,INST_SUCCESS,INST_FAILUER, LOGIN_FAILUER, LOGIN_SUCCESS, LOGIN_REQUEST,SIGNUP_FAILUER ,SIGNUP_REQUEST,SIGNUP_SUCCESS} from "./actionTypes";
import axios from "axios";  


export const login = (userData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post("http://localhost:8080/user/login", userData)
        .then((res) => {
            if (res.data.role === "admin") {
                dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token, isAdmin: true } });
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("isAdmin", true);
                localStorage.setItem("user", JSON.stringify(res.data.admin));
            } else if (res.data.role === "instructor") {
                dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token, isInstructor: true } });
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("isInstructor", true);
                localStorage.setItem("user", JSON.stringify(res.data.instructor));
            }
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILUER });
        });
};



export const signup = (userData) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    return axios.post("http://localhost:8080/user/register", userData)
        .then((res) => {
        dispatch({type:SIGNUP_SUCCESS,payload:res.data.message})
        })
        .catch((err) => {
            dispatch({ type: SIGNUP_FAILUER });
        });
};



export const assignedinstructor = (id) => (dispatch) => {
    dispatch({ type: INST_REQUEST });

    const token = localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': `${token}`
        }
    };

    return axios.get(`http://localhost:8080/user/assigned/${id}`, config)
        .then((res) => {
            dispatch({ type: INST_SUCCESS, payload: res.data.data });
        })
        .catch((err) => {
            dispatch({ type: INST_FAILUER });
        });
};