import React, { useState } from 'react'
import * as HeaderComponent from './HeaderComponent'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo-transparent.png'
import { useSelector } from 'react-redux'

function HeaderEmployer({ children }) {
    const [user, setUser] = useState(null)
    return (
        <>
            <HeaderComponent.HeaderContainer>
                <HeaderComponent.Logo>
                    <Link to="/">
                        <img style={{ height: '60px' }} src={logo} alt="Logo" />
                    </Link>
                </HeaderComponent.Logo>
                <HeaderComponent.NavList>
                    <HeaderComponent.LinkStyled to="/" className="link">
                        Blog tuyển dụng
                    </HeaderComponent.LinkStyled>
                </HeaderComponent.NavList>
                {user ? (
                    <>
                        <HeaderComponent.LinkName
                            to="/logout"
                            className="link-name">
                            <span>Đăng xuất</span>
                        </HeaderComponent.LinkName>
                        <HeaderComponent.LinkName2
                            to="/profile"
                            className="link-name2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-person"
                                viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1c-2.667 0-8 1.334-8 4v1h16v-1c0-2.666-5.333-4-8-4z" />
                            </svg>
                            &emsp; Xin chào, {user.data.user.username}
                        </HeaderComponent.LinkName2>
                    </>
                ) : (
                    <>
                        <HeaderComponent.LinkName
                            to="/login"
                            className="link-name">
                            <span>Đăng nhập</span>
                        </HeaderComponent.LinkName>
                        <HeaderComponent.LinkName2
                            to="/postJob"
                            className="link-name2">
                            <span>Đăng tin tuyển dụng</span>
                        </HeaderComponent.LinkName2>
                    </>
                )}
            </HeaderComponent.HeaderContainer>
            {children}
        </>
    )
}

export default HeaderEmployer
