import axios from "~/action/AxiosConfiguration"
import { toast } from "react-toastify"
import { authUrl } from "~/utils/ApiUrl"
import { setCredentials, logout } from "~/Redux/Auth/authSlice"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { connection } from "~/utils/HubConnection"
import { persistor } from "~/Redux/store"

const connect = connection()

export const doLogin = async (user, dispatch, navigate, from) => {
    dispatch(inLoading())
    try {
        const res = await axios.post(authUrl.login, user)

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(setCredentials(res.data))
            navigate(from, { replace: true })

            connect.start().then(() => {
                connect.invoke("AddHubConnection", res.data.data.user.id)
            })
        } else {
            toast.error(res.data.message)
        }
        dispatch(successLoading())
    }
    catch (error) {
        toast.error(error)
    }
}

export const doLogout = async (axiosPrivate, dispatch, navigate) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.post(authUrl.logout)

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(logout())
            navigate("/", { replace: true })
            connect.stop()
        } else {
            toast.success(res.data.message)
        }
        dispatch(successLoading())
        persistor.purge()
    }
    catch (error) {
        toast.error(error)
    }
}