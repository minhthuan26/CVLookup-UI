import { createContext, useState } from 'react'

const NotificationBoxContext = createContext({})

export const NotificationBoxProvider = ({ children }) => {
    const [isDisplay, setIsDisplay] = useState(false)

    return (
        <NotificationBoxContext.Provider value={{
            isDisplay,
            setIsDisplay
        }}>
            {children}
        </NotificationBoxContext.Provider>
    )
}

export default NotificationBoxContext