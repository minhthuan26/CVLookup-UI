import { toast } from "react-toastify"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { setProvinces } from "~/Redux/Province/ProvinceSlice"
import { jobAddressUrl } from "~/utils/ApiUrl"
import axios from "../AxiosConfiguration"

export const doGetAllProvince = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(jobAddressUrl.getAllProvince)

        if (res.data.success) {
            dispatch(setProvinces(res.data))
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