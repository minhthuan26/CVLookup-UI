import { South } from '@mui/icons-material'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doUploadNewCV } from '~/action/CVApi'
import useApplyJobModal from '~/hooks/useApplyJobModal'

const ApplyJobModal = ({ show, user }) => {
    const { setApplyJobModal } = useApplyJobModal()
    const [isUpLoadCV, setIsUpLoadCV] = useState(true)
    const dispatch = useDispatch()
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [cv, setCV] = useState()
    const [introduction, setIntroduction] = useState('')
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const handleClose = () => {
        setApplyJobModal(false)
        setIsUpLoadCV(true)
    }

    const handleUploadedCV = (e) => {
        e.target.id === 'radio-uploaded-cv'
            ? setIsUpLoadCV(true)
            : setIsUpLoadCV(false)
    }

    const handleApply = (e) => {
        e.preventDefault()
        const phoneRegex = /^\d{10}$/
        if (
            !fullname.trim() ||
            !email.trim() ||
            !phoneNumber.trim() ||
            !cv ||
            !introduction.trim()
        ) {
            toast.error('Vui lòng điền đầy đủ thông tin')
            return
        }

        if (!phoneRegex.test(phoneNumber)) {
            toast.error('Số điện thoại không đúng định dạng.')
            return
        }
        var formData = new FormData()
        formData.append('FullName', fullname)
        formData.append('Email', email)
        formData.append('PhoneNumber', phoneNumber)
        formData.append('CVFile', cv)
        formData.append('Introdution', introduction)
        const uploadCV = async (axiosPrivate, dispatch, data) =>
            await doUploadNewCV(axiosPrivate, dispatch, data)
        uploadCV(axiosPrivate, dispatch, formData)
    }
    return (
        <Modal
            animation={true}
            centered
            size="lg"
            backdrop="static"
            show={show}
            onHide={handleClose}
            fullscreen={false}>
            <Modal.Header closeButton>
                <Modal.Title className="">Đơn ứng tuyển</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <i
                            style={{ color: '#5767aa' }}
                            className="fa fa-folder"
                            aria-hidden="true"></i>
                        <div className="text-center">
                            <b>Chọn CV ứng tuyển: </b>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="d-flex align-items-center gap-2">
                                <Form.Group>
                                    <Form.Check
                                        type="radio"
                                        id="radio-uploaded-cv">
                                        <Form.Check.Input
                                            onClick={handleUploadedCV}
                                            style={{ borderColor: 'black' }}
                                            type="radio"
                                            defaultChecked="true"
                                            name="group2"
                                        />
                                        <Form.Check.Label className="d-flex align-items-center gap-2">
                                            <i
                                                style={{ color: '#5767aa' }}
                                                className="fa fa-bookmark"
                                                aria-hidden="true"></i>
                                            <div>
                                                <b>CV đã tải lên: </b>
                                            </div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                            </div>

                            <div
                                className="border border-1 rounded mt-2"
                                style={{
                                    display: isUpLoadCV ? 'block' : 'none',
                                }}>
                                <ul>
                                    <li className="p-2 border border-1 my-2 me-2 rounded">
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                id="radio-cv-1">
                                                <Form.Check.Input
                                                    style={{
                                                        borderColor: 'black',
                                                    }}
                                                    type="radio"
                                                    defaultChecked="true"
                                                    name="group3"
                                                />
                                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <div>CV 1</div>
                                                        <a href="/test">Xem</a>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </li>
                                    <li className="p-2 border border-1 my-2 me-2 rounded">
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                id="radio-cv-2">
                                                <Form.Check.Input
                                                    style={{
                                                        borderColor: 'black',
                                                    }}
                                                    type="radio"
                                                    name="group3"
                                                />
                                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <div>CV 2</div>
                                                        <a href="/test">Xem</a>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </li>
                                    <li className="p-2 border border-1 my-2 me-2 rounded">
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                id="radio-cv-3">
                                                <Form.Check.Input
                                                    style={{
                                                        borderColor: 'black',
                                                    }}
                                                    type="radio"
                                                    name="group3"
                                                />
                                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <div>CV 3</div>
                                                        <a href="/test">Xem</a>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </li>
                                    <li className="p-2 border border-1 my-2 me-2 rounded">
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                id="radio-cv-4">
                                                <Form.Check.Input
                                                    style={{
                                                        borderColor: 'black',
                                                    }}
                                                    type="radio"
                                                    name="group3"
                                                />
                                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <div>CV 4</div>
                                                        <a href="/test">Xem</a>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </li>
                                    <li className="p-2 border border-1 my-2 me-2 rounded">
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                id="radio-cv-5">
                                                <Form.Check.Input
                                                    style={{
                                                        borderColor: 'black',
                                                    }}
                                                    type="radio"
                                                    name="group3"
                                                />
                                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <div>CV 5</div>
                                                        <a href="/test">Xem</a>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </li>
                                    <li className="p-2 border border-1 my-2 me-2 rounded">
                                        <Form.Group>
                                            <Form.Check
                                                type="radio"
                                                id="radio-cv-6">
                                                <Form.Check.Input
                                                    style={{
                                                        borderColor: 'black',
                                                    }}
                                                    type="radio"
                                                    name="group3"
                                                />
                                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <div>CV 6</div>
                                                        <a href="/test">Xem</a>
                                                    </div>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div className="d-flex align-items-center gap-2">
                                <Form.Group>
                                    <Form.Check type="radio" id="radio-new-cv">
                                        <Form.Check.Input
                                            onClick={handleUploadedCV}
                                            style={{ borderColor: 'black' }}
                                            type="radio"
                                            name="group2"
                                        />
                                        <Form.Check.Label className="d-flex align-items-center gap-2">
                                            <i
                                                style={{ color: '#5767aa' }}
                                                className="fa fa-upload"
                                                aria-hidden="true"></i>
                                            <div>
                                                <b>Tải lên CV mới: </b>
                                            </div>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                            </div>
                            <div
                                className="border border-1 rounded mt-2"
                                style={{
                                    display: isUpLoadCV ? 'none' : 'block',
                                }}>
                                <Form>
                                    <Form.Group className="p-2 my-2 me-2 rounded">
                                        <Form.Label>
                                            Họ và tên{' '}
                                            <span style={{ color: 'red' }}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            value={fullname}
                                            onChange={(e) =>
                                                setFullname(e.target.value)
                                            }
                                            type="text"
                                            placeholder="Họ và tên hiển thị với nhà tuyển dụng"
                                        />
                                    </Form.Group>
                                    <div className="d-flex">
                                        <Form.Group className="w-50 p-2 my-2 me-2 rounded">
                                            <Form.Label>
                                                Email{' '}
                                                <span style={{ color: 'red' }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                type="email"
                                                placeholder="Email hiển thị với nhà tuyển dụng"
                                            />
                                        </Form.Group>
                                        <Form.Group className="w-50 p-2 my-2 me-2 rounded">
                                            <Form.Label>
                                                Số điện thoại{' '}
                                                <span style={{ color: 'red' }}>
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                value={phoneNumber}
                                                onChange={(e) =>
                                                    setPhoneNumber(
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                placeholder="Số điện thoại hiển thị với nhà tuyển dụng"
                                            />
                                        </Form.Group>
                                    </div>
                                    <Form.Group className="p-2 my-2 me-2 rounded">
                                        <Form.Label>
                                            Chọn CV từ thiết bị của bạn{' '}
                                            <span style={{ color: 'red' }}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            onChange={(e) => {
                                                const file = e.target.files[0]
                                                setCV(file)
                                            }}
                                            accept=".pdf"
                                            type="file"
                                            placeholder="CV"
                                        />
                                    </Form.Group>
                                    <Form.Group className="p-2 my-2 me-2 rounded">
                                        <Form.Label>
                                            Thư giới thiệu{' '}
                                            <span style={{ color: 'red' }}>
                                                *
                                            </span>
                                        </Form.Label>
                                        <Form.Control
                                            value={introduction}
                                            onChange={(e) =>
                                                setIntroduction(e.target.value)
                                            }
                                            as="textarea"
                                            style={{ height: '100px' }}
                                        />
                                    </Form.Group>
                                </Form>
                            </div>
                        </li>
                        <li>
                            <div className="rounded mt-2 d-flex gap-2 justify-content-center">
                                <div style={{ width: '90%' }} className="py-2">
                                    <Button
                                        className="w-100"
                                        onClick={handleApply}>
                                        Nộp đơn ứng tuyển
                                    </Button>
                                </div>
                                <div className="py-2">
                                    <Button
                                        onClick={handleClose}
                                        variant="danger">
                                        Huỷ
                                    </Button>
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
