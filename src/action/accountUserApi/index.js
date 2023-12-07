import { inLoading, successLoading } from '~/Redux/Loader/loaderSlice'
import { toast } from 'react-toastify'
import { AccountUserUrl } from '~/utils/ApiUrl'

export const doGetAll = async (axiosPrivate, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'get',
            url: `${AccountUserUrl.getAllAccountUser}`,
        })
        if (res.data.success) {
            dispatch(successLoading())
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}

export const doGetAllEmployer = async (axiosPrivate, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'get',
            url: `${AccountUserUrl.getAccountUserByRoleName}?roleName=Employer`,
        })
        if (res.data.success) {
            dispatch(successLoading())
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}
export const doGetAllCandidate = async (axiosPrivate, dispatch) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'get',
            url: `${AccountUserUrl.getAccountUserByRoleName}?roleName=Candidate`,
        })
        if (res.data.success) {
            dispatch(successLoading())
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}

export const doDeleteAccountUser = async (
    axiosPrivate,
    dispatch,
    accountId,
    userId
) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'delete',
            url: `${AccountUserUrl.deleteAccountUser}?accountId=${accountId}&userId=${userId}`,
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}

export const doGetByUserId = async (axiosPrivate, dispatch, id) => {
    dispatch(inLoading())
    try {
        const res = await axiosPrivate({
            method: 'get',
            url: `${AccountUserUrl.getByUserId}?userId=${id}`,
        })
        if (res.data.success) {
            dispatch(successLoading())
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
        return []
    } catch (error) {
        dispatch(successLoading())
        return []
    }
}
