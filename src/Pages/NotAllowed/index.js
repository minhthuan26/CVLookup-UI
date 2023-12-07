import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const NotAllowed = () => {
    return (
        <Navigate to='/' replace />
    )
}

export default NotAllowed