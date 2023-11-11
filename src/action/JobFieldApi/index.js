import { setJobFields } from "~/Redux/JobField/JobFieldSlice"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { jobFieldUrl } from "~/utils/ApiUrl"
import axios from "../AxiosConfiguration"
import { toast } from "react-toastify"

export const doGetAllJobField = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(jobFieldUrl.getAll)

        if (res.data.success) {
            dispatch(setJobFields(res.data))
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