import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const SecureRoute = () => {
    const location = useLocation()
    const credentials = useSelector(state => state.auth.credentials)
    return (
        credentials?.user ?
            <Outlet />
            :
            <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default SecureRoute