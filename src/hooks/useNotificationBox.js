import React, { useContext } from 'react'
import NotificationBoxContext from '~/context/notificationBoxContext'

const useNotificationBox = () => {
    return useContext(NotificationBoxContext)
}

export default useNotificationBox