import { axiosPrivate } from './AxiosConfiguration'
import useRefreshToken from '~/hooks/useRefreshToken'
import React from 'react'

const usePrivateAxios = (accessToken) => {
    const refresh = useRefreshToken(accessToken)
    React.useEffect(
        () => {
            const requestIntercept = axiosPrivate.interceptors.request.use(
                (config) => {
                    if (!config.headers['Authorization']) {
                        config.headers[
                            'Authorization'
                        ] = `Bearer ${accessToken}`
                    }
                    return config
                },
                (error) => Promise.reject(error)
            )

            const responseIntercept = axiosPrivate.interceptors.response.use(
                async (response) => {
                    if (
                        !response.data.status &&
                        response.data.message.includes('Thất bại. Token đã hết hạn') &&
                        response.data.code === 403
                    ) {
                        const preRequest = response?.config
                        const newAccessToken = await refresh()
                        preRequest.headers[
                            'Authorization'
                        ] = `Bearer ${newAccessToken}`
                        return axiosPrivate(preRequest)
                    }
                    return response
                },
                async (error) => {
                    const preRequest = error?.config
                    if (!preRequest?.sent) {
                        preRequest.sent = true
                        const newAccessToken = await refresh()
                        preRequest.headers[
                            'Authorization'
                        ] = `Bearer ${newAccessToken}`
                        return axiosPrivate(preRequest)
                    }
                    return Promise.reject(error)
                }
            )

            return () => {
                axiosPrivate.interceptors.request.eject(requestIntercept)
                axiosPrivate.interceptors.response.eject(responseIntercept)
            }
        },
        // eslint-disable-next-line
        [refresh]
    )

    return axiosPrivate
}

export default usePrivateAxios
