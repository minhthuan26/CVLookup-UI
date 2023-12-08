import { toast } from 'react-toastify'
import { setExperiences } from '~/Redux/Experience/ExperienceSlice'
import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { experienceUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'

export const doGetAllExperience = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(experienceUrl.getAllExperience)

        if (res.data.success) {
            dispatch(setExperiences(res.data))
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

export const doDeleteExperience = async (dispatch, axiosPrivate, id) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.delete(
            `${experienceUrl.deleteExperience}?id=${id}`
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
export const doAddExperience = async (dispatch, axiosPrivate, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'post',

            url: `${experienceUrl.addExperience}`,
            data: {
                exp: data,
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
        const res = await axiosPrivate.get(`${experienceUrl.getById}?id=${id}`)

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
            url: `${experienceUrl.updateExperience}?id=${id}`,
            method: 'patch',
            data: {
                exp: data,
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
