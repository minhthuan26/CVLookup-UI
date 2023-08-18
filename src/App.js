import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
function App() {
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
        <BrowserRouter>
            {isMobile ? <Sidebar /> : <Header />}
            <main>
                <h1>Content</h1>
            </main>
        </BrowserRouter>
    )
}

export default App
