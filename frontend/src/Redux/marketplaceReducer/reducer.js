import { API_FAILED, API_GET_SUCCESS, API_POST_SUCCESS, API_REQUEST, API_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    marketData: [],
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case API_REQUEST:
            return { ...state, isLoading: true }

        case API_POST_SUCCESS:
            return { ...state, isLoading: false }

        case API_GET_SUCCESS:
            return { ...state, isLoading: false, marketData: [...payload] }

        case API_FAILED:
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }
}