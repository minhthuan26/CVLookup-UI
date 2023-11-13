import { toast } from "react-toastify"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { cvUrl } from "~/utils/ApiUrl"

export const doUploadNewCV = async (axiosPrivate, dispatch, data) => {
    dispatch(inLoading())
    console.log(data);
    try {
        const res = await axiosPrivate({
            url: `${cvUrl.uploadCV}`,
            method: 'post',
            data: data,
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

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