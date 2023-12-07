import React from 'react'
import { doLogout } from '~/action/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usePrivateAxios from '~/action/AxiosCredentials'
function HeaderAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const handleLogout = (e) => {
        const logout = async (axiosPrivate, dispatch, navigate, from) =>
            await doLogout(axiosPrivate, dispatch, navigate, from)
        logout(axiosPrivate, dispatch, navigate, '/login')
    }
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            data-widget="pushmenu"
                            role="button">
                            <i className="fas fa-bars" />
                        </span>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" className="nav-link">
                            Trang chủ
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="nav-link">
                            <i className="fas fa-bell" />
                        </button>
                    </li>

                    <li className="nav-item">
                        <button className=" nav-link" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;&nbsp;
                            <span className="text-gray-dark">Đăng xuất</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderAdmin
