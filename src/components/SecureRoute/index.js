import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const SecureRoute = ({ allowedRoles }) => {
    const location = useLocation()
    const credentials = useSelector(state => state.auth.credentials)
    return (
        credentials?.role?.find(role => allowedRoles?.includes(role)) ?
            <Outlet />
            :
            <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default SecureRoute