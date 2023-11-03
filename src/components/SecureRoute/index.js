import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import NotAllowed from '~/Pages/NotAllowed'

const SecureRoute = ({ allowedRoles }) => {
    const location = useLocation()
    const credentials = useSelector(state => state.auth.credentials)

    return (
        credentials?.user
            ? allowedRoles.includes(credentials.role)
                ? <Outlet />
                : <NotAllowed />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default SecureRoute