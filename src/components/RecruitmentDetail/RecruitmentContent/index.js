import React from 'react'
import { Card } from 'react-bootstrap'

const RecruitmentContent = ({ recruitment }) => {
    return (
        <>
            <div className='d-flex w-100 justify-content-center align-items-center p-3'>
                <h4
                    style={{
                        borderWidth: '0 0 0 4px',
                        borderStyle: 'solid',
                        borderColor: '#5767aa',
                        width: '90%'
                    }}
                    className='ps-2'>
                    Chi tiết tuyển dụng
                </h4>
            </div>
            <div className='d-flex flex-column gap-3 w-100 justify-content-center align-items-center p-3'>
                <Card style={{ width: '90%' }} className=''>
                    <Card.Body>

                        <Card.Title>Mô tả công việc</Card.Title>
                        <Card.Text
                            style={{
                                display: 'list-item',
                                marginLeft: '3em'
                            }}
                            className='mb-2'>
                            {recruitment.jobDescription}
                        </Card.Text>

                        <Card.Title>Yêu cầu ứng viên</Card.Title>
                        <Card.Text
                            style={{
                                display: 'list-item',
                                marginLeft: '3em'
                            }}
                            className='mb-2'>
                            {recruitment.jobRequirement}
                        </Card.Text>

                        <Card.Title>Quyền lợi</Card.Title>
                        <Card.Text
                            style={{
                                display: 'list-item',
                                marginLeft: '3em'
                            }}
                            className='mb-2'>
                            {recruitment.benefit}
                        </Card.Text >

                        <Card.Title>Địa điểm làm việc</Card.Title>
                        <Card.Text
                            style={{
                                display: 'list-item',
                                marginLeft: '3em'
                            }}
                            className='mb-2'>
                            {recruitment.jobAddress.addressDetail}, {recruitment.jobAddress.province}, {recruitment.jobAddress.district}
                        </Card.Text >

                        <Card.Title>Cách thức ứng tuyển</Card.Title>
                        <Card.Text
                            style={{
                                display: 'list-item',
                                marginLeft: '3em'
                            }}
                            className='mb-2' >
                            Ứng tuyển tại đây hoặc tại website của công ty
                        </Card.Text >
                    </Card.Body >
                </Card >
            </div >
        </>
    )
}

export default RecruitmentContent