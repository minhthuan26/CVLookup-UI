import React, { useState } from 'react'
import styled from 'styled-components'
import { doUploadNewCV } from '~/action/CVApi'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { useDispatch, useSelector } from 'react-redux'

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
        } else if (props.CVlist.length >= 6) {
            toast.error('Chỉ tạo tối đa 6 CV.')
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
const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    width: 100%;
    text-align: center;
`
const TitleForm = styled.h1`
    font-weight: bold;
    color: #2a1892;
    margin: 0;
`

const InputForm = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`
const ButtonForm = styled.button`
    border-radius: 10px;
    border: 1px solid #0d0053;
    background-color: #5767aa;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #84adea;
    }
`
const GhostButton = styled(ButtonForm)`
    background-color: transparent;
    border-color: #5767aa;
    color: #5767aa;

    &:hover {
        background-color: #eee;
        color: #5767aa;
    }
`
const LabelForm = styled.label`
    cursor: pointer;
    display: flex;
    background-color: #eee;
    text-align: center;
    align-items: center;
    padding: 12px 15px;
    margin: 8px 0;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    width: 100%;
`
const ChoosenAddCVBtn = styled.button`
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
