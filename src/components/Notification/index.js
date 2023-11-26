import { Pagination } from '@mui/material'
import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const notificationList = [
	{
		id: '1',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '20 phút trước'
	},
	{
		id: '2',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '10 phút trước'
	},
	{
		id: '3',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '1 ngày trước'
	},
	{
		id: '4',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
	{
		id: '5',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
	{
		id: '6',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
	{
		id: '7',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
	{
		id: '8',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
	{
		id: '9',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
	{
		id: '10',
		message: 'Nhà tuyển dụng X đã xem cv của bạn',
		notifiedAt: '2 ngày trước'
	},
]

const Notification = ({ isDisplay }) => {
	const [page, setPage] = useState(1)
	return (
		<Card className='position-absolute top-0 end-0' style={{
			display: `${isDisplay ? 'block' : 'none'}`,
			maxHeight: '40rem',
			minHeight: '23rem',
			width: '25rem',
			backgroundColor: 'rgb(85, 102, 170, 0.9)',
			marginTop: '80px'
		}}>
			<Card.Header className='d-flex'>
				<Card.Text className='w-100 text-center text-white'><b>Thông báo</b></Card.Text>
			</Card.Header>
			<Card.Body className='d-flex flex-column gap-2 position-relative'>
				{
					notificationList.length > 0
						? notificationList.slice((page * 4 - 4), (page * 4)).map(notify => <Card key={notify.id} className='onHover'>
							<Card.Body>
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
			{notificationList.length > 0 ? <Card.Footer className='d-flex justify-content-center'>
				<Pagination
					onChange={(e, value) => setPage(value)}
					defaultPage={page}
					count={Math.ceil(notificationList.length * 1.0 / 4)}
					color='secondary'
					shape="rounded" />
			</Card.Footer> : <></>}
		</Card>
	)
}

export default Notification