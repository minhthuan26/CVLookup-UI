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
import { doAdd, doDelete, doGetById, doUpdate } from '~/action/JobPosition'
import { toast } from 'react-toastify'
function JobPositionManagement() {
    const getPosition = useSelector(
        (state) => state.jobPosition.jobPositionList
    )
    const getById = async (dispatch, axiosPrivate, id) =>
        await doGetById(dispatch, axiosPrivate, id)
    const addData = async (dispatch, axiosPrivate, data) =>
        await doAdd(dispatch, axiosPrivate, data)
    const editData = async (dispatch, axiosPrivate, id, data) =>
        await doUpdate(dispatch, axiosPrivate, id, data)
    const [filter, setFilter] = useState(getPosition)
    const [search, SetSearch] = useState('')
    const [position, setPosition] = useState(getPosition)
    const [name, setName] = useState('')
    const [formMode, setFormMode] = useState('add') // 'add' or 'edit'
    const [selectedPosition, setSelectedPosition] = useState(null)

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
            name: 'Vị trí',
            selector: (row) => row?.position,
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
            title: 'Xoá vị trí',
            message: 'Xác nhận xoá?',
            onok: () => {
                try {
                    const deletePosition = async (dispatch, axiosPrivate, id) =>
                        await doDelete(dispatch, axiosPrivate, id)
                    deletePosition(dispatch, axiosPrivate, id)
                    setFilter(position.filter((item) => item.id !== id))
                    setPosition(position.filter((item) => item.id !== id))
                } catch (error) {
                    console.log(error)
                }
            },
        })
    }

    const handleEdit = async (id) => {
        try {
            getById(dispatch, axiosPrivate, id).then((data) => {
                setSelectedPosition(data)
                setName(data.position)
                setPosition((prev) =>
                    prev.map((item) =>
                        item.id === data.id
                            ? { ...item, position: data.position }
                            : item
                    )
                )

                setFilter((prev) =>
                    prev.map((item) =>
                        item.id === data.id
                            ? { ...item, position: data.position }
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
                addData(dispatch, axiosPrivate, name).then((data) => {
                    setPosition((prev) => [...prev, data])
                    setFilter((prev) => [...prev, data])
                })
            } else if (formMode === 'edit' && selectedPosition) {
                editData(
                    dispatch,
                    axiosPrivate,
                    selectedPosition.id,
                    name
                ).then((data) => {
                    setPosition((prev) =>
                        prev.map((item) =>
                            item.id === data.id
                                ? { ...item, position: data.position }
                                : item
                        )
                    )

                    setFilter((prev) =>
                        prev.map((item) =>
                            item.id === data.id
                                ? { ...item, position: data.position }
                                : item
                        )
                    )
                })
            }

            // Reset form state
            setName('')
            setSelectedPosition(null)
            setFormMode('add')
        } catch (error) {
            console.error('Error saving experience:', error)
        }
    }

    useEffect(() => {
        const result = position.filter((item) => {
            return (
                item.position &&
                item.position.toLowerCase().includes(search.toLowerCase())
            )
        })
        setFilter(result)
    }, [search, position])

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
                            <h1>Quản lý vị trí</h1>
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
                                    placeholder="Tên vị trí"
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

export default JobPositionManagement
