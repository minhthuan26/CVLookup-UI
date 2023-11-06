import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { recruitmentUrl } from "~/utils/ApiUrl"
import axios from '~/action/AxiosConfiguration'
import { toast } from "react-toastify"

export const getNewestJob = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios({
            url: `${recruitmentUrl.getNewestJob}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (res.data.success) {
            toast.success(res.data.message)
            dispatch(successLoading())
            return res.data.data
        } else {
            if (typeof res.data.message !== 'string') {
                res.data.message.forEach(messageList => {
                    messageList.forEach(messages => {
                        messages.forEach(message => {
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
        toast.error(error.message)
        dispatch(successLoading())
        return []
    }
}