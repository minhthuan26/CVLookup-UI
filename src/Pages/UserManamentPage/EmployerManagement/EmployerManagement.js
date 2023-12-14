import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ButtonForm, InputForm } from '~/components/CustomChildComponent/Form'
import { doDeleteAccountUser, doGetAllEmployer } from '~/action/accountUserApi'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'
import defaultAvatar from '~/assets/default_avatar.jpg'
import PopupBase from '~/components/Popup/PopupBase'
import UserDetail from '~/components/UserDetail/UserDetail'
import {
    faTrash,
    faEye,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Confirm } from '~/components/Popup/Confirm'
import Profile from '~/Pages/Profile/index'

function EmployerManagement() {
    const [filter, setFilter] = useState([])
    const [search, SetSearch] = useState('')
    const [employer, setEmployer] = useState([])
    const [showDetail, setShowDetail] = useState(false)
    const [userId, setUserId] = useState('')
    const [avatarBase64, setavatarBase64] = useState('')

    const [showFormEdit, setShowFormEdit] = useState(false)
    const [user, setUser] = useState([])

    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const handleAvatar = (user) => {
        const avatarString = user.avatar
        if (avatarString) {
            setavatarBase64(avatarString)

            return 'data:image/png;base64,' + avatarString
        }
        return defaultAvatar
    }
    const getEmployerList = async (axiosPrivate, dispatch) =>
        await doGetAllEmployer(axiosPrivate, dispatch)
    const columns = [
        {
            name: 'Xem chi tiết',
            cell: (row) => (
                <>
                    <button
                        title="Xem chi tiết thông tin"
                        className="btn bg-transparent w-50 btn-link"
                        onClick={() => {
                            setShowDetail(true)
                            setUserId(row.userId)
                        }}>
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                </>
            ),
        },
        {
            name: 'Ảnh',
            selector: (row) => (
                <img
                    style={{
                        objectFit: 'contain',
                        width: '60px',
                        height: '60px',
                        margin: '1rem 0',
                        border: 'solid 1px #5767aa',
                    }}
                    className="img-circle elevation-2"
                    src={handleAvatar(row.user)}
                    alt=""
                />
            ),
        },
        {
            name: 'Tên tài khoản',
            selector: (row) => row.user.username,
        },
        {
            name: 'Số điện thoại',
            selector: (row) => row?.user?.phoneNumber,
        },
        {
            name: 'Email',
            selector: (row) => row.user.email,
        },

        {
            name: '',
            cell: (row) => (
                <>
                    <button
                        title="Sửa người dùng"
                        className="btn bg-transparent  text-warning w-50"
                        onClick={() => {
                            setUser(row?.user)
                            setShowFormEdit(true)
                        }}>
                        <FontAwesomeIcon icon={faPenToSquare} /> <br />
                        Sửa
                    </button>
                    <button
                        title="Xoá người dùng"
                        className="btn bg-transparent text-danger w-50"
                        onClick={() => {
                            handleDelete(row.account.id, row.user.id)
                        }}>
                        <FontAwesomeIcon icon={faTrash} />
                        <br />
                        Xoá
                    </button>
                </>
            ),
        },
    ]

    const handleDelete = (accountId, userId) => {
        Confirm.open({
            title: 'Xoá người dùng',
            message: 'Bạn có muốn xoá người dùng này?',
            onok: () => {
                try {
                    const deleteAccountUser = async (
                        axiosPrivate,
                        dispatch,
                        accountId,
                        userId
                    ) =>
                        await doDeleteAccountUser(
                            axiosPrivate,
                            dispatch,
                            accountId,
                            userId
                        )

                    deleteAccountUser(axiosPrivate, dispatch, accountId, userId)
                    setFilter(
                        employer.filter(
                            (item) =>
                                item.userId !== userId &&
                                item.accountId !== accountId
                        )
                    )
                    setEmployer(
                        employer.filter(
                            (item) =>
                                item.userId !== userId &&
                                item.accountId !== accountId
                        )
                    )
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }

    useEffect(
        () => {
            getEmployerList(axiosPrivate, dispatch).then((data) => {
                setEmployer(data)
                setFilter(data)
            })
        },
        // eslint-disable-next-line
        []
    )

    useEffect(() => {
        const result = employer.filter((item) => {
            return (
                item.user.username &&
                item.user.username.toLowerCase().match(search.toLowerCase())
            )
        })
        setFilter(result)
    }, [search, employer])
    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#ccc',
            },
        },
    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Quản lý tài khoản nhà tuyển dụng</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="invoice p-3 mb-3">
                                <div className="row">
                                    <div className="col-12 table-responsive">
                                        <DataTable
                                            customStyles={tableHeaderstyle}
                                            columns={columns}
                                            data={filter}
                                            pagination
                                            fixedHeader
                                            highlightOnHover
                                            subHeader
                                            subHeaderComponent={
                                                <InputForm
                                                    type="text"
                                                    className="w-50 form-control"
                                                    placeholder="Tìm kiếm..."
                                                    value={search}
                                                    onChange={(e) =>
                                                        SetSearch(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            }
                                            subHeaderAlign="right"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopupBase
                trigger={showFormEdit}
                setTriger={setShowFormEdit}
                title="Sửa người dùng">
                <div style={{ height: '90vh', overflow: 'auto' }}>
                    <Profile
                        user={user}
                        avatarBase64={avatarBase64}
                        role={'Employer'}
                    />
                </div>
            </PopupBase>
            <PopupBase
                trigger={showDetail}
                setTriger={setShowDetail}
                title="Chi tiết người dùng">
                <UserDetail userId={userId}></UserDetail>
            </PopupBase>
        </div>
    )
}

export default EmployerManagement
