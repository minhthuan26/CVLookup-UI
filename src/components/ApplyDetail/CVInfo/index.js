import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Form, Modal } from 'react-bootstrap'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import CVViewer from '~/components/CVViewer/CVViewer'
import { doToggleIsPass, doUpdateIsView } from '~/action/recruitmentCvApi'
import { useDispatch, useSelector } from 'react-redux'
import usePrivateAxios from '~/action/AxiosCredentials'

const CVInfo = ({ recruitmentCv, cv }) => {
    const [showCv, setShowCv] = useState(false)
    const [cvIsPass, setCvIsPass] = useState(false)
    const [cvIsView, setCvIsView] = useState(false)
    const accessToken = useSelector(state => state.auth.credentials.accessToken)
    const axiosPrivate = usePrivateAxios(accessToken)
    const dispatch = useDispatch()
    const updateIsView = async (axiosPrivate, dispatch, cvId, recruitmentId) =>
        await doUpdateIsView(axiosPrivate, dispatch, cvId, recruitmentId)
    const toggleIsPass = async (axiosPrivate, dispatch, cvId, recruitmentId) =>
        await doToggleIsPass(axiosPrivate, dispatch, cvId, recruitmentId)
    useEffect(() => {
        if (recruitmentCv) {
            setCvIsPass(recruitmentCv.isPass)
            setCvIsView(recruitmentCv.isView)
        }
    },
        //eslint-disable-next-line
        [recruitmentCv])
    return (
        <div
            className='d-flex flex-column gap-3 justify-content-center align-items-center p-3'>
            {recruitmentCv ? <div
                style={{
                    backgroundColor: cvIsPass ? 'rgba(13, 245, 5, 0.1)' : 'rgba(255, 0, 0,0.1)'
                }} className='d-flex w-100 gap-4 align-items-center justify-content-start rounded-4 ps-3 py-2'>
                <Form.Check // prettier-ignore
                    type='checkbox'
                    label={cvIsPass ? 'Đã duyệt' : 'Chưa duyệt'}
                    id='checked-pass'
                    checked={cvIsPass}
                    style={{
                        color: cvIsPass ? 'green' : 'red'
                    }}
                    onChange={() => {
                        toggleIsPass(axiosPrivate, dispatch, cv.id, recruitmentCv.recruitment.id).then(data => {
                            setCvIsPass(data.isPass)
                        })
                    }}
                />
            </div>
                : <></>}
            <div className='text-center text-decoration-underline mb-2'>
                <h4>ĐƠN XIN TUYỂN DỤNG</h4>
            </div>
            <div style={{ width: '90%' }} className='d-flex gap-5 justify-content-between'>
                <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                    <div>
                        <PersonIcon style={{ color: '#5767aa' }} fontSize='large' />
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Họ và tên</div>
                        <div><b>{cv?.fullName}</b></div>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                    <div>
                        <AlternateEmailIcon style={{ color: '#5767aa' }} fontSize='large' />
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Email</div>
                        <div>
                            <b>
                                {cv?.email}
                            </b>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                    <div>
                        <PhoneAndroidIcon style={{ color: '#5767aa' }} fontSize='large' />
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Số điện thoại</div>
                        <div><b>{cv?.phoneNumber}</b></div>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%' }} className='d-flex gap-5 align-items-center ps-1 py-2'>
                <div className='d-flex'>
                    <div>
                        <AccessTimeFilledRoundedIcon style={{ color: 'rgb(127,135,143)' }} fontSize='small' />
                    </div>
                    <div>
                        Ứng tuyển vào lúc: {recruitmentCv?.appliedAt}
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>

            <div className='d-flex w-100 justify-content-center align-items-center p-3'>
                <h4
                    style={{
                        borderWidth: '0 0 0 4px',
                        borderStyle: 'solid',
                        borderColor: '#5767aa',
                        width: '90%'
                    }}
                    className='ps-2'>
                    Ứng tuyển
                </h4>
            </div>
            <div className='d-flex flex-column gap-3 w-100 justify-content-center align-items-center p-3'>
                <Card style={{ width: '90%' }} className=''>
                    <Card.Body>
                        <Card.Title>Thư giới thiệu</Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: '3em',
                                whiteSpace: 'pre-wrap'
                            }}
                            className='mb-2'>
                            {cv?.introdution}
                        </Card.Text>

                        <div className='d-flex mt-4 justify-content-end'>
                            <Card.Link href='#'
                                onClick={(e) => {
                                    e.preventDefault()
                                    setShowCv(true)
                                    updateIsView(axiosPrivate, dispatch, cv.id, recruitmentCv.recruitment.id)
                                }}>Xem CV</Card.Link>
                        </div>
                        <Modal
                            animation={true}
                            centered
                            size="xl"
                            backdrop="static"
                            show={showCv}
                            onHide={() => setShowCv(false)}
                            fullscreen={false}>
                            <Modal.Header className='d-flex justify-content-center w-100' closeButton>
                                <Modal.Title>ĐƠN XIN TUYỂN DỤNG</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <CVViewer cvId={cv?.id} check={false} height={'100%'} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='danger' onClick={() => setShowCv(false)}>
                                    Đóng
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body >
                </Card >
            </div >
        </div>
    )
}

export default CVInfo