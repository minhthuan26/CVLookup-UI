import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { notificationUrl } from '~/utils/ApiUrl'
import { toast } from 'react-toastify'

export const doGetNotificationByUserId = async (axiosPrivate, dispatch, userId) => {
    dispatch(inLoading())
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