import axios from 'axios'
import { defaultUrl } from '~/utils/ApiUrl'

export default axios.create({
    baseURL: defaultUrl,
})

export const axiosPrivate = axios.create({
    baseURL: defaultUrl,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
})
