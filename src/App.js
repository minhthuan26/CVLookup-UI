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
            <Routes>
            {
              publicRoutes.map((route, index) => {
                const Page = route.page
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<Page />} />
                )
              })}

            {
              privateRoutes.map((route, index) => {
                const Page = route.page
                return (
                  <Route key={index} element={<SecureRoute />}>
                    <Route
                      key={index}
                      path={route.path}
                      element={<Page />} />
                  </Route>
                )
              })
            }

          </Routes>
        </BrowserRouter>
    )
}

export default App
