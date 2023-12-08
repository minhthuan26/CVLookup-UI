import React, { useState, useEffect } from 'react'
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeaderEmployer from '~/components/Header/HeaderEmployer'

const EmpoyerLayout = ({ children }) => {
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
                <>
                    <Sidebar>{children}</Sidebar>
                    <div className="mt-auto">
                        {isMobile ? <></> : <Footer />}
                    </div>
                </>
            ) : (
                <>
                    <HeaderEmployer />
                    <div className="p-3">{children}</div>
                    <div className="mt-auto">
                        {isMobile ? <></> : <Footer />}
                    </div>
                </>
            )}
        </>
    )
}

export default EmpoyerLayout
