import axios from "axios"
import { SIGNIN_FAILED, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"

let baseUrl = "https://smoggy-frog-robe.cyclic.app"




export const SignupFun = (formData) => (dispatch) => {

    dispatch({ type: SIGNUP_REQUEST })

    return axios.post(`${baseUrl}/dealers/register`, formData).then((res) => {
        dispatch({ type: SIGNUP_SUCCESS })
        localStorage.setItem("signupMsg", res.data.msg)
    }).catch((err) => {
        dispatch({ type: SIGNUP_FAILED })
    })
}

export const SigninFun = (formData) => (dispatch) => {

    dispatch({ type: SIGNIN_REQUEST })

    return axios.post(`${baseUrl}/dealers/login`, formData).then((res) => {
        dispatch({ type: SIGNIN_SUCCESS, payload: res.data.token })
        localStorage.setItem("signinMsg", res.data.msg)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("dealerName", res.data.name)
    }).catch((err) => {
        dispatch({ type: SIGNIN_FAILED })
    })
}
