import axios from "axios"
import { API_FAILED, API_GET_SUCCESS, API_POST_SUCCESS, API_REQUEST } from "./actionTypes"


let baseUrl = "http://localhost:8080"

export const addDealFun = (formData) => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.post(`${baseUrl}/market/add`, formData, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_POST_SUCCESS })
        localStorage.setItem("marketmsg", res.data.msg);
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

export const getDealFun = () => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/market/`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

