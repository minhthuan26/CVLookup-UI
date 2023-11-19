import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import { useSelector } from 'react-redux';
import useLoginModal from '~/hooks/useLoginModal';
import useApplyJobModal from '~/hooks/useApplyJobModal';
import ArticleIcon from '@mui/icons-material/Article'

const RecruitmentHeader = ({ recruitment, cvApplied }) => {
    const user = useSelector(state => state.auth.credentials.user)
    const { setLoginModal } = useLoginModal()
    const { setApplyJobModal } = useApplyJobModal()

    const handleApply = () => {
        if (!user) {
            setLoginModal(true)
        } else {
            setApplyJobModal(true)
        }
    }

    useEffect(() => {
        if (user) {
            setLoginModal(false)
        }
    },
        //eslint-disable-next-line
        [user])
    return (
        <Container style={{ width: '90%' }} className='d-flex flex-column gap-2 justify-content-center p-3 mb-2'>
            <div>
                <h5>{recruitment.jobTitle}</h5>
            </div>
            <div className='d-flex gap-5'>
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
            <div className='d-flex gap-5 align-items-center ps-1 py-2'>
                <div className='d-flex'>
                    <div>
                        <AccessTimeFilledRoundedIcon style={{ color: 'rgb(127,135,143)' }} fontSize='small' />
                    </div>
                    <div>
                        Hạn nộp hồ sơ: {new Date(recruitment.applicationDeadline).toLocaleDateString('nl')}
                    </div>
                </div>
                {
                    cvApplied
                        ? (
                            <div className='d-flex'>
                                <div>
                                    <ArticleIcon style={{ color: 'rgb(127,135,143)' }} fontSize='small' />
                                </div>
                                <div>
                                    Đã ứng tuyển vào: {new Date(cvApplied.appliedAt).toLocaleDateString('nl')}
                                </div>
                            </div>
                        )
                        : <></>
                }
            </div>
            <div>
                {!cvApplied
                    ? <Button className='w-100 text-center' variant='primary' onClick={handleApply}>
                        <b>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> {' '}
                            Ứng tuyển ngay
                        </b>
                    </Button>
                    : <Button className='w-100 text-center' variant='primary' onClick={handleApply}>
                        <b>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> {' '}
                            Ứng tuyển lại
                        </b>
                    </Button>
                }

            </div>
        </Container>
    )
}

export default RecruitmentHeader