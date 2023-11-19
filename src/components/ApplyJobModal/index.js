import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doGetCurrentUserCVUploaded, doUploadNewCV } from '~/action/CvApi'
import { doApplyToRecruitment, doReApplyToRecruitment } from '~/action/recruitmentCvApi'
import useApplyJobModal from '~/hooks/useApplyJobModal'
import UploadedCVCard from '../UploadedCVCard'

const ApplyJobModal = ({ show, appliedCv, user }) => {
    const { setApplyJobModal } = useApplyJobModal()
    const [isChooseOldCV, setIsChooseOldCV] = useState(true)
    const dispatch = useDispatch()
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [cv, setCV] = useState()
    const [introduction, setIntroduction] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentUserCVUploaded, setCurrentUserCVUploaded] = useState([])
    const navigate = useNavigate()
    const [cvSelected, setCvSelected] = useState()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const handleClose = () => {
        setApplyJobModal(false)
        setIsChooseOldCV(true)
        setCvSelected('')
    }

    const handleIsChooseOldCV = (e) => {
        e.target.id === 'radio-uploaded-cv' ? setIsChooseOldCV(true) : setIsChooseOldCV(false)
    }

    const handleApply = (e) => {
        e.preventDefault()

        var formData = new FormData()
        if (!isChooseOldCV) {
            const phoneRegex = /^\d{10}$/
            if (
                !fullname.trim() ||
                !email.trim() ||
                !phoneNumber.trim() ||
                !cv ||
                !introduction.trim()) {
                toast.error("Vui lòng điền đầy đủ thông tin")
                return
            }

            if (!phoneRegex.test(phoneNumber)) {
                toast.error('Số điện thoại không đúng định dạng.')
                return
            }
            formData.append("FullName", fullname)
            formData.append("Email", email)
            formData.append("PhoneNumber", phoneNumber)
            formData.append("CVFile", cv)
            formData.append("Introdution", introduction)
            const uploadCV = async (axiosPrivate, dispatch, data) => await doUploadNewCV(axiosPrivate, dispatch, data)
            uploadCV(axiosPrivate, dispatch, formData).then((data) => {
                const applyData = {
                    recruitmentId: searchParams.get('id'),
                    curriculumVitaeId: data.id
                }
                const applyToRecruitment = async (axiosPrivate, dispatch, data) => await doApplyToRecruitment(axiosPrivate, dispatch, data)
                applyToRecruitment(axiosPrivate, dispatch, applyData).then((data) => {
                    setFullname('')
                    setEmail('')
                    setPhoneNumber('')
                    setCV()
                    setIntroduction('')
                    setIsChooseOldCV(true)
                    setApplyJobModal(false)
                    navigate(0)
                })
            })
        } else {
            if (cvSelected) {
                const applyData = {
                    recruitmentId: searchParams.get('id'),
                    curriculumVitaeId: cvSelected
                }
                const applyToRecruitment = async (axiosPrivate, dispatch, data) => await doApplyToRecruitment(axiosPrivate, dispatch, data)
                applyToRecruitment(axiosPrivate, dispatch, applyData).then((data) => {
                    setFullname('')
                    setEmail('')
                    setPhoneNumber('')
                    setCV()
                    setIntroduction('')
                    setIsChooseOldCV(true)
                    setApplyJobModal(false)
                })
            } else {
                toast.error("Vui lòng chọn cv để ứng tuyển")
            }
        }
    }

    const handleReApply = (e) => {
        e.preventDefault()
        var formData = new FormData()
        if (!isChooseOldCV) {
            const phoneRegex = /^\d{10}$/
            if (
                !fullname.trim() ||
                !email.trim() ||
                !phoneNumber.trim() ||
                !cv ||
                !introduction.trim()) {
                toast.error("Vui lòng điền đầy đủ thông tin")
                return
            }

            if (!phoneRegex.test(phoneNumber)) {
                toast.error('Số điện thoại không đúng định dạng.')
                return
            }
            formData.append("FullName", fullname)
            formData.append("Email", email)
            formData.append("PhoneNumber", phoneNumber)
            formData.append("CVFile", cv)
            formData.append("Introdution", introduction)
            const uploadCV = async (axiosPrivate, dispatch, data) => await doUploadNewCV(axiosPrivate, dispatch, data)
            uploadCV(axiosPrivate, dispatch, formData).then((data) => {
                const applyData = {
                    recruitmentId: searchParams.get('id'),
                    cvId: data.id,
                    userId: user.id
                }
                const reApplyToRecruitment = async (axiosPrivate, dispatch, data) => await doReApplyToRecruitment(axiosPrivate, dispatch, data)
                reApplyToRecruitment(axiosPrivate, dispatch, applyData).then((data) => {
                    setFullname('')
                    setEmail('')
                    setPhoneNumber('')
                    setCV()
                    setIntroduction('')
                    setIsChooseOldCV(true)
                    setApplyJobModal(false)
                    navigate(0)
                })
            })
        } else {
            if (cvSelected) {
                const applyData = {
                    recruitmentId: searchParams.get('id'),
                    cvId: cvSelected,
                    userId: user.id
                }
                const reApplyToRecruitment = async (axiosPrivate, dispatch, data) => await doReApplyToRecruitment(axiosPrivate, dispatch, data)
                reApplyToRecruitment(axiosPrivate, dispatch, applyData).then((data) => {
                    setFullname('')
                    setEmail('')
                    setPhoneNumber('')
                    setCV()
                    setIntroduction('')
                    setIsChooseOldCV(true)
                    setApplyJobModal(false)
                    setCvSelected('')
                })
            } else {
                toast.error("Vui lòng chọn cv để ứng tuyển")
            }
        }

    }

    useEffect(() => {
        if (user) {
            const getAllCVUploaded = async (axiosPrivate, dispatch) => await doGetCurrentUserCVUploaded(axiosPrivate, dispatch)
            getAllCVUploaded(axiosPrivate, dispatch).then(data => {
                if (data) {
                    setCurrentUserCVUploaded(data)
                }
            })
        }

    },
        //eslint-disable-next-line
        [user])

    return (
        <Modal
            animation={true}
            centered
            size='lg'
            backdrop="static"
            show={show}
            onHide={handleClose}
            fullscreen={false}>
            <Modal.Header closeButton>
                <Modal.Title className=''>Đơn ứng tuyển</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <i style={{ color: '#5767aa' }} className="fa fa-folder" aria-hidden="true"></i>
                        <div className='text-center'><b>Chọn CV ứng tuyển: </b></div>
                    </div>
                    <ul>
                        <li>
                            <div className='d-flex align-items-center gap-2'>
                                <Form.Group>
                                    <Form.Check
                                        type='radio'
                                        id='radio-uploaded-cv'>
                                        <Form.Check.Input
                                            onClick={handleIsChooseOldCV}
                                            style={{ borderColor: 'black' }}
                                            type='radio'
                                            defaultChecked='true'
                                            name="group2" />
                                        <Form.Check.Label className='d-flex align-items-center gap-2'>
                                            <i style={{ color: '#5767aa' }} className="fa fa-bookmark" aria-hidden="true"></i>
                                            <div><b>CV đã tải lên: </b></div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                            </div>

                            <div className='border border-1 rounded mt-2' style={{ display: isChooseOldCV ? 'block' : 'none' }}>
                                <ul>
                                    {
                                        currentUserCVUploaded.length > 0
                                            ? currentUserCVUploaded.map(cv => (
                                                <li key={cv.id} className='p-2 border border-1 my-2 me-2 rounded'>
                                                    <Form.Group>
                                                        <Form.Check
                                                            type='radio'
                                                            id={cv.id}>
                                                            <Form.Check.Input
                                                                style={{ borderColor: 'black' }}
                                                                type='radio'
                                                                name="group3"
                                                                onChange={(e) => {
                                                                    setCvSelected(e.target.id)
                                                                    e.target.defaultChecked = true
                                                                }} />
                                                            <Form.Check.Label className='d-flex align-items-center gap-2'>
                                                                <div className='d-flex w-100 justify-content-between align-items-center'>
                                                                    <div>{cv.uploadedAt}</div>
                                                                    <a href='/test'>
                                                                        Xem
                                                                    </a>
                                                                </div>
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Form.Group>
                                                    <UploadedCVCard show={cvSelected} data={cv} />
                                                </li>))
                                            : <div className='text-center'>
                                                <p><b>Chưa upload cv</b></p>
                                            </div>
                                    }

                                </ul>
                            </div>
                        </li>

                        <li>
                            <div className='d-flex align-items-center gap-2'>
                                <Form.Group>
                                    <Form.Check
                                        type='radio'
                                        id='radio-new-cv'>
                                        <Form.Check.Input
                                            onClick={handleIsChooseOldCV}
                                            style={{ borderColor: 'black' }}
                                            type='radio'
                                            name="group2" />
                                        <Form.Check.Label className='d-flex align-items-center gap-2'>
                                            <i style={{ color: '#5767aa' }} className="fa fa-upload" aria-hidden="true"></i>
                                            <div><b>Tải lên CV mới: </b></div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                            </div>
                            <div className='border border-1 rounded mt-2' style={{ display: isChooseOldCV ? 'none' : 'block' }}>
                                <Form>
                                    <Form.Group className='p-2 my-2 me-2 rounded'>
                                        <Form.Label>Họ và tên <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder='Họ và tên hiển thị với nhà tuyển dụng' />
                                    </Form.Group>
                                    <div className='d-flex'>
                                        <Form.Group className='w-50 p-2 my-2 me-2 rounded'>
                                            <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email hiển thị với nhà tuyển dụng' />
                                        </Form.Group>
                                        <Form.Group className='w-50 p-2 my-2 me-2 rounded'>
                                            <Form.Label>Số điện thoại <span style={{ color: 'red' }}>*</span></Form.Label>
                                            <Form.Control value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder='Số điện thoại hiển thị với nhà tuyển dụng' />
                                        </Form.Group>
                                    </div>
                                    <Form.Group className='p-2 my-2 me-2 rounded'>
                                        <Form.Label>Chọn CV từ thiết bị của bạn <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            onChange={(e) => {
                                                const file = e.target.files[0]
                                                setCV(file)
                                            }}
                                            accept=".pdf"
                                            type="file"
                                            placeholder='CV' />
                                    </Form.Group>
                                    <Form.Group className='p-2 my-2 me-2 rounded'>
                                        <Form.Label>Thư giới thiệu <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control value={introduction} onChange={(e) => setIntroduction(e.target.value)} as="textarea" style={{ height: '100px' }} />
                                    </Form.Group>
                                </Form>
                            </div>
                        </li>
                        <li>
                            <div className='rounded mt-2 d-flex gap-2 justify-content-center'>
                                <div style={{ width: '90%' }} className='py-2'>
                                    <Button className='w-100' onClick={appliedCv ? handleReApply : handleApply}>Nộp đơn ứng tuyển</Button>
                                </div>
                                <div className='py-2'>
                                    <Button onClick={handleClose} variant='danger'>Huỷ</Button>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ApplyJobModal