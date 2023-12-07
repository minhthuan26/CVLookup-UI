import React from 'react'
import logo from '~/assets/LogoNoText.png'
import defaultAvatar from '~/assets/default_avatar.jpg'
import { useSelector } from 'react-redux'

function MenuAdmin() {
    const user = useSelector((state) => state.auth.credentials.user)

    const handleAvatar = () => {
        const avatarString = user.avatar
        if (avatarString) {
            return 'data:image/png;base64,' + avatarString
        }
        return defaultAvatar
    }
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img
                        src={logo}
                        alt="Logo"
                        className="brand-image"
                        style={{ opacity: '0.8' }}
                    />
                    <span className="brand-text font-weight-light">
                        CV Lookup
                    </span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            {/*  eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img
                                src={handleAvatar()}
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="d-block">
                                {user.username}
                            </a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false">
                            <li className="nav-item menu-open">
                                <a href="/" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </a>
                            </li>

                            <li className="nav-header">Quản lý</li>

                            <li className="nav-item">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-user" />
                                    <p>
                                        Người dùng
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="/employer-management"
                                            className="nav-link">
                                            <i className="far fa-address-book nav-icon" />
                                            <p>Nhà tuyển dụng</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="/candidate-management"
                                            className="nav-link">
                                            <i className="far  fa-address-card nav-icon" />
                                            <p>Ứng viên</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Danh mục
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a
                                            href="/experience-management"
                                            className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Kinh nghiệm</p>
                                        </a>
                                    </li>{' '}
                                    <li className="nav-item">
                                        <a
                                            href="/jobcareer-management"
                                            className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Ngành nghề</p>
                                        </a>
                                    </li>{' '}
                                    <li className="nav-item">
                                        <a
                                            href="/jobfield-management"
                                            className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Lĩnh vực</p>
                                        </a>
                                    </li>{' '}
                                    <li className="nav-item">
                                        <a
                                            href="/jobform-management"
                                            className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Hình thức</p>
                                        </a>
                                    </li>{' '}
                                    <li className="nav-item">
                                        <a
                                            href="/jobPosition-management"
                                            className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Vị trí</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">Quản lý bài đăng</li>
                            <li className="nav-item">
                                <a
                                    href="/recruitment-management"
                                    className="nav-link">
                                    <i className="far fa-bookmark nav-icon" />
                                    <p>Tin tuyển dụng</p>
                                </a>
                            </li>

                            <li className="nav-header">Quản lý CV</li>
                            <li className="nav-item">
                                <a
                                    href="/curriculumn-viate-management"
                                    className="nav-link">
                                    <i className="far fa-file nav-icon" />
                                    <p>CV Ứng viên</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default MenuAdmin
