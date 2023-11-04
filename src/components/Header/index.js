import React, { useEffect, useState } from 'react'
import * as HeaderComponent from './HeaderComponent'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo-transparent.png'
import { doLogout } from '~/action/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usePrivateAxios from '~/action/AxiosCredentials'

function Header({ children }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.credentials.user)
    const accessToken = useSelector(state => state.auth.credentials.accessToken)
    const axiosPrivate = usePrivateAxios(accessToken)
    const handleLogout = (e) => {
        const logout = async (axiosPrivate, dispatch, navigate) => await doLogout(axiosPrivate, dispatch, navigate)
        logout(axiosPrivate, dispatch, navigate)
    }

    return (
        <>
            <HeaderComponent.HeaderContainer>
                <HeaderComponent.Logo>
                    <Link to="/">
                        <img style={{ height: '60px' }} src={logo} alt="Logo" />
                    </Link>
                </HeaderComponent.Logo>
                <HeaderComponent.NavList>
                    <HeaderComponent.LinkStyled to="/jobs" className="link">
                        Tìm việc
                    </HeaderComponent.LinkStyled>
                    <HeaderComponent.LinkStyled
                        to="/curriculum-vitae"
                        className="link">
                        Hồ sơ
                    </HeaderComponent.LinkStyled>
                    <HeaderComponent.LinkStyled to="/" className="link">
                        Cẩm nang
                    </HeaderComponent.LinkStyled>
                    <HeaderComponent.LinkStyled
                        to="/company-list"
                        className="link">
                        Công ty
                    </HeaderComponent.LinkStyled>
                    <HeaderComponent.LinkStyled to="/" className="link">
                        Công cụ
                    </HeaderComponent.LinkStyled>
                </HeaderComponent.NavList>
                {user ? (
                    <>
                        <HeaderComponent.LinkName
                            className="link-name">
                            <span onClick={handleLogout}>Đăng xuất</span>
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
                            &emsp; Xin chào, {user.username}
                        </HeaderComponent.LinkName2>
                    </>
                ) : (
                    <>
                        <HeaderComponent.LinkName
                            to="/login"
                            className="link-name">
                            <span>Đăng nhập</span>
                        </HeaderComponent.LinkName>
                        {/* <HeaderComponent.LinkName2
                            to="/employer"
                            className="link-name2">
                            <span>Dành cho nhà tuyển dụng</span>
                        </HeaderComponent.LinkName2> */}
                    </>
                )}
            </HeaderComponent.HeaderContainer>
            {children}
        </>
    )
}

export default Header
