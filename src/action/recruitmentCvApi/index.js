import { toast } from "react-toastify"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { recruitmentCVUrl } from "~/utils/ApiUrl"

export const doApplyToRecruitment = async (axiosPrivate, dispatch, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${recruitmentCVUrl.applyCVToRecruitment}`,
            method: 'post',
            data: data,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.data.success) {
            toast.success(res.data.message)
            // navigate(from, { replace: true })
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
        return res.data.data
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const doReApplyToRecruitment = async (axiosPrivate, dispatch, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${recruitmentCVUrl.applyCVToRecruitment}`,
            method: 'post',
            data: data,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.data.success) {
            toast.success(res.data.message)
            // navigate(from, { replace: true })
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
        return res.data.data
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}

export const doGetAppliedCV = async (axiosPrivate, dispatch, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            // eslint-disable-next-line
            url: `${recruitmentCVUrl.getAppliedCV}` + `?userId=${data.userId}` + `&recruitmentId=${data.recruitmentId}`,
            method: 'get',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.data.success) {
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
        return res.data.data
    } catch (error) {
        toast.error(error.message)
        dispatch(successLoading())
    }
}