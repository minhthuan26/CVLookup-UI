import React, { useState, useEffect } from 'react'
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const DefaultLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className='d-flex flex-column justify-content-end min-vh-100'>
            {isMobile ? (
                <Sidebar />
            ) : (
                <Header />
            )}
            {children}
            <div className='mt-auto'>{isMobile ? <></> : <Footer />}</div>
        </div>
    )
}

export default DefaultLayout
