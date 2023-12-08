import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import {
    ButtonForm,
    Form,
    InputForm,
    TitleInput,
} from '~/components/CustomChildComponent/Form'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Confirm } from '~/components/Popup/Confirm'
import {
    doUpdate,
    doGetById,
    doAddCareer,
    doDeleteCareer,
} from '~/action/JobCareerApi'
import { toast } from 'react-toastify'
function JobCareerManagement() {
    const getCareer = useSelector((state) => state.jobCareer.jobCareerList)
    const getById = async (dispatch, axiosPrivate, id) =>
        await doGetById(dispatch, axiosPrivate, id)
    const addData = async (dispatch, axiosPrivate, data) =>
        await doAddCareer(dispatch, axiosPrivate, data)
    const editData = async (dispatch, axiosPrivate, id, data) =>
        await doUpdate(dispatch, axiosPrivate, id, data)
    const [filter, setFilter] = useState(getCareer)
    const [search, SetSearch] = useState('')
    const [career, setCareer] = useState(getCareer)
    const [name, setName] = useState('')
    const [formMode, setFormMode] = useState('add') // 'add' or 'edit'
    const [selectedCareer, setSelectedCareer] = useState(null)

    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)
    const columns = [
        {
            name: 'Id',
            selector: (row) => row?.id,
        },
        {
            name: 'Ngành nghề',
            selector: (row) => row?.career,
        },
        {
            name: '',
            cell: (row) => (
                <>
                    <button
                        className="btn bg-transparent text-warning w-50"
                        onClick={() => handleEdit(row?.id)}>
                        <FontAwesomeIcon icon={faPenToSquare} /> <br />
                        Sửa
                    </button>
                    <button
                        className="btn bg-transparent text-danger w-50"
                        onClick={() => handleDelete(row?.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        <br />
                        Xoá
                    </button>
                </>
            ),
        },
    ]

    const handleDelete = (id) => {
        Confirm.open({
            title: 'Xoá ngành nghề',
            message: 'Xác nhận xoá?',
            onok: () => {
                try {
                    const deleteCareer = async (dispatch, axiosPrivate, id) =>
                        await doDeleteCareer(dispatch, axiosPrivate, id)
                    deleteCareer(dispatch, axiosPrivate, id)
                    setFilter(career.filter((item) => item.id !== id))
                    setCareer(career.filter((item) => item.id !== id))
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }

    const handleEdit = async (id) => {
        try {
            getById(dispatch, axiosPrivate, id).then((data) => {
                setSelectedCareer(data)
                setName(data.career)
                setCareer((prev) =>
                    prev.map((item) =>
                        item.id === data.id
                            ? { ...item, career: data.career }
                            : item
                    )
                )

                setFilter((prev) =>
                    prev.map((item) =>
                        item.id === data.id
                            ? { ...item, career: data.career }
                            : item
                    )
                )
            })
            setFormMode('edit')
            toast.info('Sửa dữ liệu tại form bên trên!', {
                icon: '⏺️',
            })
        } catch (error) {
            console.error('Error fetching experience details:', error)
        }
    }

    const handleSave = async () => {
        try {
            if (formMode === 'add') {
                // Add new experience
                addData(dispatch, axiosPrivate, name).then((data) => {
                    setCareer((prev) => [...prev, data])
                    setFilter((prev) => [...prev, data])
                })
            } else if (formMode === 'edit' && selectedCareer) {
                // Update existing experience
                editData(dispatch, axiosPrivate, selectedCareer.id, name).then(
                    (data) => {
                        setCareer((prev) =>
                            prev.map((item) =>
                                item.id === data.id
                                    ? { ...item, career: data.career }
                                    : item
                            )
                        )

                        setFilter((prev) =>
                            prev.map((item) =>
                                item.id === data.id
                                    ? { ...item, career: data.career }
                                    : item
                            )
                        )
                    }
                )
            }

            // Reset form state
            setName('')
            setSelectedCareer(null)
            setFormMode('add')
        } catch (error) {
            console.error('Error saving experience:', error)
        }
    }

    useEffect(() => {
        const result = career.filter((item) => {
            return (
                item.career &&
                item.career.toLowerCase().includes(search.toLowerCase())
            )
        })
        setFilter(result)
    }, [search, career])

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#ccc',
            },
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSave()
    }
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Quản lý ngành nghề</h1>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="content">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <Form onSubmit={handleSubmit}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    width: '100%',
                                    gap: '1rem',
                                }}>
                                <TitleInput>Tên:</TitleInput>
                                <InputForm
                                    value={name}
                                    placeholder="Tên ngành nghề"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <ButtonForm
                                    style={{
                                        marginTop: 0,
                                    }}
                                    type="submit">
                                    Lưu
                                </ButtonForm>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="invoice p-3 mb-3">
                                <div className="row">
                                    <div className="col-12 table-responsive">
                                        <DataTable
                                            customStyles={tableHeaderstyle}
                                            columns={columns}
                                            data={filter}
                                            pagination
                                            fixedHeader
                                            highlightOnHover
                                            subHeader
                                            subHeaderComponent={
                                                <InputForm
                                                    type="text"
                                                    className="w-50 form-control"
                                                    placeholder="Tìm kiếm..."
                                                    value={search}
                                                    onChange={(e) =>
                                                        SetSearch(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            }
                                            subHeaderAlign="right"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobCareerManagement
