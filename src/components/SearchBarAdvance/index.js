import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import bannerSearch from '~/assets/bannerSearch.png'


const SearchBarAdvance = () => {
	const jobCareers = useSelector(state => state.jobCareer.jobCareerList)
	const provinces = useSelector(state => state.province.provinceList)
	const experiences = useSelector(state => state.experience.experienceList)
	return (
		<div className='d-flex flex-column align-items-center border border-bottom-1 border-start-0 border-end-0'>
			<Form
				style={{
					backgroundImage: `url(${bannerSearch})`,
					backgroundRepeat: 'no-repeat'
				}}
				className='d-flex w-100 justify-content-center p-4'>
				<Form.Group
					style={{ width: '20%' }}
					className="d-flex justify-content-center">
					<Form.Control
						className='rounded-5 w-75'
						type="search"
						placeholder="Vị trí tuyển dụng" />
				</Form.Group>
				<Form.Group
					style={{ width: '20%' }}
					className="d-flex justify-content-center">
					<Form.Select
						defaultValue={'Tất cả tỉnh thành'}
						aria-label="Địa điểm"
						className='rounded-5 w-75' >
						{provinces.map(province => {
							return <option key={province.id}>{province.name}</option>
						})}
					</Form.Select>
				</Form.Group>
				<Form.Group
					style={{ width: '20%' }}
					className='d-flex justify-content-center'>
					<Form.Select defaultValue={'Tất cả ngành nghề'} aria-label="Ngành nghề" className='w-75 rounded-5'>
						{jobCareers.map(career => {
							return <option key={career.id}>{career.career}</option>
						})}
					</Form.Select>
				</Form.Group>
				<Form.Group
					style={{ width: '20%' }}
					className='d-flex justify-content-center'>
					<Form.Select defaultValue={'Tất cả kinh nghiệm'} aria-label="Kinh nghiệm" className='w-75 rounded-5'>
						{experiences.map(experience => {
							return <option key={experience.id}>{experience.exp}</option>
						})}
					</Form.Select>
				</Form.Group>
				<Form.Group
					style={{ width: '20%' }}
					className='d-flex justify-content-center'>
					<Button className='rounded-5'>
						Tìm kiếm
					</Button>
				</Form.Group>
			</Form >
			<Form className='d-flex w-50 justify-content-center p-2'>
				<div className='w-25'>
					<p><strong>Sắp xếp theo:</strong></p>
				</div>
				<Form.Group className='d-flex justify-content-around w-75'>

					<Form.Check
						type='radio'
						id='radio-related'>
						<Form.Check.Input
							style={{ borderColor: 'black' }}
							type='radio'
							defaultChecked='true'
							name="group1" />
						<Form.Check.Label>Liên quan</Form.Check.Label>
					</Form.Check>
					<Form.Check
						type='radio'
						id='radio-newest'>
						<Form.Check.Input
							style={{ borderColor: 'black' }}
							type='radio'
							name="group1" />
						<Form.Check.Label>Mới nhất</Form.Check.Label>
					</Form.Check>
					<Form.Check
						type='radio'
						id='radio-salary'>
						<Form.Check.Input
							style={{ borderColor: 'black' }}
							type='radio'
							name="group1" />
						<Form.Check.Label>Lương</Form.Check.Label>
					</Form.Check>
				</Form.Group>
			</Form>
		</div>
	)
}

export default SearchBarAdvance