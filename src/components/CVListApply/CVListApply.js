import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import usePrivateAxios from '~/action/AxiosCredentials'
import {
    doGetCVByRecruitmentId,
    doToggleIsPass,
    doUpdateIsView,
} from '~/action/recruitmentCvApi'
import { faCaretDown, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PopupBase from '../Popup/PopupBase'
import CVViewer from '../CVViewer/CVViewer'
function CVListApply(props) {
    const [isDuyet, setIsDuyet] = useState(false)

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
    const updateIsView = async (axiosPrivate, dispatch, id) =>
        await doUpdateIsView(axiosPrivate, dispatch, id)
    const toggleIsPass = async (axiosPrivate, dispatch, id) =>
        await doToggleIsPass(axiosPrivate, dispatch, id)
    useEffect(() => {
        getCvByRecruitmentId(axiosPrivate, dispatch, props.id).then((data) =>
            setCvList(data.curriculumVitaes)
        )
    }, [axiosPrivate, dispatch, props.id])

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
            updateIsView(axiosPrivate, dispatch, cv.id)
        }

    }
    return (
        <>
            {cvList && cvList.length > 0 ? (
                cvList.map((cv) => (
                    <Row key={cv.id} style={{}}>
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
                                                <div className="form-check d-flex justify-content-around align-items-center">
                                                    <input
                                                        style={{
                                                            padding: '10px',
                                                            margin: '0 1rem',
                                                        }}
                                                        type="checkbox"
                                                        className="form-check-input     "
                                                        id="duyetCheckbox"
                                                        checked={isDuyet}
                                                        onChange={() => {
                                                            setIsDuyet(!isDuyet)
                                                            toggleIsPass(
                                                                axiosPrivate,
                                                                dispatch,
                                                                cv.id
                                                            )
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor="duyetCheckbox"
                                                        className={`form-check-label text ${isDuyet
                                                                ? 'text-success'
                                                                : 'text-danger'
                                                            }`}>
                                                        {isDuyet
                                                            ? 'Đã Duyệt'
                                                            : 'Chưa Duyệt'}
                                                    </label>
                                                </div>
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
                            <div style={{ height: '90vh' }}>
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
                        fontSize: '1.5rem',
                        padding: '2rem',
                    }}>
                    <em>Chưa có ứng viên ứng tuyển</em>
                </span>
            )}
        </>
    )
}

export default CVListApply
