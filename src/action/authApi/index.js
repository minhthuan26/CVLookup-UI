import axios from '~/action/AxiosConfiguration'
import { toast } from 'react-toastify'
import { authUrl } from '~/utils/ApiUrl'
import { setCredentials, logout } from '~/Redux/Auth/authSlice'
import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { persistor } from '~/Redux/store'
import 'react-toastify/dist/ReactToastify.css'

export const doLogin = async (user, dispatch, navigate, from) => {
    dispatch(inLoading())
    try {
        const res = await axios.post(authUrl.login, user)

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(setCredentials(res.data))
            navigate(from, { replace: true })
        } else {
            if (typeof res.data.message !== 'string') {
                res.data.message.forEach((messageList) => {
                    messageList.forEach((messages) => {
                        messages.forEach((message) => {
                            toast.error(message)
                        })
                    })
                })
            } else {
                toast.error(res.data.message)
            }
        }
        dispatch(successLoading())
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const doLogout = async (axiosPrivate, dispatch, navigate, from) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.post(authUrl.logout)

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(logout())
            navigate(from)
        } else {
            console.log(typeof res.data.message)
            if (typeof res.data.message !== 'string') {
                res.data.message.forEach((messageList) => {
                    messageList.forEach((messages) => {
                        messages.forEach((message) => {
                            toast.error(message)
                        })
                    })
                })
            } else {
                toast.error(res.data.message)
            }
        }
        persistor.purge()
        dispatch(successLoading())
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const postRestoreRefreshToken = async (userId) => {
    try {
        const res = await axios.post(authUrl.restoreRefreshToken + userId)
    } catch (error) {
        toast.error(error.message)
    }
}

export const doRegisterCandidate = async (user, dispatch, navigate, from) => {
    dispatch(inLoading())
    try {
        const res = await axios.post(authUrl.registerCandidate, user)

        if (res.data.success) {
            toast.success(res.data.message)
            navigate(0)
        } else {
            if (typeof res.data.message !== 'string') {
                res.data.message.forEach((messageList) => {
                    messageList.forEach((messages) => {
                        messages.forEach((message) => {
                            toast.error(message)
                        })
                    })
                })
            } else {
                toast.error(res.data.message)
            }
        }
        dispatch(successLoading())
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const doRegisterEmployer = async (user, dispatch, navigate, from) => {
    dispatch(inLoading())
    try {
        const res = await axios.post(authUrl.registerEmployer, user)

        if (res.data.success) {
            toast.success(res.data.message)
            navigate(0)
        } else {
            if (typeof res.data.message !== 'string') {
                res.data.message.forEach((messageList) => {
                    messageList.forEach((messages) => {
                        messages.forEach((message) => {
                            toast.error(message)
                        })
                    })
                })
            } else {
                toast.error(res.data.message)
            }
        }
        dispatch(successLoading())
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}
