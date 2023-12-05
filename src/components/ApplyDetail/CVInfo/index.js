import React, { useState } from 'react'
import { Container, Card, Button, Form, Modal } from 'react-bootstrap'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import CVViewer from '~/components/CVViewer/CVViewer'
import VisibilityIcon from '@mui/icons-material/Visibility'

const recruitment = {
    jobTitle: 'Tuyen thuc tap sinh PHP',
    salary: 'Thoa thuan',
    jobAddress: {
        addressDetail: 'test',
        province: 'test',
        district: 'test',
    },
    experience: {
        exp: 'test'
    },
    applicationDeadline: Date.now(),
    jobDescription: 'Test',
    jobRequirement: 'test',
    benefit: 'test'
}

const CVInfo = ({ cvIsPass, setCvIsPass }) => {
    const [showCv, setShowCv] = useState(false)
    return (
        <div
            className='d-flex flex-column gap-3 justify-content-center align-items-center p-3'>
            <div
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
                        setCvIsPass(preState => !preState)
                    }}
                />
            </div>
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
                        <div><b>{recruitment.salary}</b></div>
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
                                {recruitment.jobAddress?.addressDetail ? recruitment.jobAddress.addressDetail : ''}{recruitment.jobAddress?.province ? ', ' + recruitment.jobAddress?.province : ''}{recruitment.jobAddress?.district ? ', ' + recruitment.jobAddress.district : ''}
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
                        <div><b>{recruitment.experience.exp}</b></div>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%' }} className='d-flex gap-5 align-items-center ps-1 py-2'>
                <div className='d-flex'>
                    <div>
                        <AccessTimeFilledRoundedIcon style={{ color: 'rgb(127,135,143)' }} fontSize='small' />
                    </div>
                    <div>
                        Ứng tuyển vào lúc: {new Date(recruitment.applicationDeadline).toLocaleDateString('nl')}
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
                            {recruitment.jobDescription}
                        </Card.Text>

                        <div className='d-flex justify-content-center'>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault()
                                    setShowCv(true)
                                }}>Xem CV</Button>
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
                                <CVViewer cvId={'7e79f15a-4248-40fa-ba0f-991da5a22620'} check={false} height={'100%'} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body >
                </Card >
            </div >
        </div>
    )
}

export default CVInfo