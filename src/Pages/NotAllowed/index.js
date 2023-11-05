import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const NotAllowed = () => {
    toast.error('Bạn không có quyền truy cập trang này')
    return (
        <Navigate to='/' replace />
    )
}

export default NotAllowed