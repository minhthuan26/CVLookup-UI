import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { jobFormUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'
import { toast } from 'react-toastify'
import { setJobForms } from '~/Redux/JobForm/JobFormSlice'

export const doGetAllJobForm = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(jobFormUrl.getAll)

        if (res.data.success) {
            dispatch(setJobForms(res.data))
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
            `${jobFormUrl.deleteForm}?id=${id}`
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

            url: `${jobFormUrl.addForm}`,
            data: {
                form: data,
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
        const res = await axiosPrivate.get(`${jobFormUrl.getById}?id=${id}`)

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
            url: `${jobFormUrl.updateForm}?id=${id}`,
            method: 'patch',
            data: {
                form: data,
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
