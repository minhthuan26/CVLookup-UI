import React, { useEffect, useState } from 'react'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'
import { doGetAllEmployer, doGetAllCandidate } from '~/action/accountUserApi'
import { doGetAllCV } from '~/action/CVApi'
import { doGetRecruitmentList } from '~/action/recruitmentApi'

const AdminPage = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const [employer, setEmployer] = useState([])
    const [candidate, setCandidate] = useState([])
    const [cvList, setCvList] = useState([])
    const [recruitmentList, setRecruitmentList] = useState([])
    const getAllEmployer = async (axiosPrivate, dispatch) =>
        doGetAllEmployer(axiosPrivate, dispatch)

    const getAllCandidate = async (axiosPrivate, dispatch) =>
        doGetAllCandidate(axiosPrivate, dispatch)
    const getAllCV = async (axiosPrivate, dispatch) =>
        await doGetAllCV(axiosPrivate, dispatch)
    const getAllRecruitment = async (axiosPrivate, dispatch) =>
        await doGetRecruitmentList(axiosPrivate, dispatch)
    useEffect(
        () => {
            getAllEmployer(axiosPrivate, dispatch).then((data) =>
                setEmployer(data)
            )

            getAllCandidate(axiosPrivate, dispatch).then((data) =>
                setCandidate(data)
            )

            getAllCV(axiosPrivate, dispatch).then((data) => setCvList(data))

            getAllRecruitment(axiosPrivate, dispatch).then((data) =>
                setRecruitmentList(data)
            )
        },
        // eslint-disable-next-line
        []
    )
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{cvList.length}</h3>
                                    <p>CV được tải lên</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a
                                    href="/curriculumn-viate-management"
                                    className="small-box-footer">
                                    Xem thêm
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{recruitmentList.length}</h3>
                                    <p>Tin tuyển dụng</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a
                                    href="/recruitment-management"
                                    className="small-box-footer">
                                    Xem thêm
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{employer.length}</h3>
                                    <p>Nhà tuyển dụng</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <a
                                    href="/employer-management"
                                    className="small-box-footer">
                                    Xem thêm
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{candidate.length}</h3>
                                    <p>Ứng viên</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-stalker" />
                                </div>
                                <a
                                    href="/candidate-management"
                                    className="small-box-footer">
                                    Xem thêm
                                    <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminPage
