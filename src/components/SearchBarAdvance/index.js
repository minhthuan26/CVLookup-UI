import React, { useState } from 'react'
import { Button, Form, Collapse } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { searchRecruitment } from '~/action/recruitmentApi'
import bannerSearch from '~/assets/bannerSearch.png'
import { useNavigate } from 'react-router-dom'
import useSearch from '~/hooks/useSearch'
import { toast } from 'react-toastify'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const SearchBarAdvance = () => {
	const jobCareers = useSelector(state => state.jobCareer.jobCareerList)
	const provinces = useSelector(state => state.province.provinceList)
	const experiences = useSelector(state => state.experience.experienceList)
	const jobFields = useSelector(state => state.jobField.jobField)
	const jobForms = useSelector(state => state.jobForm.jobFormList)
	const jobPositions = useSelector(state => state.jobPosition.jobPositionList)

	const [districts, setDistricts] = useState([])
	const [hasDistrict, setHasDistrict] = useState(false)

	const [keyword, setKeyword] = useState('')
	const [province, setProvince] = useState('Tất cả tỉnh thành')
	const [career, setCareer] = useState('Tất cả ngành nghề')
	const [experience, setExperience] = useState('Tất cả kinh nghiệm')
	const [field, setField] = useState('Tất cả lĩnh vực')
	const [form, setForm] = useState('Tất cả hình thức')
	const [position, setPosition] = useState('Tất cả vị trí')
	const [district, setDistrict] = useState('Tất cả')
	const [sort, setSort] = useState('title_asc')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { setSearchResult } = useSearch()
	const [isUseAdvanced, setIsUseAdvanced] = useState(false)

	const handleSearch = (e) => {
		e.preventDefault()
		if (!keyword) {
			toast.error('Vui lòng nhập từ khoá tìm kiếm')
		} else {
			const filter = {
				Keyword: keyword,
				Province: province === 'Tất cả tỉnh thành' ? '' : province,
				District: district === 'Tất cả' ? '' : district,
				Career: career === 'Tất cả ngành nghề' ? '' : career,
				JobField: field === 'Tất cả lĩnh vực' ? '' : field,
				JobForm: form === 'Tất cả hình thức' ? '' : form,
				Experience: experience === 'Tất cả kinh nghiệm' ? '' : experience,
				JobPosition: position === 'Tất cả vị trí' ? '' : position,
				SortBy: sort,
			}

			const searchJob = async (dispatch, filter) => await searchRecruitment(dispatch, filter)
			searchJob(dispatch, filter).then(data => {
				setSearchResult(data)
				navigate('/jobs')
			})
		}

	}

	return (
		<Form
			style={{
				// backgroundImage: `url(${bannerSearch})`,
				// backgroundRepeat: 'no-repeat',
				// backgroundSize: 'cover',
				backgroundColor: 'rgb(224, 228, 237)'
			}}
			onSubmit={handleSearch}
			className='d-flex flex-column align-items-center border border-bottom-1 border-start-0 border-end-0 w-100'>
			<div
				className='d-flex w-100 justify-content-center pt-4'>
				<Form.Group
					style={{ width: '100%' }}
					className="d-flex justify-content-center">
					<Form.Control
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
						className='rounded-5 w-75'
						type="search"
						placeholder="Từ khoá tìm kiếm..." />
				</Form.Group>
			</div>
			<div className='d-flex w-75 justify-content-start pt-4'>
				<Button onClick={() => setIsUseAdvanced(preState => !preState)}>
					Nâng cao
					{isUseAdvanced
						? <KeyboardArrowUpIcon />
						: <KeyboardArrowDownIcon />
					}

				</Button>
			</div>
			<Collapse in={isUseAdvanced}>
				<div style={{ width: '100%' }}>
					<div
						className='d-flex w-100 justify-content-center pt-3'>
						<Form.Group
							style={{ width: '20%' }}
							className="d-flex justify-content-center">
							<Form.Select
								value={province}
								aria-label="Tỉnh thành"
								className='rounded-5 w-75'
								onChange={(e) => {
									setProvince(e.target.value)
									var districts = provinces.find(item => item.name === e.target.value).districts
									if (districts.length > 0) {
										setDistricts(districts)
										setHasDistrict(true)
									} else {
										setDistricts([])
										setHasDistrict(false)
									}
								}}>
								{provinces.map(province => {
									return <option key={province.id}>{province.name}</option>
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group
							style={{ width: '20%' }}
							className="d-flex justify-content-center">
							<Form.Select
								value={district}
								onChange={(e) => setDistrict(e.target.value)}
								disabled={districts.length > 0 ? false : true}
								aria-label="Quận"
								className='rounded-5 w-75' >
								{hasDistrict ? districts.map(district => {
									return <option key={district.id}>{district.name}</option>
								}) : <></>}
							</Form.Select>
						</Form.Group>
						<Form.Group
							style={{ width: '20%' }}
							className='d-flex justify-content-center'>
							<Form.Select
								value={career}
								onChange={(e) => setCareer(e.target.value)}
								aria-label="Ngành nghề"
								className='w-75 rounded-5'>
								{jobCareers.map(career => {
									return <option key={career.id}>{career.career}</option>
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group
							style={{ width: '20%' }}
							className='d-flex justify-content-center'>
							<Form.Select

								value={experience}
								onChange={(e) => setExperience(e.target.value)}
								aria-label="Kinh nghiệm" className='w-75 rounded-5'>
								{experiences.map(experience => {
									return <option key={experience.id}>{experience.exp}</option>
								})}
							</Form.Select>
						</Form.Group>
					</div>
					<div
						className='d-flex w-100 justify-content-center pt-3'>
						<Form.Group
							style={{ width: '20%' }}
							className="d-flex justify-content-center">
							<Form.Select
								value={position}
								onChange={(e) => setPosition(e.target.value)}
								aria-label="Vị trí"
								className='rounded-5 w-75' >
								{jobPositions.map(position => {
									return <option key={position.id}>{position.position}</option>
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group
							style={{ width: '20%' }}
							className='d-flex justify-content-center'>
							<Form.Select
								value={field}
								onChange={(e) => setField(e.target.value)}
								aria-label="Lĩnh vực"
								className='w-75 rounded-5'>
								{jobFields.map(field => {
									return <option key={field.id}>{field.field}</option>
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group
							style={{ width: '20%' }}
							className='d-flex justify-content-center'>
							<Form.Select
								value={form}
								onChange={(e) => setForm(e.target.value)}
								aria-label="Hình thức"
								className='w-75 rounded-5'>
								{jobForms.map(form => {
									return <option key={form.id}>{form.form}</option>
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group
							style={{ width: '20%', visibility: 'hidden' }}
							className='d-flex justify-content-center'>
							<Form.Select className='w-75 rounded-5'>

							</Form.Select>
						</Form.Group>
					</div>
				</div>
			</Collapse>
			<div
				className='d-flex w-100 justify-content-center pt-4'>
				<Form.Group
					style={{ width: '20%' }}
					className='d-flex justify-content-center'>
					<Button className='rounded-5' onClick={handleSearch}>
						<i className="fa fa-search" aria-hidden="true"></i> {' '}
						Tìm kiếm
					</Button>
				</Form.Group>
			</div >
			<div className='d-flex w-50 justify-content-center pt-4'>
				<div className='w-25'>
					<p><strong>Sắp xếp theo:</strong></p>
				</div>
				<Form.Group className='d-flex justify-content-around w-75'>
					<Form.Check
						type='radio'
						id='radio-related'>
						<Form.Check.Input
							onChange={(e) => setSort(e.target.value)}
							value='title_asc'
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
							onChange={(e) => setSort(e.target.value)}
							value='date_desc'
							style={{ borderColor: 'black' }}
							type='radio'
							name="group1" />
						<Form.Check.Label>Mới nhất</Form.Check.Label>
					</Form.Check>
					{/* <Form.Check
						type='radio'
						id='radio-salary'>
						<Form.Check.Input
							style={{ borderColor: 'black' }}
							type='radio'
							name="group1" />
						<Form.Check.Label>Lương</Form.Check.Label>
					</Form.Check> */}
				</Form.Group>
			</div>
		</Form >
	)
}

export default SearchBarAdvance