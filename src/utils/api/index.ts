import axios, { AxiosError } from "axios";
import { BASEURL } from "../common/apiConst";
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL: BASEURL,
})

api.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('accessToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default api;

export const handleApiError = (error: unknown): string => {
    const err = error as AxiosError<{ message?: string }>;
    return err.response?.data?.message || err.message || "Something went wrong"
}