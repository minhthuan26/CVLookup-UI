import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import {
    doDeleteRecruitment,
    doGetRecruitmentList,
    doUpdateRecruitment,
} from '~/action/recruitmentApi'
import {
    faTrash,
    faPenToSquare,
    faEye,
} from '@fortawesome/free-solid-svg-icons'
import { InputForm } from '~/components/CustomChildComponent/Form'
import { useNavigate } from 'react-router-dom'
import usePrivateAxios from '~/action/AxiosCredentials'
import { Confirm } from '~/components/Popup/Confirm'
import PopupBase from '~/components/Popup/PopupBase'
import FormRecruitment from '~/components/FormRecruitment/FormRecruitment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import defaultAvatar from '~/assets/default_avatar.jpg'

function RecruitmentManagement() {
    const handleAvatar = (user) => {
        const avatarString = user.avatar
        if (avatarString) {
            return 'data:image/png;base64,' + avatarString
        }
        return defaultAvatar
    }

    const columns = [
        {
            name: 'Xem chi tiết',
            cell: (row) => (
                <>
                    <a
                        title="Xem chi tiết thông tin"
                        className="btn bg-transparent w-50 btn-link"
                        href={`recruitment-detail?id=${row.id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </a>
                </>
            ),
        },
        {
            name: 'Nhà tuyển dụng',
            selector: (row) => (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                    <img
                        style={{
                            objectFit: 'contain',
                            width: '60px',
                            height: '60px',
                            margin: '1rem 0',
                            border: 'solid 1px #5767aa',
                        }}
                        className="img-circle elevation-2"
                        src={handleAvatar(row?.employer)}
                        alt=""
                    />
                    <span className="bold text-info">
                        {row?.employer?.username}
                    </span>
                </div>
            ),
        },
        {
            name: 'Tiêu đề',
            selector: (row) => <span className="bold">{row.jobTitle}</span>,
        },
        {
            name: 'Mức lương',
            selector: (row) => row.salary,
        },
        {
            name: 'Ngành',
            selector: (row) => row.jobCareer.career,
        },
        {
            name: 'Vị trí',
            selector: (row) => row.jobPosition.position,
        },
        {
            name: '',
            cell: (row) => (
                <>
                    <button
                        title="Xoá đơn tuyển dụng"
                        className="btn bg-transparent text-danger w-50"
                        onClick={() => handleDelete(row.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        <br />
                        Xoá
                    </button>
                    <button
                        title="Sửa đơn tuyển dụng"
                        className="btn bg-transparent  text-warning w-50"
                        onClick={() => {
                            setShowFormEdit(true)
                            setIdRecruitment(row.id)
                        }}>
                        <FontAwesomeIcon icon={faPenToSquare} /> <br />
                        Sửa
                    </button>
                </>
            ),
        },
    ]
    const [idRecruitment, setIdRecruitment] = useState('')

    const [showFormEdit, setShowFormEdit] = useState(false)

    const [recruitment, setRecruitment] = useState([])
    const [search, SetSearch] = useState('')
    const [filter, setFilter] = useState([])
    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const getJobList = async (axiosPrivate, dispatch) =>
        await doGetRecruitmentList(axiosPrivate, dispatch)
    useEffect(
        () => {
            getJobList(axiosPrivate, dispatch).then((data) => {
                setRecruitment(data)
                setFilter(data)
            })
        },
        // eslint-disable-next-line
        []
    )

    useEffect(() => {
        const result = recruitment.filter((item) => {
            return (
                item.jobTitle &&
                item.jobTitle.toLowerCase().match(search.toLowerCase())
            )
        })
        setFilter(result)
    }, [search, recruitment])

    const updateRecruitment = async (
        data,
        dispatch,
        navigate,
        axiosPrivate,
        id
    ) => await doUpdateRecruitment(data, dispatch, navigate, axiosPrivate, id)

    const handleDelete = (id) => {
        Confirm.open({
            title: 'Xoá tin tuyển dụng',
            message: 'Bạn có muốn xoá tin tuyển dụng?',
            onok: () => {
                try {
                    const deleteRecruitment = async (
                        id,
                        dispatch,
                        axiosPrivate
                    ) => await doDeleteRecruitment(id, dispatch, axiosPrivate)
                    deleteRecruitment(id, dispatch, axiosPrivate)
                    setFilter(recruitment.filter((item) => item.id !== id))
                    setRecruitment(recruitment.filter((item) => item.id !== id))
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }

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
                            <h1>Quản lý tin tuyển dụng</h1>
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
                                            // actions={
                                            //     <ButtonForm
                                            //         onClick={() =>
                                            //             navigate(
                                            //                 '/post-recruitment'
                                            //             )
                                            //         }>
                                            //         Tạo tin tuyển dụng mới
                                            //     </ButtonForm>
                                            // }
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
                                        <hr />
                                        <PopupBase
                                            trigger={showFormEdit}
                                            setTriger={setShowFormEdit}
                                            title="Sửa thông tin tuyển dụng">
                                            <div
                                                style={{
                                                    height: '80vh',
                                                    overflow: 'auto',
                                                }}>
                                                <FormRecruitment
                                                    handleAction={
                                                        updateRecruitment
                                                    }
                                                    id={
                                                        idRecruitment
                                                    }></FormRecruitment>
                                            </div>
                                        </PopupBase>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RecruitmentManagement
