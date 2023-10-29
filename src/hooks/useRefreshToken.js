import React from 'react'
import { useDispatch } from 'react-redux'
import axios from '~/action/AxiosConfiguration'
import { authUrl } from '~/utils/ApiUrl'

const useRefreshToken = () => {
    const dispatch = useDispatch()
    const refresh = async () => {
        const res = await axios(`${authUrl.renewToken}`, {
            method: 'post',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(data => {
            console.log(data);
        })

        return res.data.data.accessToken
    }
    return refresh
}

export default useRefreshToken
