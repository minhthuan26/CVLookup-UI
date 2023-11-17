import React, { useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import styled from 'styled-components'
import {
    Form,
    InputForm2,
    InputForm,
    TitleForm,
    TitleInput,
    ButtonForm,
} from '~/components/CustomChildComponent/Form'
import { useDispatch, useSelector } from 'react-redux'
import DropdownListCoponent from '~/components/CustomChildComponent/DropdownListCoponent'
import { TextArea } from '~/components/CustomChildComponent/Form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import vn from 'date-fns/locale/vi'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doAddRecruitment } from '~/action/recruitmentApi'
import { useNavigate } from 'react-router-dom'

function PostRecruitmentPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    //init state
    const [jobTitle, setJobTitle] = useState('')
    const [career, setCareer] = useState('')
    const [jobField, setJobField] = useState('')
    const [exp, setExp] = useState('')
    const [jobForm, setJobForm] = useState('')
    const [jobPosition, setJobPosition] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobRequirement, setJobRequirement] = useState('')
    const [benefit, setBenefit] = useState('')
    const [province, setProvince] = useState('')
    const [districtList, setDistrictList] = useState([])
    const [district, setDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [applicationDeadline, setApplicationDeadline] = useState()
    const [salary, setSalary] = useState('')

    const [startDate, setStartDate] = useState(new Date())

    //get data
    const getCareer = useSelector((state) => state.jobCareer.jobCareerList)
    const getJobField = useSelector((state) => state.jobField.jobField)
    const getExp = useSelector((state) => state.experience.experienceList)
    const getJobForm = useSelector((state) => state.jobForm.jobFormList)
    const getJobPositon = useSelector(
        (state) => state.jobPosition.jobPositionList
    )
    const getProvince = useSelector((state) => state.province.provinceList)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!jobTitle.trim()) {
            toast.error('Vui lòng điền tiêu đề.')
            return
        }

        if (!salary.trim()) {
            toast.error('Vui lòng điền mức lương.')
            return
        }

        if (!applicationDeadline) {
            toast.error('Vui lòng chọn ngày hết hạn nộp hồ sơ.')
            return
        }

        if (!quantity || quantity < 1) {
            toast.error('Vui lòng điền số lượng hợp lệ (lớn hơn hoặc bằng 1).')
            return
        }

        if (!career.trim()) {
            toast.error('Vui lòng chọn ngành nghề.')
            return
        }

        if (!jobField.trim()) {
            toast.error('Vui lòng chọn lĩnh vực.')
            return
        }

        if (!jobForm.trim()) {
            toast.error('Vui lòng chọn hình thức công việc.')
            return
        }

        if (!exp.trim()) {
            toast.error('Vui lòng chọn kinh nghiệm.')
            return
        }

        if (!jobPosition.trim()) {
            toast.error('Vui lòng chọn chức vụ công việc.')
            return
        }

        if (!jobDescription.trim()) {
            toast.error('Vui lòng điền mô tả công việc.')
            return
        }

        if (!jobRequirement.trim()) {
            toast.error('Vui lòng điền yêu cầu ứng viên.')
            return
        }

        if (!benefit.trim()) {
            toast.error('Vui lòng điền quyền lợi.')
            return
        }

        if (!province.trim()) {
            toast.error('Vui lòng chọn tỉnh thành.')
            return
        }

        if (!district.trim()) {
            toast.error('Vui lòng chọn quận huyện.')
            return
        }

        if (!address.trim()) {
            toast.error('Vui lòng điền địa chỉ cụ thể.')
            return
        }

        const addRecruitment = async (
            newRecruitment,
            dispatch,
            navigate,
            axiosPrivate
        ) =>
            await doAddRecruitment(
                newRecruitment,
                dispatch,
                navigate,
                axiosPrivate
            )

        const newRecruitment = {
            jobTitle: jobTitle,
            salary: salary,
            jobAddress: {
                addressDetail: address,
                province: province,
                district: district ? district : '',
            },
            jobCareer: career,
            jobField: jobField,
            jobForm: jobForm,
            experience: exp,
            jobPosition: jobPosition,
            applicationDeadline: applicationDeadline,
            jobDescription: jobDescription,
            jobRequirement: jobRequirement,
            benefit: benefit,
            quantity: quantity,
        }
        addRecruitment(newRecruitment, dispatch, navigate, axiosPrivate)
    }

    return (
        <StyledContainer>
            <Form onSubmit={handleSubmit}>
                <TitleForm>Đăng tin tuyển dụng mới</TitleForm>
                <Container>
                    <Row>
                        <StyledCol className="col-8">
                            <TitleInput>Tiêu đề</TitleInput>
                            <InputForm2
                                placeholder="Ví dụ: Thực tập sinh ReactJS"
                                type="text"
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </StyledCol>
                        <StyledCol>
                            <TitleInput>Kinh nghiệm</TitleInput>
                            <DropdownListCoponent
                                data={getExp}
                                item="exp"
                                title={'kinh nghiệm'}
                                onSelect={(selected) => {
                                    setExp(selected.exp)
                                }}
                            />
                        </StyledCol>
                    </Row>

                    <Row>
                        <StyledCol>
                            <TitleInput>Ngày hết hạn nộp hồ sơ</TitleInput>
                            <DatePickerCustom
                                showIcon
                                selected={startDate}
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) => {
                                    setStartDate(date)
                                    setApplicationDeadline(startDate)
                                }}
                                minDate={new Date()}
                                locale={vn}
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        style={{ margin: '0.5rem' }}
                                        viewBox="0 0 48 48">
                                        <mask id="ipSApplication0">
                                            <g
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinejoin="round"
                                                strokeWidth="4">
                                                <path
                                                    strokeLinecap="round"
                                                    d="M40.04 22v20h-32V22"></path>
                                                <path
                                                    fill="#fff"
                                                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"></path>
                                            </g>
                                        </mask>
                                        <path
                                            fill="currentColor"
                                            d="M0 0h48v48H0z"
                                            mask="url(#ipSApplication0)"></path>
                                    </svg>
                                }
                            />
                        </StyledCol>
                        <StyledCol>
                            <TitleInput>Số lượng</TitleInput>
                            <InputForm2
                                placeholder={quantity}
                                type="number"
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </StyledCol>
                        <StyledCol>
                            <TitleInput>Mức lương</TitleInput>
                            <InputForm2
                                type="text"
                                onChange={(e) => setSalary(e.target.value)}
                            />
                        </StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <TitleInput>Ngành nghề</TitleInput>
                            <DropdownListCoponent
                                data={getCareer}
                                title={'ngành nghề'}
                                item="career"
                                onSelect={(selected) => {
                                    setCareer(selected.career)
                                }}
                            />
                        </StyledCol>
                        <StyledCol>
                            <TitleInput>Lĩnh vực</TitleInput>
                            <DropdownListCoponent
                                data={getJobField}
                                item="field"
                                title={'lĩnh vực'}
                                onSelect={(selected) => {
                                    setJobField(selected.field)
                                }}
                            />
                        </StyledCol>
                        <StyledCol>
                            <TitleInput>Hình thức công việc</TitleInput>
                            <DropdownListCoponent
                                data={getJobForm}
                                item="form"
                                title={'hình thức'}
                                onSelect={(selected) => {
                                    setJobForm(selected.form)
                                }}
                            />
                        </StyledCol>
                        <StyledCol>
                            <TitleInput>Chức vụ công việc</TitleInput>
                            <DropdownListCoponent
                                data={getJobPositon}
                                item="position"
                                title={'chức vụ'}
                                onSelect={(selected) => {
                                    setJobPosition(selected.position)
                                }}
                            />
                        </StyledCol>
                    </Row>

                    <Row>
                        <StyledCol>
                            <TitleInput>Mô tả công việc</TitleInput>
                            <TextArea
                                placeholder="Viết mô tả ngắn về công việc"
                                onChange={(e) => {
                                    setJobDescription(e.target.value)
                                }}
                            />
                        </StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <TitleInput>Yêu cầu ứng viên</TitleInput>
                            <TextArea
                                placeholder="Viết yêu cầu ứng viên"
                                onChange={(e) => {
                                    setJobRequirement(e.target.value)
                                }}
                            />
                        </StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <TitleInput>Quyền lợi</TitleInput>
                            <TextArea
                                placeholder="Quyền lợi của ứng viên"
                                onChange={(e) => {
                                    setBenefit(e.target.value)
                                }}
                            />
                        </StyledCol>
                    </Row>
                    <Row>
                        <StyledCol>
                            <TitleInput>Địa điểm làm việc</TitleInput>
                            <Row>
                                <Col
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <DropdownListCoponent
                                        data={getProvince}
                                        item="name"
                                        title={'tỉnh thành'}
                                        onSelect={(selected) => {
                                            setProvince(selected.name)
                                            setDistrictList(selected.districts)
                                        }}
                                    />
                                </Col>
                                <Col
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <DropdownListCoponent
                                        data={districtList}
                                        item="name"
                                        title={'quận huyện'}
                                        onSelect={(selected) => {
                                            setDistrict(selected.name)
                                        }}
                                    />
                                </Col>
                                <Col className="col-6">
                                    <InputForm2
                                        placeholder="Địa chỉ cụ thể"
                                        type="text"
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </Col>
                            </Row>
                        </StyledCol>
                    </Row>

                    <ButtonForm type="submit" style={{ width: '50%' }}>
                        Đăng tin tuyển dụng
                    </ButtonForm>
                </Container>
            </Form>
        </StyledContainer>
    )
}

export default PostRecruitmentPage

const StyledContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #ecf0ff;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 5rem;
`

const StyledCol = styled(Col)`
    margin: 1rem;
    padding: 1rem;
    padding-top: 0;
    border-radius: 8px;
    box-shadow: rgba(130, 130, 130, 0.3) 0px 8px 24px;
    transition: 0.2s;
    &:hover {
        border-bottom: 5px solid #0d0053;
    }
`
const DatePickerCustom = styled(DatePicker)`
    border-radius: 8px;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    margin-left: 0.75rem;

    .react-datepicker__calendar-icon {
        margin: 0.5rem;
        margin-left: 0;
        padding: 0.5rem;
    }
`
