import React from 'react'
import { Card } from 'react-bootstrap'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import DeskRoundedIcon from '@mui/icons-material/DeskRounded'
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded'
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded'
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded'

const RecruitmentGeneralInfo = ({ recruitment }) => {
    return (
        <>
            <div className='d-flex w-100 justify-content-start align-items-center p-3'>
                <h4
                    style={{ width: '90%' }}
                    className='ps-2'>
                    Thông tin chung
                </h4>
            </div>
            <div className='d-flex flex-column gap-3 w-100 justify-content-center align-items-center p-3'>
                <div style={{ width: '90%' }} className='d-flex flex-column gap-3 ps-2'>
                    <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                        <div>
                            <SchoolRoundedIcon style={{ color: '#5767aa' }} fontSize='small' />
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Kinh nghiệm</div>
                            <div><b>{recruitment.experience.exp}</b></div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                        <div>
                            <i style={{ color: '#5767aa' }} className="fa fa-users" aria-hidden="true"></i>
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Số lượng</div>
                            <div><b>{recruitment.quantity}</b></div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                        <div>
                            <DeskRoundedIcon style={{ color: '#5767aa' }} fontSize='small' />
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Cấp bậc</div>
                            <div><b>{recruitment.jobPosition.position}</b></div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                        <div>
                            <Brightness6RoundedIcon style={{ color: '#5767aa' }} fontSize='small' />
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Hình thức</div>
                            <div><b>{recruitment.jobForm.form}</b></div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                        <div>
                            <GroupWorkRoundedIcon style={{ color: '#5767aa' }} fontSize='small' />
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Ngành nghề</div>
                            <div><b>{recruitment.jobCareer.career}</b></div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-start align-items-center gap-2 me-3'>
                        <div>
                            <ScienceRoundedIcon style={{ color: '#5767aa' }} fontSize='small' />
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Lĩnh vực</div>
                            <div><b>{recruitment.jobField.field}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecruitmentGeneralInfo