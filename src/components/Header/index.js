import React from 'react'
import './header.css'
import logo from '~/assets/logo-transparent.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="nav-list">
                <Link to="/" className="link">
                    Tìm việc
                </Link>
                <Link to="/" className="link">
                    Hồ sơ
                </Link>
                <Link to="/" className="link">
                    Cẩm nang
                </Link>
                <Link to="/" className="link">
                    Công ty
                </Link>
                <Link to="/" className="link">
                    Công cụ
                </Link>
            </nav>
            <Link to="/login" className="link-name">
                <span>Đăng nhập</span>
            </Link>{' '}
            <Link to="/login" className="link-name2">
                <span>Dành cho nhà tuyển dụng</span>
            </Link>
            {/* button 
                <Link>Dành cho nhà tuyển dụng</Link> */}
        </header>
    )
}

export default Header
