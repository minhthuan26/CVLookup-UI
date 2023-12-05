import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import RecruitmentGeneralInfo from '~/components/RecruitmentDetail/RecruitmentGeneralInfo'
import CompanyInfoHeader from '~/components/RecruitmentDetail/CompanyInfoHeader'
import RecruitmentContent from '~/components/RecruitmentDetail/RecruitmentContent'
import RecruitmentHeader from '~/components/RecruitmentDetail/RecruitmentHeader'
import SearchBarAdvance from '~/components/SearchBarAdvance'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { doGetRecruitmentDetail } from '~/action/recruitmentApi'
import LoginModal from '~/components/LoginModal'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doGetAppliedCV } from '~/action/recruitmentCvApi'
import useApplyJobModal from '~/hooks/useApplyJobModal'

const RecruitmentDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [recruitment, setRecruitment] = useState()
    const { appliedCv, setAppliedCv } = useApplyJobModal()
    const user = useSelector(state => state.auth.credentials.user)
    const accessToken = useSelector(state => state.auth.credentials.accessToken)
    const axiosPrivate = usePrivateAxios(accessToken)
    const role = useSelector(state => state.auth.credentials.role)

    useEffect(() => {
        const getRecruitmentDetail = async (id, dispatch, navigate) => await doGetRecruitmentDetail(id, dispatch, navigate)
        getRecruitmentDetail(searchParams.get('id'), dispatch, navigate).then(data => {
            setRecruitment(data)
        })
    },
        //eslint-disable-next-line
        [searchParams.get('id')])

    useEffect(() => {
        if (user && recruitment && role !== 'Employer') {
            const data = {
                userId: user.id,
                recruitmentId: recruitment.id
            }
            const getAppliedCV = async (axiosPrivate, dispatch, data) => await doGetAppliedCV(axiosPrivate, dispatch, data)
            getAppliedCV(axiosPrivate, dispatch, data).then(data => {
                if (data) {
                    setAppliedCv(data)
                }
            })
        }
    },
        // eslint-disable-next-line
        [user, recruitment])
    return (
        <>
            <SearchBarAdvance />
            {
                recruitment
                    ? <div className='d-flex'>
                        <div style={{ width: '70%' }} className='d-flex justify-content-center'>
                            <div className='d-flex w-100 flex-column gap-2'>
                                <RecruitmentHeader recruitment={recruitment} cvApplied={appliedCv} />
                                <RecruitmentContent recruitment={recruitment} />
                            </div>
                        </div>
                        <div style={{ width: '30%' }} className=''>
                            <div className='d-flex w-100 flex-column gap-2'>
                                <CompanyInfoHeader user={recruitment.user} />
                                <RecruitmentGeneralInfo recruitment={recruitment} />
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}

export default RecruitmentDetail