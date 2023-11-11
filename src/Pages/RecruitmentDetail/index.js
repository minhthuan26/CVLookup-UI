import React, { useEffect, useState } from 'react'
import { Alert, Container } from 'react-bootstrap'
import JobsSearch from '~/components/JobsSearch'
import RecruitmentGeneralInfo from '~/components/RecruitmentDetail/RecruitmentGeneralInfo'
import CompanyInfoHeader from '~/components/RecruitmentDetail/CompanyInfoHeader'
import RecruitmentContent from '~/components/RecruitmentDetail/RecruitmentContent'
import RecruitmentHeader from '~/components/RecruitmentDetail/RecruitmentHeader'
import SearchBarAdvance from '~/components/SearchBarAdvance'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { doGetRecruitmentDetail } from '~/action/recruitmentApi'
import LoginModal from '~/components/LoginModal'

const RecruitmentDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [recruitment, setRecruitment] = useState()
    useEffect(() => {
        const getRecruitmentDetail = async (id, dispatch, navigate) => await doGetRecruitmentDetail(id, dispatch, navigate)
        getRecruitmentDetail(searchParams.get('id'), dispatch, navigate).then(data => {
            setRecruitment(data)
        })
    },
        //eslint-disable-next-line
        [])
    return (
        <>
            <SearchBarAdvance />
            {
                recruitment
                    ? <div className='d-flex'>
                        <div style={{ width: '70%' }} className='d-flex justify-content-center'>
                            <div className='d-flex w-100 flex-column gap-2'>
                                <RecruitmentHeader recruitment={recruitment} />
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