import React, { useEffect, useState } from 'react'
import CVViewer from '~/components/CVViewer/CVViewer'
import PopupBase from '~/components/Popup/PopupBase'
import { Confirm } from '~/components/Popup/Confirm'
import { deleteCV, downloadCV } from '~/action/CVApi'

import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'
import { doGetAllCV } from '~/action/CVApi'
function CVManagement() {
    const [cvList, setCVList] = useState([])
    const [showCV, setShowCV] = useState(false)
    const [CVDetail, setCVDetail] = useState([])

    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const getAllCV = async (axiosPrivate, dispatch) =>
        await doGetAllCV(axiosPrivate, dispatch)
    const handleDelete = (id) => {
        Confirm.open({
            title: 'Xoá CV',
            message: 'Bạn có muốn xoá CV?',
            onok: () => {
                try {
                    const deleteCurriculumViate = async (
                        axiosPrivate,
                        id,
                        dispatch
                    ) => await deleteCV(axiosPrivate, id, dispatch)
                    deleteCurriculumViate(axiosPrivate, id, dispatch)
                    setCVList(cvList.filter((cv) => cv.id !== id))
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }
    const handleDownload = (id) => {
        try {
            const downloadCurriculumViate = async (
                axiosPrivate,
                id,
                dispatch
            ) => await downloadCV(axiosPrivate, id, dispatch)
            downloadCurriculumViate(axiosPrivate, id, dispatch)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCV(axiosPrivate, dispatch).then((data) => setCVList(data))
    }, [])
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Quản lý CV ứng viên</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">
                            {cvList.map((cv) => (
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                    <div
                                        className="card bg-light d-flex flex-fill"
                                        key={cv.id}>
                                        <div className="card-header text-muted border-bottom-0">
                                            {new Date(
                                                cv.uploadedAt
                                            ).toLocaleDateString('en-GB')}
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <CVViewer
                                                    Cvid={cv.id}
                                                    check={false}
                                                />
                                            </div>
                                            <div className="row">
                                                <h2 className="lead">
                                                    <b>{cv.fullName}</b>
                                                </h2>

                                                <ul className="ml-4 mb-0 fa-ul text-muted">
                                                    <li className="small">
                                                        <span className="fa-li">
                                                            <i className="fas fa-sm fa-envelope" />
                                                        </span>
                                                        Email: {cv.email}
                                                    </li>
                                                    <li className="small">
                                                        <span className="fa-li">
                                                            <i className="fas fa-sm fa-phone" />
                                                        </span>
                                                        Số điện thoại:
                                                        {cv.phoneNumber}
                                                    </li>
                                                </ul>
                                                <p className="text-muted text-sm">
                                                    <b>Thư giới thiệu: </b>
                                                    {cv.introdution}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-right">
                                                <button
                                                    className="btn btn-sm bg-secondary"
                                                    onClick={() =>
                                                        handleDownload(cv.id)
                                                    }>
                                                    <i className="fas fa-download" />
                                                </button>
                                                &emsp;
                                                <button
                                                    className="btn btn-sm bg-danger"
                                                    onClick={() =>
                                                        handleDelete(cv.id)
                                                    }>
                                                    <i className="fas fa-trash" />
                                                </button>
                                                &emsp;
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() => {
                                                        setShowCV(true)
                                                        setCVDetail(cv)
                                                    }}>
                                                    <i className="fas fa-user" />
                                                    &nbsp; Xem CV
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <PopupBase
                        trigger={showCV}
                        setTriger={setShowCV}
                        title={`${CVDetail.fullName} - ${CVDetail.email}`}>
                        <div style={{ height: '90vh' }}>
                            <CVViewer Cvid={CVDetail.id} check={true} />
                        </div>
                    </PopupBase>
                    <div className="card-footer">
                        <nav aria-label="Contacts Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                {/* Phân trang giúp mình nhé  */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CVManagement
