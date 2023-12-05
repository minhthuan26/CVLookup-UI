import React from 'react'
import { Container, Card, Form } from 'react-bootstrap'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'

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

const JobInfo = () => {
    return (
        <div className='d-flex flex-column gap-3 justify-content-center align-items-center p-3'>
            <div className='d-flex w-100 gap-4 align-items-center justify-content-start py-2' style={{ visibility: 'hidden' }}>
                <Form.Check />
            </div>
            <div className='text-center text-decoration-underline mb-2 text-uppercase'>
                <h4>{recruitment.jobTitle}</h4>
            </div>
            <div style={{ width: '90%' }} className='d-flex gap-5 justify-content-between'>
                <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                    <div>
                        <PaidRoundedIcon style={{ color: '#5767aa' }} fontSize='large' />
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Mức lương</div>
                        <div><b>{recruitment.salary}</b></div>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                    <div>
                        <PlaceRoundedIcon style={{ color: '#5767aa' }} fontSize='large' />
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Địa điểm</div>
                        <div>
                            <b>
                                {recruitment.jobAddress?.addressDetail ? recruitment.jobAddress.addressDetail : ''}{recruitment.jobAddress?.province ? ', ' + recruitment.jobAddress?.province : ''}{recruitment.jobAddress?.district ? ', ' + recruitment.jobAddress.district : ''}
                            </b>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                    <div>
                        <AccessTimeRoundedIcon style={{ color: '#5767aa' }} fontSize='large' />
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Kinh nghiệm</div>
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
                        Hạn nộp hồ sơ: {new Date(recruitment.applicationDeadline).toLocaleDateString('nl')}
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
                    Chi tiết tuyển dụng
                </h4>
            </div>
            <div className='d-flex flex-column gap-3 w-100 justify-content-center align-items-center p-3'>
                <Card style={{ width: '90%' }} className=''>
                    <Card.Body>

                        <Card.Title>Mô tả công việc</Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: '3em',
                                whiteSpace: 'pre-wrap'
                            }}
                            className='mb-2'>
                            {recruitment.jobDescription}
                        </Card.Text>

                        <Card.Title>Yêu cầu ứng viên</Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: '3em',
                                whiteSpace: 'pre-wrap'
                            }}
                            className='mb-2'>
                            {recruitment.jobRequirement}
                        </Card.Text>

                        <Card.Title>Quyền lợi</Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: '3em',
                                whiteSpace: 'pre-wrap'
                            }}
                            className='mb-2'>
                            {recruitment.benefit}
                        </Card.Text >

                        <Card.Title>Địa điểm làm việc</Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: '3em'
                            }}
                            className='mb-2'>
                            {recruitment.jobAddress?.addressDetail ? recruitment.jobAddress.addressDetail : ''}{recruitment.jobAddress?.province ? ', ' + recruitment.jobAddress?.province : ''}{recruitment.jobAddress?.district ? ', ' + recruitment.jobAddress.district : ''}
                        </Card.Text >

                        <Card.Title>Cách thức ứng tuyển</Card.Title>
                        <Card.Text
                            style={{
                                marginLeft: '3em'
                            }}
                            className='mb-2' >
                            Ứng tuyển tại đây hoặc tại website của công ty
                        </Card.Text >
                    </Card.Body >
                </Card >
            </div >
        </div>
    )
}

export default JobInfo