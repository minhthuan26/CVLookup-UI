import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import usePrivateAxios from '~/action/AxiosCredentials'
import {
    doGetCVByIsPass,
    doGetCVByRecruitmentId,
    doToggleIsPass,
    doUpdateIsView,
} from '~/action/recruitmentCvApi'
import { faCaretDown, faEye, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopupBase from '../Popup/PopupBase'
import CVViewer from '../CVViewer/CVViewer'
function CVListApply(props) {
    const [isDuyet, setIsDuyet] = useState({})

    const [openCvMap, setOpenCvMap] = useState({})
    const [cvList, setCvList] = useState([])
    const [showCV, setShowCV] = useState(false)
    const [CVDetail, setCVDetail] = useState([])
    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const getCvByRecruitmentId = async (axiosPrivate, dispatch, id) =>
        await doGetCVByRecruitmentId(axiosPrivate, dispatch, id)

    const getCvByIsPass = async (axiosPrivate, dispatch, id) =>
        await doGetCVByIsPass(axiosPrivate, dispatch, id)

    const updateIsView = async (axiosPrivate, dispatch, id) =>
        await doUpdateIsView(axiosPrivate, dispatch, id)
    const toggleIsPass = async (axiosPrivate, dispatch, id) =>
        await doToggleIsPass(axiosPrivate, dispatch, id)
    // .then((data) =>
    //     setIsDuyet((prevIsDuyet) => !prevIsDuyet)
    // )
    useEffect(
        () => {
            if (props.checkIsPassSuccess === true) {
                getCvByIsPass(axiosPrivate, dispatch, props.id).then((data) => {
                    setCvList(data.curriculumVitaes)
                    if (data.length > 0) {
                        setIsDuyet(
                            data.curriculumVitaes.reduce((acc, cv) => {
                                acc[cv.id] = data.isPass
                                return acc
                            }, {})
                        )
                    }
                })
            } else {
                getCvByRecruitmentId(axiosPrivate, dispatch, props.id).then(
                    (data) => {
                        setCvList(data.curriculumVitaes)
                        if (data.length > 0) {
                            setIsDuyet(
                                data.curriculumVitaes.reduce((acc, cv) => {
                                    acc[cv.id] = data.isPass
                                    return acc
                                }, {})
                            )
                        }
                    }
                )
            }
        },
        // eslint-disable-next-line
        [props.id]
    )

    const toggleCvDetails = (cvId) => {
        setOpenCvMap((prevOpenCvMap) => ({
            ...prevOpenCvMap,
            [cvId]: !prevOpenCvMap[cvId],
        }))
    }

    const handleViewCV = (cv) => {
        setShowCV(true)
        setCVDetail(cv)
        if (!cv.isView) {
            updateIsView(axiosPrivate, dispatch, cv.id, props.id)
        }

    }
    return (
        <div style={{ height: '85vh' }}>
            {cvList && cvList.length > 0 ? (
                cvList.map((cv) => (
                    <Row key={cv.id}>
                        <div
                            style={{
                                margin: '1rem',
                                padding: '1rem 2rem',
                                width: '90%',
                                borderRadius: '10px',
                                borderBottom: '#c3c3c3c3 solid 3px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <div>
                                <h5 style={{ fontWeight: 'bold' }}>
                                    {cv.fullName} -- {cv.email}
                                </h5>
                                {openCvMap[cv.id] && (
                                    <ul
                                        style={{
                                            margin: '.3rem',
                                            lineHeight: '2.5rem',
                                            listStyleType: 'square',
                                            fontSize: '16px',
                                        }}>
                                        <li>Tên ứng viên: {cv.fullName}</li>
                                        <li>Email: {cv.email}</li>
                                        <li>Số điện thoại: {cv.phoneNumber}</li>
                                        <li>
                                            Thư giới thiệu: {cv.introdution}
                                        </li>

                                        <li>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        'space-between',
                                                    padding: '1rem',
                                                    width: '100%',
                                                    backgroundColor: '#eee',
                                                    borderRadius: '10px',
                                                }}>
                                                <div
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() =>
                                                        handleViewCV(cv)
                                                    }>
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                        size="lg"
                                                    />
                                                    &emsp;&emsp;
                                                    <span
                                                        style={{
                                                            color: '#5767aa',
                                                            fontWeight: '500',
                                                        }}>
                                                        Xem CV
                                                    </span>
                                                </div>
                                                {!props.checkIsPassSuccess && (
                                                    <button
                                                        className={`btn ${
                                                            isDuyet[cv.id]
                                                                ? 'btn-success'
                                                                : 'btn-danger'
                                                        }`}
                                                        onClick={() => {
                                                            const newIsDuyetMap =
                                                                { ...isDuyet }
                                                            newIsDuyetMap[
                                                                cv.id
                                                            ] =
                                                                !newIsDuyetMap[
                                                                    cv.id
                                                                ]
                                                            setIsDuyet(
                                                                newIsDuyetMap
                                                            )
                                                            toggleIsPass(
                                                                axiosPrivate,
                                                                dispatch,
                                                                cv.id,
                                                                props.id
                                                            )
                                                        }}>
                                                        {isDuyet[cv.id]
                                                            ? 'Duyệt'
                                                            : 'Huỷ'}
                                                    </button>
                                                )}

                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <FontAwesomeIcon
                                style={{
                                    cursor: 'pointer',
                                }}
                                onClick={() => toggleCvDetails(cv.id)}
                                icon={faCaretDown}
                            />
                        </div>
                        <PopupBase
                            trigger={showCV}
                            setTriger={setShowCV}
                            title={`${CVDetail.fullName} - ${CVDetail.email}`}>
                            <div style={{ height: '90vh', overflow: 'hidden' }}>
                                <CVViewer Cvid={CVDetail.id} check={true} />

                            </div>
                        </PopupBase>
                    </Row>
                ))
            ) : (
                <span
                    style={{
                        color: 'red',
                        fontWeight: '500',
                        fontSize: '1.3rem',
                        padding: '2rem',
                    }}>
                    {props.checkIsPassSuccess ? (
                        <em>Chưa có CV được duyệt</em>
                    ) : (
                        <em>Chưa có ứng viên ứng tuyển</em>
                    )}
                </span>
            )}
        </div>
    )
}

export default CVListApply
