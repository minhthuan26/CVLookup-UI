import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { JobPositionUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'
import { toast } from 'react-toastify'
import { setJobPosition } from '~/Redux/JobPosition/JobPositionSlice'

export const doGetAllJobPosition = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(JobPositionUrl.getAll)

        if (res.data.success) {
            dispatch(setJobPosition(res.data))
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
            `${JobPositionUrl.deletePosition}?id=${id}`
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

            url: `${JobPositionUrl.addPosition}`,
            data: {
                position: data,
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
        const res = await axiosPrivate.get(`${JobPositionUrl.getById}?id=${id}`)

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
            url: `${JobPositionUrl.updatePosition}?id=${id}`,
            method: 'patch',
            data: {
                position: data,
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
