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
    ButtonForm,
    InputForm,
    TitleForm,
} from '~/components/CustomChildComponent/Form'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CustomPagination from './CustomPagination'
import usePrivateAxios from '~/action/AxiosCredentials'
import { Confirm } from '~/components/Popup/Confirm'
import PopupBase from '~/components/Popup/PopupBase'
import FormRecruitment from '~/components/FormRecruitment/FormRecruitment'
import CVListApply from '~/components/CVListApply/CVListApply'
function RecruitmentDashBoardPage() {
    const columns = [
        {
            name: 'ID tuyển dụng',
            selector: (row) => <span>{row.id}</span>,
        },
        {
            name: 'Tiêu đề',
            selector: (row) => row.jobTitle,
        },
        {
            name: 'Mức lương',
            selector: (row) => row.salary,
        },
        {
            name: '',
            cell: (row) => (
                <>
                    <button
                        className="btn btn-danger"
                        style={{ marginRight: '2rem' }}
                        onClick={() => handleDelete(row.id)}>
                        Xoá tin
                    </button>
                    <button
                        className="btn btn-warning"
                        style={{ marginRight: '2rem' }}
                        onClick={() => {
                            setShowFormEdit(true)
                            setIdRecruitment(row.id)
                        }}>
                        Sửa tin
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'blue',
                        }}
                        onClick={() => {
                            setShowFormDetail(true)
                            setIdRecruitment(row.id)
                        }}>
                        Xem chi tiết
                    </button>
                </>
            ),
        },
    ]
    const [idRecruitment, setIdRecruitment] = useState('')
    const [showFormEdit, setShowFormEdit] = useState(false)
    const [showFormDetail, setShowFormDetail] = useState(false)

    const [recruitment, setRecruitment] = useState([])
    const [search, SetSearch] = useState('')
    const [filter, setFilter] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const getJobList = async (dispatch) => await doGetAllRecruitment(dispatch)
    useEffect(
        () => {
            getJobList(dispatch).then((data) => {
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
                    setFilter(
                        recruitment.filter((item) => item.result.id !== id)
                    )
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
                <div style={{ height: '80vh', overflow: 'auto' }}>
                    <CVListApply id={idRecruitment}></CVListApply>
                </div>
            </PopupBase>
        </Container>
    )
}

export default RecruitmentDashBoardPage
