import React, { useEffect, useState } from 'react'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'
import { doGetByUserId } from '~/action/accountUserApi'
import defaultAvatar from '~/assets/default_avatar.jpg'

function UserDetail({ userId }) {
    const [accountUser, setAccountUser] = useState({})
    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const getByUserId = async (axiosPrivate, dispatch, userId) =>
        await doGetByUserId(axiosPrivate, dispatch, userId)

    useEffect(() => {
        getByUserId(axiosPrivate, dispatch, userId).then((data) => {
            setAccountUser(data)
        })
    }, [])

    const handleAvatar = (user) => {
        const avatarString = user?.avatar
        if (avatarString) {
            return 'data:image/png;base64,' + avatarString
        }
        return defaultAvatar
    }
    return (
        <div style={{ height: '90vh', overflow: 'auto' }}>
            <div className="card card-primary">
                <div className="card-body box-profile">
                    <div className="text-center">
                        <img
                            className="profile-user-img img-fluid img-circle"
                            src={handleAvatar(accountUser.user)}
                            alt="User profile picture"
                        />
                    </div>
                    <h3 className="profile-username text-center">
                        {accountUser?.user?.username}
                    </h3>
                    <p className="text-muted text-center">
                        {accountUser?.account?.actived ? (
                            <em className="text-success">Đã kích hoạt</em>
                        ) : (
                            <em className="text-danger">Chưa kích hoạt</em>
                        )}
                    </p>
                    <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Email</b>
                            <a className="float-right">
                                {accountUser?.account?.email}
                            </a>
                        </li>
                        <li className="list-group-item">
                            <b>Số điện thoại</b>{' '}
                            <a className="float-right">
                                {accountUser?.user?.phoneNumber}
                            </a>
                        </li>

                        <li className="list-group-item">
                            <b>Tạo ngày</b>{' '}
                            <a className="float-right">
                                {new Date(
                                    accountUser?.account?.issuedAt
                                ).toLocaleDateString('en-GB')}
                            </a>
                        </li>
                        <li className="list-group-item">
                            <b>Ngày kích hoạt</b>{' '}
                            <a className="float-right">
                                {new Date(
                                    accountUser?.account?.activedAt
                                ).toLocaleDateString('en-GB')}
                            </a>
                        </li>
                        <li className="list-group-item">
                            <b>Sửa đổi lần cuối</b>{' '}
                            <a className="float-right">
                                {new Date(
                                    accountUser?.account?.updatedAt
                                ).toLocaleDateString('en-GB')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
