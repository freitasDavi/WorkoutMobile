import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getState, setState } from "../stores/AuthStore";


export const baseApi = axios.create({
    baseURL: "https://localhost:7140/api"
});

baseApi.interceptors.request.use(
    async config => {
        const authToken = getState()

        config.headers.Authorization = `Bearer {authToken}`;
        config.headers.Accept = "application/json";
        config.headers["Content-Type"] = "application/json";

        return config;
    },
    error => Promise.reject(error)
);

baseApi.interceptors.response.use((response) => {
    return response
}, async error => {
    if (error instanceof AxiosError) {
        const originalRequest = error.config as InternalAxiosRequestConfig<any>;

        if (error.response?.status === 401) {
            if (error.response.data?.error.includes("User Not found")) {
                return Promise.reject(error);
            }

            const refreshToken = getState().refreshToken;

            const response = await baseApi.post("/auth/refreshtoken", {
                refreshToken
            });

            setState({
                refreshToken: response.data.refreshToken,
                token: response.data.accessToken
            })

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;

            return baseApi(originalRequest);
        }

        return Promise.reject(error);
    }

    return Promise.reject(error);
})