import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import {
    doDeleteRecruitment,
    doGetAllRecruitment,
    doUpdateRecruitment,
    getNewestJob,
} from '~/action/recruitmentApi'
import {
    faTrash,
    faPenToSquare,
    faList,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
    ButtonForm,
    InputForm,
    TitleForm,
} from '~/components/CustomChildComponent/Form'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CustomPagination from './CustomPagination'
import usePrivateAxios from '~/action/AxiosCredentials'
import { Confirm } from '~/components/Popup/Confirm'
import PopupBase from '~/components/Popup/PopupBase'
import FormRecruitment from '~/components/FormRecruitment/FormRecruitment'
import CVListApply from '~/components/CVListApply/CVListApply'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
function RecruitmentDashBoardPage() {
    const columns = [
        {
            name: 'Tiêu đề',
            selector: (row) => <span className="bold">{row.jobTitle}</span>,
        },
        {
            name: 'Mức lương',
            selector: (row) => row.salary,
        },
        {
            name: 'Ngành',
            selector: (row) => row.jobCareer.career,
        },
        {
            name: 'Vị trí',
            selector: (row) => row.jobPosition.position,
        },
        {
            name: '',
            cell: (row) => (
                <>
                    <button
                        title="Xoá đơn tuyển dụng"
                        className="btn bg-transparent text-danger w-50"
                        onClick={() => handleDelete(row.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        <br />
                        Xoá
                    </button>
                    <button
                        title="Sửa đơn tuyển dụng"
                        className="btn bg-transparent  text-warning w-50"
                        onClick={() => {
                            setShowFormEdit(true)
                            setIdRecruitment(row.id)
                        }}>
                        <FontAwesomeIcon icon={faPenToSquare} /> <br />
                        Sửa
                    </button>
                </>
            ),
        },
        {
            name: '',
            cell: (row) => (
                <>
                    <button
                        title="Xem các đơn ứng tuyển"
                        className="btn btn-link w-50"
                        onClick={() => {
                            setShowFormDetail(true)
                            setIdRecruitment(row.id)
                        }}>
                        <FontAwesomeIcon icon={faList} /> <br />
                        CV ứng tuyển
                    </button>
                    <button
                        className="btn bg-transparent text-success w-50"
                        title="Xem CV đã duyệt"
                        onClick={() => {
                            setShowFormCVPass(true)
                            setIdRecruitment(row.id)
                        }}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <br />
                        CV đã duyệt
                    </button>
                </>
            ),
        },
    ]
    const [idRecruitment, setIdRecruitment] = useState('')

    const [showFormEdit, setShowFormEdit] = useState(false)
    const [showFormDetail, setShowFormDetail] = useState(false)
    const [showFormCVPass, setShowFormCVPass] = useState(false)

    const [cvCount, setCVCount] = useState(0)
    const [cvPassCount, setCVPassCount] = useState(0)

    const [recruitment, setRecruitment] = useState([])
    const [search, SetSearch] = useState('')
    const [filter, setFilter] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const getJobList = async (dispatch, axiosPrivate) =>
        await doGetAllRecruitment(dispatch, axiosPrivate)
    useEffect(
        () => {
            getJobList(dispatch, axiosPrivate).then((data) => {
                setRecruitment(data)
                setFilter(data)
            })
        },
        // eslint-disable-next-line
        []
    )

    useEffect(() => {
        const result = recruitment.filter((item) => {
            return (
                item.jobTitle &&
                item.jobTitle.toLowerCase().match(search.toLowerCase())
            )
        })
        setFilter(result)
    }, [search, recruitment])

    const updateRecruitment = async (
        data,
        dispatch,
        navigate,
        axiosPrivate,
        id
    ) => await doUpdateRecruitment(data, dispatch, navigate, axiosPrivate, id)

    const handleDelete = (id) => {
        Confirm.open({
            title: 'Xoá tin tuyển dụng',
            message: 'Bạn có muốn xoá tin tuyển dụng?',
            onok: () => {
                try {
                    const deleteRecruitment = async (
                        id,
                        dispatch,
                        axiosPrivate
                    ) => await doDeleteRecruitment(id, dispatch, axiosPrivate)
                    deleteRecruitment(id, dispatch, axiosPrivate)
                    setFilter(recruitment.filter((item) => item.id !== id))
                    setRecruitment(recruitment.filter((item) => item.id !== id))
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#ccc',
            },
        },
    }
    return (
        <Container>
            <TitleForm>Quản lý tin tuyển dụng</TitleForm>
            <DataTable
                customStyles={tableHeaderstyle}
                columns={columns}
                data={filter}
                pagination
                fixedHeader
                highlightOnHover
                actions={
                    <ButtonForm onClick={() => navigate('/post-recruitment')}>
                        Tạo tin tuyển dụng mới
                    </ButtonForm>
                }
                subHeader
                subHeaderComponent={
                    <InputForm
                        type="text"
                        className="w-50 form-control"
                        placeholder="Tìm kiếm..."
                        value={search}
                        onChange={(e) => SetSearch(e.target.value)}
                    />
                }
                subHeaderAlign="right"
            />
            <hr />
            <TitleForm>Thống kê tuyển dụng</TitleForm>

            <Row
                style={{
                    gap: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '3rem 0',
                }}
                className="row-cols-1 row-cols-sm-2 row-cols-md-3">
                <StyledCol customColor="#b7d5ff" className="mb-sm-3">
                    <h4>Tổng số bài đăng</h4>
                    <TitleForm>{recruitment.length}</TitleForm>
                </StyledCol>

                <StyledCol customColor="#b7d5ff" className="mb-sm-3">
                    <h4>Số CV Ứng tuyển</h4>
                    <TitleForm>{cvCount}</TitleForm>
                </StyledCol>
                <StyledCol customColor="#b7d5ff" className="mb-sm-3">
                    <h4>Số CV Được duyệt</h4>
                    <TitleForm>{cvPassCount}</TitleForm>
                </StyledCol>
                <StyledCol customColor="#b7d5ff" className="mb-sm-3">
                    <h4>Tổng số bài đăng</h4>
                    <TitleForm>{recruitment.length}</TitleForm>
                </StyledCol>
            </Row>

            <PopupBase
                trigger={showFormEdit}
                setTriger={setShowFormEdit}
                title="Sửa thông tin tuyển dụng">
                <div style={{ height: '80vh', overflow: 'auto' }}>
                    <FormRecruitment
                        handleAction={updateRecruitment}
                        id={idRecruitment}></FormRecruitment>
                </div>
            </PopupBase>
            <PopupBase
                trigger={showFormDetail}
                setTriger={setShowFormDetail}
                title="Danh sách CV đã ứng tuyển">
                <div
                    style={{
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}>
                    <CVListApply
                        cvCount={(e) => {
                            setCVCount(e)
                        }}
                        checkIsPassSuccess={false}
                        id={idRecruitment}></CVListApply>
                </div>
            </PopupBase>
            <PopupBase
                trigger={showFormCVPass}
                setTriger={setShowFormCVPass}
                title="Danh sách CV đã được duyệt">
                <div
                    style={{
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}>
                    <CVListApply
                        checkIsPassSuccess={true}
                        cvCount={(e) => setCVPassCount(e)}
                        id={idRecruitment}></CVListApply>
                </div>
            </PopupBase>
        </Container>
    )
}

export default RecruitmentDashBoardPage
const StyledCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    border-radius: 10px;
    box-shadow: rgba(130, 130, 130, 0.3) 0px 8px 24px;
    background-color: ${(prop) => prop.customColor || '#eee'};

    font-weight: bold;
    transform: 0.5s;
    &:hover {
        transform: scale(1.1);
    }
`
