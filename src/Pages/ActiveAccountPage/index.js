import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { doActiveAccount } from '~/action/authApi'

const ActiveAccountPage = () => {
	const [activeToken, setActiveToken] = useSearchParams()
	const [token, setToken] = useState('')
	const [message, setMessage] = useState('')
	const dispatch = useDispatch()
	useEffect(() => {
		setToken(activeToken.get("token"))
	},
		// eslint-disable-next-line
		[])

	useEffect(() => {
		const activeAccount = async (token, dispatch) => await doActiveAccount(token, dispatch)
		if (token) {
			activeAccount(token, dispatch).then((data) => {
				setMessage(data)
			})
		}
	},
		// eslint-disable-next-line
		[token])
	return (
		<div className='h-100 d-flex justify-content-center align-items-center p-2'>
			<Alert variant='info' className='rounded w-75 h-50 text-center text-wrap'>
				{message}
			</Alert>
		</div>
	)
}

export default ActiveAccountPage