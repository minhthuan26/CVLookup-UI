import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.png'
import { useState } from 'react'
import './sidebar.module.scss'
function Sidebar({ children }) {
    const [show, setShow] = useState(false)

    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className="header-toggle" onClick={() => setShow(!show)}>
                    <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
                </div>
                <div className="logo-container">
                    <Link to="/" className="nav-logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className="nav">
                    <div>
                        <div className="nav-list">
                            <Link to="/jobs" className="nav-link active">
                                <i className="fas fa-search nav-link-icon"></i>
                                <span className="nav-link-name">Tìm việc</span>
                            </Link>
                            <Link to="/curriculum-vitae" className="nav-link">
                                <i className="fas fa-id-card-alt nav-link-icon"></i>
                                <span className="nav-link-name">Hồ sơ</span>
                            </Link>
                            <Link to="/" className="nav-link">
                                <i className="fas fa-book nav-link-icon"></i>
                                <span className="nav-link-name">Cẩm nang</span>
                            </Link>
                            <Link to="/company-list" className="nav-link">
                                <i className="fas fa-building nav-link-icon"></i>
                                <span className="nav-link-name">Công ty</span>
                            </Link>
                            <Link to="/" className="nav-link">
                                <i className="fas fa-tools nav-link-icon"></i>
                                <span className="nav-link-name">Công cụ</span>
                            </Link>
                        </div>
                    </div>

                    <Link to="/login" className="nav-link">
                        <i className="fas fa-sign-in nav-link-icon"></i>
                        <span className="nav-link-name"> Đăng nhập</span>
                    </Link>
                    {/* Viết toán tử 3 ngôi khi login thì hiển thị logout /*}
                    {/* <Link to="/logout" className="nav-link">
                        <i className="fas fa-sign-out nav-link-icon"></i>
                        <span className="nav-link-name">Logout</span>
                    </Link> */}
                </nav>
            </aside>
            {children}
        </main>
    )
}

export default Sidebar
