import { toast } from "react-toastify"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { recruitmentCVUrl } from "~/utils/ApiUrl"

export const doApplyToRecruitment = async (dispatch, data) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            url: `${recruitmentCVUrl.applyCVToRecruitment}`,
            method: 'post',
            data: data,
            withCredentials: true
        })

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(logout())
            // navigate(from, { replace: true })
        } else {
            console.log(typeof res.data.message)
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