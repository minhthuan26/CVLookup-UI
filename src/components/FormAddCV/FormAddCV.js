import React, { useState } from 'react'
import { doUploadNewCV } from '~/action/CvApi'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
    ButtonForm,
    Form,
    GhostButton,
    InputForm,
    LabelForm,
    TitleForm,
} from '../CustomChildComponent/Form'

function FormAddCV(props) {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [fullName, setFullName] = useState('')
    const [introdution, setIntrodution] = useState('')
    const [cvFile, setCvFile] = useState(null)
    const [selectedFileName, setSelectedFileName] = useState(null)

    const [showFormAdd, setShowFormAdd] = useState(false)
    const [toggleIsCreate, setToggleIsCreate] = useState(false)

    const dispatch = useDispatch()
    const accessToken = useSelector(
        (state) => state.auth.credentials.accessToken
    )
    const axiosPrivate = usePrivateAxios(accessToken)

    const handleUpload = (e) => {
        e.preventDefault()
        const phoneRegex = /^\d{10}$/
        if (
            fullName === '' ||
            email === '' ||
            phoneNumber === '' ||
            introdution === ''
        ) {
            toast.error('Vui lòng điền đầy đủ thông tin.')
        } else if (!phoneRegex.test(phoneNumber)) {
            toast.error('Số điện thoại không đúng định dạng.')
        } else {
            try {
                const uploadCurriculumViate = async (
                    axiosPrivate,
                    dispatch,
                    cvInfo
                ) => await doUploadNewCV(axiosPrivate, dispatch, cvInfo)
                var formdata = new FormData()
                formdata.append('FullName', fullName)
                formdata.append('PhoneNumber', phoneNumber)
                formdata.append('Email', email)
                formdata.append('Introdution', introdution)
                formdata.append('CVFile', cvFile)

                uploadCurriculumViate(axiosPrivate, dispatch, formdata)

                props.handleGetAllCV(dispatch, axiosPrivate)

                props
                    .handleGetAllCV(dispatch, axiosPrivate)
                    .then((data) => props.setCVlist(data))

                setFullName('')
                setEmail('')
                setPhoneNumber('')
                setCvFile(null)
                setIntrodution('')
                setSelectedFileName('')
                setShowFormAdd(false)
                props.setShowAddCV(false)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '1.25rem 0',
            }}>
            {!showFormAdd ? (
                <>
                    <ChoosenAddCVBtn
                        onClick={(e) => {
                            setShowFormAdd(true)
                            setToggleIsCreate(false)
                        }}>
                        Tải CV lên
                    </ChoosenAddCVBtn>
                    <ChoosenAddCVBtn
                        onClick={(e) => {
                            setShowFormAdd(true)
                            setToggleIsCreate(true)
                        }}>
                        Tạo mới CV
                    </ChoosenAddCVBtn>
                </>
            ) : !toggleIsCreate ? (
                <Form onSubmit={handleUpload}>
                    <TitleForm>Tải CV</TitleForm>
                    <InputForm
                        type="text"
                        placeholder="Họ và tên"
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }}
                    />
                    <InputForm
                        type="text"
                        placeholder="Số điện thoại"
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}
                    />
                    <InputForm
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <InputForm
                        type="text"
                        placeholder="Tiêu đề"
                        onChange={(e) => {
                            setIntrodution(e.target.value)
                        }}
                    />
                    <LabelForm htmlFor="uploadCV">
                        {selectedFileName ? selectedFileName : 'Tải CV'}
                    </LabelForm>
                    <InputForm
                        type="File"
                        accept="application/pdf"
                        id="uploadCV"
                        style={{
                            visibility: 'hidden',
                            height: '0',
                            padding: '0',
                            margin: '0',
                        }}
                        onChange={(e) => {
                            const fileName = e.target.files[0]?.name
                            setSelectedFileName(fileName)
                            setCvFile(e.target.files[0])
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            width: '100%',
                        }}>
                        <GhostButton
                            onClick={() => {
                                setShowFormAdd(false)
                            }}>
                            Trở về
                        </GhostButton>

                        <ButtonForm type="submit">Tạo CV</ButtonForm>
                    </div>
                </Form>
            ) : (
                <span className="text-danger">Chức năng đang phát triển</span>
            )}
        </div>
    )
}

export default FormAddCV
export const ChoosenAddCVBtn = styled.button`
    padding: 0.75rem;
    border: none;
    background-color: #5767aa;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    width: 7rem;
    &:hover {
        transform: scale(1.1);
        border: 2px solid #fff;
    }
`
