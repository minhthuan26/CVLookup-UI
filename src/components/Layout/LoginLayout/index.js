import React, { useState, useEffect } from 'react'
import logo from '~/assets/logo.png'
import { Link } from 'react-router-dom'
const LoginLayout = ({ children }) => {
    return (
        <>
            <Link to="/">
                <img
                    style={{
                        height: '60px',
                        marginLeft: '20px',
                        marginTop: '10px',
                    }}
                    src={logo}
                    alt="Logo"
                />
            </Link>
            {children}
        </>
    )
}

export default LoginLayout
