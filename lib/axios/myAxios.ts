import axios from 'axios'
import { serverUrl } from '../../config/const'

export const defaultAxios = axios.create({
    baseURL: serverUrl,
    withCredentials: true,
})