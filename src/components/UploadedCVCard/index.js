import React from 'react'
import { Form } from 'react-bootstrap'

const UploadedCVCard = ({ data, show }) => {
    return (
        <div style={{
            display: show === data.id ? 'flex' : 'none'
        }} className='border border-1 justify-content-around mt-2'>
            <Form className='w-100'>
                <Form.Group className='p-2 my-2 me-2 rounded'>
                    <Form.Label>Họ và tên: </Form.Label>
                    <Form.Control
                        disabled
                        type="text"
                        value={data.fullName} />
                </Form.Group>
                <div className='d-flex'>
                    <Form.Group className='w-50 p-2 my-2 me-2 rounded'>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                            disabled
                            type="email"
                            value={data.email} />
                    </Form.Group>
                    <Form.Group className='w-50 p-2 my-2 me-2 rounded'>
                        <Form.Label>Số điện thoại: </Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            value={data.phoneNumber} />
                    </Form.Group>
                </div>
                <Form.Group className='p-2 my-2 me-2 rounded'>
                    <Form.Label>Thư giới thiệu: </Form.Label>
                    <Form.Control
                        disabled
                        as="textarea"
                        style={{ height: '100px' }}
                        value={data.introdution} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default UploadedCVCard