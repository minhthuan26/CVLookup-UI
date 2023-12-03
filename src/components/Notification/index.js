import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNotifications } from '~/Redux/Notification/NotificationSlice'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doUpdateViewStatus } from '~/action/notification'
import PaginationAuto from '../PaginationAuto'
import useApplyJobModal from '~/hooks/useApplyJobModal'

const Notification = ({ isDisplay, setIsDisplay }) => {
	const [page, setPage] = useState(1)
	const navigate = useNavigate()
	const notifications = useSelector(state => state.notifications.notifications)
	const accessToken = useSelector(state => state.auth.credentials.accessToken)
	const axiosPrivate = usePrivateAxios(accessToken)
	const dispatch = useDispatch()
	const handleNotificationClick = (id) => {
		const notify = notifications.find(notify => notify.id === id)
		if (notify.isView) {
			setIsDisplay(preState => !preState)
			navigate(`/recruitment-detail?id=${notify.recruitmentId}`)
		} else {
			const updateViewStatus = async (axiosPrivate, dispatch, id) => doUpdateViewStatus(axiosPrivate, dispatch, id)
			updateViewStatus(axiosPrivate, dispatch, notify.id).then(data => {
				var tmp = [...notifications]
				tmp[tmp.indexOf(notify)] = data
				dispatch(setNotifications(tmp))
				setIsDisplay(preState => !preState)
				navigate(`/recruitment-detail?id=${notify.recruitmentId}`)
			})
		}
	}
	return (
		<Card
			className='position-absolute top-0 end-0'
			style={{
				display: `${isDisplay ? 'block' : 'none'}`,
				maxHeight: '40rem',
				minHeight: '23rem',
				width: '25rem',
				backgroundColor: 'rgb(43,130,175, 0.5)',
				marginTop: '80px',
				zIndex: '9999',
			}}>
			<Card.Header className='d-flex'>
				<Card.Text style={{ color: '#eee', fontSize: '1.25rem' }} className='w-100 text-center'><b>Thông báo</b></Card.Text>
			</Card.Header>
			<Card.Body className='d-flex flex-column gap-2 position-relative'>
				{
					notifications.length > 0
						? notifications.slice((page * 4 - 4), (page * 4)).map(notify =>
							<Card
								style={{
									boxShadow: 'rgb(13,0,83) 0px 2px 6px',
									backgroundColor: `${notify.isView ? 'rgba(240, 240, 240,0.7)' : 'white'}`
								}}
								key={notify.id}
								onClick={() => handleNotificationClick(notify.id)}
								className='onHover'>

								<Card.Body
									id={notify.id}>
									<Card.Text>
										{notify.message}
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Card.Text className='w-100 text-end'>{notify.notifiedAt}</Card.Text>
								</Card.Footer>
							</Card>)
						: <Card className='h-100 d-flex align-items-center justify-content-center'>
							<Card.Body>
								<Card.Text className='text-center'>Chưa có thông báo</Card.Text>
							</Card.Body>
						</Card>
				}
			</Card.Body>
			{notifications.length > 0 ? <Card.Footer className='d-flex justify-content-center'>
				<PaginationAuto list={notifications} itemsPerPage={4} />
			</Card.Footer> : <></>}
		</Card>
	)
}

export default Notification