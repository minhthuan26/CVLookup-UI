import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { userUrl } from '~/utils/ApiUrl'
import { toast } from 'react-toastify'

export const doUpdateCandidate = async (
    axiosPrivate,
    dispatch,
    data,
    id,
    navigate
) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'patch',
            url: `${userUrl.updateCandidate}?id=${id}`,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        if (res.data.success) {
            dispatch(successLoading())
            navigate(0)

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
        return null
    } catch (error) {
        dispatch(successLoading())
        return null
    }
}

export const doUpdateEmployer = async (
    axiosPrivate,
    dispatch,
    data,
    id,
    navigate
) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'patch',
            url: `${userUrl.updateEmployer}?id=${id}`,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        if (res.data.success) {
            dispatch(successLoading())
            navigate(0)
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
        return null
    } catch (error) {
        dispatch(successLoading())
        return null
    }
}
