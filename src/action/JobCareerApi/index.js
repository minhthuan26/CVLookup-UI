import { setJobCareers } from '~/Redux/JobCareer/JobCareerSlice'
import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { jobCareerUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'
import { toast } from 'react-toastify'

export const doGetAllJobCareer = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(jobCareerUrl.getAll)

        if (res.data.success) {
            dispatch(setJobCareers(res.data))
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

export const doDeleteCareer = async (dispatch, axiosPrivate, id) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.delete(
            `${jobCareerUrl.deleteCareer}?id=${id}`
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
export const doAddCareer = async (dispatch, axiosPrivate, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'post',

            url: `${jobCareerUrl.addCareer}`,
            data: {
                career: data,
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
        const res = await axiosPrivate.get(`${jobCareerUrl.getById}?id=${id}`)

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
            url: `${jobCareerUrl.updateCareer}?id=${id}`,
            method: 'patch',
            data: {
                career: data,
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
