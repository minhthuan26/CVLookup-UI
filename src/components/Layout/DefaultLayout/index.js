import React, { useState, useEffect } from 'react'
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import useNotificationBox from '~/hooks/useNotificationBox'

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
    const { setIsDisplay } = useNotificationBox()
    return (
        <div onClick={() => setIsDisplay(false)} className='d-flex flex-column justify-content-end min-vh-100'>
            {isMobile ? (
                <Sidebar />
            ) : (
                <Header />
            )}
            <div className='p-3'>{children}</div>
            <div className='mt-auto'>{isMobile ? <></> : <Footer />}</div>
        </div>
    )
}

export default DefaultLayout
