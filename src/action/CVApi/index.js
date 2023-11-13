import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { CVUrl } from '~/utils/ApiUrl'
import { toast } from 'react-toastify'
export const getAllCV = async (dispatch, axiosPrivate) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${CVUrl.getAllCV}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.data.success) {
            dispatch(successLoading())
            return res.data.data
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}
export const getCVbyId = async (axiosPrivate, id, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.get(`${CVUrl.getCVbyId}?id=${id}`)

        if (res.data.success) {
            dispatch(successLoading())
            return res.data.data
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}
export const deleteCV = async (axiosPrivate, id, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.delete(`${CVUrl.deleteCV}?id=${id}`)

        if (res.data.success) {
            dispatch(successLoading())
            return res.data.data
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}
export const downloadCV = async (axiosPrivate, id, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.get(`${CVUrl.downloadCV}?id=${id}`)

        if (res.data.success) {
            dispatch(successLoading())
            return res.data.data
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}

export const uploadCV = async (data, axiosPrivate, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'post',
            url: `${CVUrl.addCV}`,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        if (res.data.success) {
            dispatch(successLoading())
            return res.data.data
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}
