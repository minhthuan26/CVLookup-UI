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
        <>
            {isMobile ? (
                <Sidebar>{children}</Sidebar>
            ) : (
                <Header>{children}</Header>
            )}

            {isMobile ? <></> : <Footer />}
        </>
    )
}

export default DefaultLayout
