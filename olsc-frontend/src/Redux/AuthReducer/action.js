import { LOGIN_FAILUER, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionTypes";
import axios from "axios";  

export const login = (userData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post("http://localhost:8080/user/login", userData)
        .then((res) => {
            console.log(res)
            if (res.data.role === "admin") {
                dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token, isAdmin: true } });
                localStorage.setItem("token", res.data.token);
            } else if (res.data.role === "instructor") {
                dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token, isInstructor: true } });
                localStorage.setItem("token", res.data.token);
            }
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILUER });
        });
};
