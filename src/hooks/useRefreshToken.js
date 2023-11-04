import React from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials, renewToken } from '~/Redux/Auth/authSlice'
import axios, { axiosPrivate } from '~/action/AxiosConfiguration'
import { authUrl } from '~/utils/ApiUrl'
import { toast } from 'react-toastify'

const useRefreshToken = (accessToken) => {
    const dispatch = useDispatch()
    const refresh = async () => {
        const res = await axios(
            {
                url: `${authUrl.renewToken}`,
                method: 'post',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            })

        if (res.data.success) {
            dispatch(renewToken(res.data))
        } else {
            toast.error(res.data.message)
        }

        return res.data.data.accessToken
    }
    return refresh
}

export default useRefreshToken
