import React, { useEffect, useState } from 'react'
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
import DropdownListComponent from '~/components/CustomChildComponent/DropdownListComponent'
import { TextArea } from '~/components/CustomChildComponent/Form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import vn from 'date-fns/locale/vi'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doGetRecruitmentDetail } from '~/action/recruitmentApi'
import { useNavigate } from 'react-router-dom'

function FormRecruitment(props) {
    const getRecruitmentDetail = async (id, dispatch) =>
        await doGetRecruitmentDetail(id, dispatch)
    const [recruitmentDetail, setRecruitmentDetail] = useState({})
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
    const [district, setDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [salary, setSalary] = useState('')
    const [applicationDeadline, setApplicationDeadline] = useState(new Date())

    const [startDate, setStartDate] = useState(new Date())
    useEffect(
        () => {
            if (props.id) {
                getRecruitmentDetail(props.id, dispatch).then((data) => {
                    setRecruitmentDetail(data)
                    setJobTitle(data.jobTitle)
                    setCareer(data.jobCareer)
                    setJobField(data.jobField)
                    setExp(data.experience)
                    setJobForm(data.jobForm)
                    setJobPosition(data.jobPosition)
                    setJobDescription(data.jobDescription)
                    setJobRequirement(data.jobRequirement)
                    setBenefit(data.benefit)
                    setProvince(data.jobAddress.province)
                    setDistrict(data.jobAddress.district)
                    setAddress(data.jobAddress.addressDetail)
                    setApplicationDeadline(data.applicationDeadline)
                    setSalary(data.salary)
                    setQuantity(data.quantity)
                })
            }
        },
        // eslint-disable-next-line
        []
    )
    //redux
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    //get data
    const careerList = useSelector((state) => state.jobCareer.jobCareerList)
    const jobFieldList = useSelector((state) => state.jobField.jobField)
    const getExp = useSelector((state) => state.experience.experienceList)
    const jobFormList = useSelector((state) => state.jobForm.jobFormList)
    const jobPositionList = useSelector(
        (state) => state.jobPosition.jobPositionList
    )
    const provinceList = useSelector((state) => state.province.provinceList)
    const [districtList, setDistrictList] = useState([])

    useEffect(() => {
        if (provinceList.length > 0 && province) {
            var pro = provinceList.find(pro => pro.name === province)
            setDistrictList(preState => [...pro.districts])
        }
    },
        //eslint-disable-next-line
        [provinceList, province])

    //Fetch dữ liệu đồng bộ
    useEffect(() => {
        setJobTitle(props.id ? recruitmentDetail.jobTitle : '')
        setJobDescription(props.id ? recruitmentDetail.jobDescription : '')
        setJobRequirement(props.id ? recruitmentDetail.jobRequirement : '')
        setBenefit(props.id ? recruitmentDetail.benefit : '')
        setExp(props.id ? recruitmentDetail.experience : '')
        setJobForm(props.id ? recruitmentDetail.jobForm : '')
        setJobPosition(props.id ? recruitmentDetail.jobPosition : '')
        setJobDescription(props.id ? recruitmentDetail.jobDescription : '')
        setJobRequirement(props.id ? recruitmentDetail.jobRequirement : '')
        setBenefit(props.id ? recruitmentDetail.benefit : '')
        setProvince(props.id ? recruitmentDetail?.jobAddress?.province : '')
        // setDistrictList(
        //     props.id ? recruitmentDetail?.jobAddress?.districts : []
        // )
        setDistrict(props.id ? recruitmentDetail?.jobAddress?.district : '')
        setAddress(props.id ? recruitmentDetail?.jobAddress?.addressDetail : '')
        setQuantity(props.id ? recruitmentDetail.quantity : 0)
        setApplicationDeadline(
            props.id
                ? new Date(recruitmentDetail.applicationDeadline)
                : new Date()
        )
        setSalary(props.id ? recruitmentDetail.salary : '')
    }, [props.id, recruitmentDetail])
    //handle
    const validationForm = () => {
        if (!jobTitle.trim()) {
            toast.error('Vui lòng điền tiêu đề.')
            return false
        }

        if (!salary.trim()) {
            toast.error('Vui lòng điền mức lương.')
            return false
        }

        if (!applicationDeadline) {
            toast.error('Vui lòng chọn ngày hết hạn nộp hồ sơ.')
            return false
        }

        if (!quantity || quantity < 1) {
            toast.error('Vui lòng điền số lượng hợp lệ (lớn hơn hoặc bằng 1).')
            return false
        }

        if (!career.trim()) {
            toast.error('Vui lòng chọn ngành nghề.')
            return false
        }

        if (!jobField.trim()) {
            toast.error('Vui lòng chọn lĩnh vực.')
            return false
        }

        if (!jobForm.trim()) {
            toast.error('Vui lòng chọn hình thức công việc.')
            return false
        }

        if (!exp.trim()) {
            toast.error('Vui lòng chọn kinh nghiệm.')
            return false
        }

        if (!jobPosition.trim()) {
            toast.error('Vui lòng chọn chức vụ công việc.')
            return false
        }

        if (!jobDescription.trim()) {
            toast.error('Vui lòng điền mô tả công việc.')
            return false
        }

        if (!jobRequirement.trim()) {
            toast.error('Vui lòng điền yêu cầu ứng viên.')
            return false
        }

        if (!benefit.trim()) {
            toast.error('Vui lòng điền quyền lợi.')
            return false
        }

        if (!province.trim()) {
            toast.error('Vui lòng chọn tỉnh thành.')
            return false
        }

        if (!address.trim()) {
            toast.error('Vui lòng điền địa chỉ cụ thể.')
            return false
        }
        return true
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // if (validationForm()) {

        const newRecruitment = {
            jobTitle: jobTitle,
            salary: salary,
            jobAddress: {
                addressDetail: address,
                province: province,
                district: district ? district : '',
            },
            jobCareer: career.career,
            jobField: jobField.field,
            jobForm: jobForm.form,
            experience: exp.exp,
            jobPosition: jobPosition.position,
            applicationDeadline: applicationDeadline,
            jobDescription: jobDescription,
            jobRequirement: jobRequirement,
            benefit: benefit,
            quantity: quantity,
        }
        props.handleAction(
            newRecruitment,
            dispatch,
            navigate,
            axiosPrivate,
            props.id
        )
        // }
    }

    return (
        <Form onSubmit={handleSubmit} style={{ paddingBottom: '3rem' }}>
            <Container>
                <Row className='d-flex'>
                    <StyledCol>
                        <TitleInput>Tiêu đề</TitleInput>
                        <InputForm2
                            placeholder="Ví dụ: Thực tập sinh ReactJS"
                            value={jobTitle}
                            type="text"
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </StyledCol>
                    <StyledCol>
                        <TitleInput>Kinh nghiệm</TitleInput>
                        <DropdownListComponent
                            data={getExp}
                            item="exp"
                            value={exp}
                            title={'kinh nghiệm'}
                            onChange={(e) => {
                                setExp(e.target.value)
                            }}
                        />
                    </StyledCol>
                </Row>
                <Row className='d-flex justify-content-between'>
                    <StyledCol>
                        <TitleInput>Ngày hết hạn nộp hồ sơ</TitleInput>
                        <DatePickerCustom
                            showIcon
                            selected={Date.parse(applicationDeadline)}
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => {
                                setApplicationDeadline(date)
                            }}
                            value={applicationDeadline}
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
                            value={quantity}
                            type="number"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </StyledCol>
                    <StyledCol>
                        <TitleInput>Mức lương</TitleInput>
                        <InputForm2
                            type="text"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </StyledCol>
                </Row>
                <Row className='d-flex'>
                    <StyledCol>
                        <TitleInput>Ngành nghề</TitleInput>
                        <DropdownListComponent
                            data={careerList}
                            title={'ngành nghề'}
                            item="career"
                            value={career}
                            onChange={(e) => {
                                setCareer(e.target.value)
                            }}
                        />
                    </StyledCol>
                    <StyledCol>
                        <TitleInput>Lĩnh vực</TitleInput>
                        <DropdownListComponent
                            data={jobFieldList}
                            item="field"
                            title={'lĩnh vực'}
                            value={jobField}
                            onChange={(e) => {
                                setJobField(e.target.value)
                            }}
                        />
                    </StyledCol>
                </Row>
                <Row>
                    <StyledCol className="col-xs-3 ">
                        <TitleInput>Hình thức </TitleInput>
                        <DropdownListComponent
                            data={jobFormList}
                            item="form"
                            title={'hình thức'}
                            value={jobForm}
                            onChange={(e) => {
                                setJobForm(e.target.value)
                            }}
                        />
                    </StyledCol>
                    <StyledCol>
                        <TitleInput>Chức vụ</TitleInput>
                        <DropdownListComponent
                            data={jobPositionList}
                            item="position"
                            title={'chức vụ'}
                            value={jobPosition}
                            onChange={(e) => {
                                setJobPosition(e.target.value)
                            }}
                        />
                    </StyledCol>
                </Row>

                <Row>
                    <StyledCol>
                        <TitleInput>Mô tả công việc</TitleInput>
                        <TextArea
                            placeholder="Viết mô tả ngắn về công việc"
                            value={jobDescription}
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
                            value={jobRequirement}
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
                            value={benefit}
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
                                className="col-md-4"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <DropdownListComponent
                                    data={provinceList}
                                    title={'tỉnh thành'}
                                    item="name"
                                    value={provinceList.find(pro => pro.name === province)}
                                    onSelect={(e) => {
                                        setProvince(e.name)
                                    }}
                                />
                            </Col>
                            <Col
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <DropdownListComponent
                                    data={districtList}
                                    title={'quận huyện'}
                                    item="name"
                                    value={districtList?.find(dis => dis.name === district)}
                                    onChange={(e) => {
                                        setDistrict(e.target.value)
                                    }}
                                />
                            </Col>
                            <Col className="col-md-4">
                                <InputForm2
                                    placeholder="Địa chỉ cụ thể"
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
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
    )
}

export default FormRecruitment

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
