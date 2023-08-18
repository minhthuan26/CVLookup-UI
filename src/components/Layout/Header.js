import React from 'react'
import '../../styles/header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav>
                <Link to="/">Tìm việc</Link>
                <Link to="/">Hồ sơ</Link>
                <Link to="/">Cẩm nang</Link>
                <Link to="/">Công ty</Link>
                <Link to="/">Công cụ</Link>
            </nav>
            <nav className="nav-right">
                <Link to="/login" className="nav-link">
                    <span className="nav-link-name">
                        <i className="fas fa-sign-in nav-link-icon"></i>
                        &nbsp;&nbsp;&nbsp; Đăng nhập
                    </span>
                </Link>
                {/* <Link>Dành cho nhà tuyển dụng</Link> */}
            </nav>
        </header>
    )
}

export default Header
