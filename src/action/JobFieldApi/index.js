import { setJobFields } from '~/Redux/JobField/JobFieldSlice'
import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { jobFieldUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'
import { toast } from 'react-toastify'

export const doGetAllJobField = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(jobFieldUrl.getAll)

        if (res.data.success) {
            dispatch(setJobFields(res.data))
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
export const doDelete = async (dispatch, axiosPrivate, id) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.delete(
            `${jobFieldUrl.deleteField}?id=${id}`
        )

        if (res.data.success) {
            toast.success(res.data.message)
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
export const doAdd = async (dispatch, axiosPrivate, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'post',

            url: `${jobFieldUrl.addField}`,
            data: {
                field: data,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.data.success) {
            toast.success(res.data.message)
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
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const doGetById = async (dispatch, axiosPrivate, id) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.get(`${jobFieldUrl.getById}?id=${id}`)

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
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const doUpdate = async (dispatch, axiosPrivate, id, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${jobFieldUrl.updateField}?id=${id}`,
            method: 'patch',
            data: {
                field: data,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.data.success) {
            toast.success(res.data.message)
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
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}
