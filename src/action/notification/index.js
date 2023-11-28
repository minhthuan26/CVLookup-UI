import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { notificationUrl } from '~/utils/ApiUrl'
import { toast } from 'react-toastify'

export const doGetNotificationByUserId = async (axiosPrivate, userId) => {
    try {
        const res = await axiosPrivate({
            url: `${notificationUrl.getNotificationByUserId}?userId=${userId}`,
            method: 'get',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.data.success) {
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
        return []
    } catch (error) {
        return []
    }
}

export const doUpdateViewStatus = async (axiosPrivate, dispatch, id) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${notificationUrl.updateViewStatus}?id=${id}`,
            method: 'patch',
            withCredentials: true,
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