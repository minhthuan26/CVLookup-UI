import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { recruitmentUrl } from '~/utils/ApiUrl'
import axios from '~/action/AxiosConfiguration'
import { toast } from 'react-toastify'

export const getNewestJob = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios({
            url: `${recruitmentUrl.getNewestJob}`,
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

export const doGetAllRecruitment = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios({
            url: `${recruitmentUrl.getAllRecruitment}`,
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

export const doGetRecruitmentDetail = async (
    recruitmentId,
    dispatch,
    navigate
) => {
    dispatch(inLoading())
    try {
        const res = await axios({
            url: `${recruitmentUrl.getJobDetailById + '?id=' + recruitmentId}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.data.success) {
            dispatch(successLoading())
            // navigate('?id=' + recruitmentId)
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
        return
    } catch (error) {
        dispatch(successLoading())
        return
    }
}

export const doAddRecruitment = async (
    data,
    dispatch,
    navigate,
    axiosPrivate
) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${recruitmentUrl.addRecruitment}`,
            method: 'post',
            data: data,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/')
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

export const doDeleteRecruitment = async (id, dispatch, axiosPrivate) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate.delete(
            `${recruitmentUrl.deleteRecruitment}?id=${id}`
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
export const doUpdateRecruitment = async (
    data,
    dispatch,
    navigate,
    axiosPrivate,
    id
) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${recruitmentUrl.updateRecruitment}?id=${id}`,
            method: 'patch',
            data: data,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (res.data.success) {
            toast.success(res.data.message)
            navigate(0)
        } else {
            if (typeof res.data.message !== 'string') {
                res.data.message.forEach((messageList) => {
                    messageList.forEach((messages) => {
                        messages.forEach((message) => {
                            console.log('message ' + message)

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
