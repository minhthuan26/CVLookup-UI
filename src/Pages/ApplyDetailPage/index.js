import React, { useEffect, useState } from 'react'
import CVInfo from '~/components/ApplyDetail/CVInfo'
import JobInfo from '~/components/ApplyDetail/JobInfo'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doGetRecruitmentDetail } from '~/action/recruitmentApi'
import { getBy_CvId_And_RecruitmentId } from '~/action/recruitmentCvApi'

const ApplyDetailPage = () => {
	const location = useLocation()
	const [recruitment, setRecruitment] = useState()
	const [cv, setCv] = useState()
	const [recruitmentCv, setRecruitmentCv] = useState()
	const navigate = useNavigate()
	const accessToken = useSelector(state => state.auth.credentials.accessToken)
	const axiosPrivate = usePrivateAxios(accessToken)
	const dispatch = useDispatch()

	const getRecruitmentCv = async (axiosPrivate, dispatch, cvId, recruitmentId) => await getBy_CvId_And_RecruitmentId(axiosPrivate, dispatch, cvId, recruitmentId)

	useEffect(() => {
		if (!location || !location.state || !location.state.notify) {
			navigate('/bad-request')
		} else {
			const recruitmentId = location.state.notify.recruitmentId
			const cvId = location.state.notify.curriculumVitaeId
			getRecruitmentCv(axiosPrivate, dispatch, cvId, recruitmentId)
				.then(data => {
					setRecruitment(data.recruitment)
					setCv(data.curriculumVitae)
					setRecruitmentCv(data)
				})
		}

	},
		// eslint-disable-next-line
		[])
	return (
		<div className='d-flex w-100 gap-2'>
			<div className='w-50 border border-1 rounded-4'>
				<JobInfo recruitment={recruitment} />
			</div>

			<div className='w-50 border border-1 rounded-4'>
				<CVInfo recruitmentCv={recruitmentCv} cv={cv} />
			</div>
		</div>
	)
}

export default ApplyDetailPage