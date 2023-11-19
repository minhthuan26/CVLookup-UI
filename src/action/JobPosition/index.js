import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { JobPositionUrl } from '~/utils/ApiUrl'
import axios from '../AxiosConfiguration'
import { toast } from 'react-toastify'
import { setJobPosition } from '~/Redux/JobPosition/JobPositionSlice'

export const doGetAllJobPosition = async (dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axios.get(JobPositionUrl.getAll)

        if (res.data.success) {
            dispatch(setJobPosition(res.data))
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
