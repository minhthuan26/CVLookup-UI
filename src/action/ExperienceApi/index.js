import { toast } from "react-toastify"
import { setExperiences } from "~/Redux/Experience/ExperienceSlice"
import { inLoading, successLoading } from "~/Redux/Loader/loaderSlice"
import { experienceUrl } from "~/utils/ApiUrl"
import axios from "../AxiosConfiguration"

export const doGetAllExperience = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(experienceUrl.getAllExperience)

        if (res.data.success) {
            dispatch(setExperiences(res.data))
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