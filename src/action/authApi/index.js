import axios from "~/action/AxiosConfiguration"
import { toast } from "react-toastify"
import { authUrl } from "~/utils/ApiUrl"
import authSliceRedux, { setCredentials, logout } from "~/Redux/Auth/authSliceRedux"

export const doLogin = async (user, dispatch, navigate, from) => {
    try {
        const res = await axios.post(authUrl.login, user)

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(setCredentials(res.data))
            navigate(from, { replace: true })
        } else {
            toast.error(res.data.message, {

            })
        }
    }
    catch (error) {
        toast.error(error)
    }
}

export const doLogout = async (axiosPrivate, dispatch, navigate) => {
    try {
        const res = await axiosPrivate.post(authUrl.logout)

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(logout())
            navigate("/", { replace: true })
        } else {
            toast.success(res.data.message)
        }
    }
    catch (error) {
        toast.error(error)
    }
}