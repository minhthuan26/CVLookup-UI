import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { jobFormUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'
import { toast } from 'react-toastify'
import { setJobForms } from '~/Redux/JobForm/JobFormSlice'

export const doGetAllJobForm = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(jobFormUrl.getAll)

        if (res.data.success) {
            dispatch(setJobForms(res.data))
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
