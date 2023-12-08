import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'
import defaultAvatar from '~/assets/default_avatar.jpg'
import { Avatar, TextField } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { toBase64 } from '~/utils/FileToBase64'
import moment from 'moment'
import { toast } from 'react-toastify'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doUpdateCandidate, doUpdateEmployer } from '~/action/userApi'
import { setUser } from '~/Redux/Auth/authSlice'

const Profile = ({ user, role, avatarBase64 }) => {
    const currentUser = useSelector(state => state.auth.credentials.user)
    user ??= currentUser
    const currentAvatarBase64 = useSelector(state => state.auth.credentials.avatarBase64)
    avatarBase64 ??= currentAvatarBase64
    const currentRole = useSelector(state => state.auth.credentials.role)
    role ??= currentRole
    const [isEdit, setIsEdit] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [avatar, setAvatar] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const accessToken = useSelector(state => state.auth.credentials.accessToken)
    const axiosPrivate = usePrivateAxios(accessToken)
    const dispatch = useDispatch()

    useEffect(() => {
        var ava
        if (user) {
            user.username ? setUsername(user.username) : setUsername('')
            user.email ? setEmail(user.email) : setEmail('')
            user.phoneNumber ? setPhoneNum(user.phoneNumber) : setPhoneNum('')
            user.website ? setWebsite(user.website) : setWebsite('')
            user.description ? setDescription(user.description) : setDescription('user.description')
            user.address ? setAddress(user.address) : setAddress('')
            user.dateOfBirth ? setDateOfBirth(new Date(user.dateOfBirth)) : setDateOfBirth('')
            ava = handleAvatar(avatarBase64)
            setAvatarUrl(ava)
        }
    },
        //eslint disable next line
        [user, avatarBase64])
    const handleAvatar = (avatarBase64) => {
        const avatarString = avatarBase64
        if (avatarString) {
            return "data:image/png;base64," + avatarString
        }
        return defaultAvatar
    }
    const revertValue = () => {
        user.username ? setUsername(user.username) : setUsername('')
        user.email ? setEmail(user.email) : setEmail('')
        user.phoneNumber ? setPhoneNum(user.phoneNumber) : setPhoneNum('')
        user.website ? setWebsite(user.website) : setWebsite()
        user.description ? setDescription(user.description) : setDescription('user.description')
        user.address ? setAddress(user.address) : setAddress('')
        user.dateOfBirth ? setDateOfBirth(new Date(user.dateOfBirth)) : setDateOfBirth('')
        var ava = handleAvatar(avatarBase64)
        setAvatarUrl(ava)
    }

    const updateCandidate = async (axiosPrivate, dispatch, data, id) => await doUpdateCandidate(axiosPrivate, dispatch, data, id)
    const updateEmployer = async (axiosPrivate, dispatch, data, id) => await doUpdateEmployer(axiosPrivate, dispatch, data, id)
    const handleSave = () => {
        var formData = new FormData()
        if (role === 'Employer') {
            if (!username) {
                toast.error('Vui lòng điền đầy đủ thông tin')
            } else {
                formData.append('PhoneNumber', phoneNum)
                formData.append('Avatar', avatar)
                formData.append('Address', address)
                formData.append('Description', description)
                formData.append('Username', username)
                formData.append('Website', website)
                updateEmployer(axiosPrivate, dispatch, formData, user.id)
                    .then(data => {
                        dispatch(setUser(data))
                    })
            }

        } else {
            if (!username || !dateOfBirth) {
                toast.error('Vui lòng điền đầy đủ thông tin')
            } else {
                formData.append('PhoneNumber', phoneNum)
                formData.append('Avatar', avatar)
                formData.append('Username', username)
                formData.append('DateOfBirth', moment(dateOfBirth).format('YYYY-MM-DD'))
                updateCandidate(axiosPrivate, dispatch, formData, user.id)
                    .then(data => {
                        console.log(data)
                        if (user === currentUser) {
                            dispatch(setUser(data))
                        }
                        toast.success('Thành công')
                    }).catch(error => {
                        toast.error(error)
                    })
            }
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <Card
                className='w-50 rounded-4'
                style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                }}
            >
                <Card.Header className='d-flex align-items-center flex-column gap-2'>
                    <div className='d-flex justify-content-end w-100'>
                        <BorderColorIcon
                            className='rounded onHover'
                            onClick={() => (setIsEdit(true))}
                            style={{ color: '#5767aa', boxShadow: 'rgba(0, 0, 0, 0.35) 2px 3px 2px' }}
                            fontSize='large' />
                    </div>
                    <div className='w-100 d-flex align-items-center flex-column'>
                        <Avatar
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                            }}
                            variant='rounded'
                            src={avatarUrl}
                            sx={{ width: '10rem', height: '10rem' }} />
                        {isEdit ? <Form.Group>
                            <Form.Label
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.175)',
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                }}
                                htmlFor='avatar'
                                className='onHover mt-2 px-2 rounded-4'>
                                <AccountBoxIcon
                                    fontSize='medium'
                                    style={{ color: '#5767aa' }} />
                                Chọn ảnh đại diện mới
                            </Form.Label>
                            <Form.Control
                                className='position-absolute'
                                style={{
                                    visibility: 'hidden',
                                    border: '1px solid rgba(0, 0, 0, 0.175)'
                                }}
                                id='avatar'
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={async (e) => {
                                    const avaBase64 = await toBase64(e.target.files[0])
                                    setAvatarUrl(avaBase64);
                                    setAvatar(e.target.files[0])
                                }} />
                        </Form.Group> : <></>}
                    </div>
                    <Form.Group>
                        <Form.Control
                            style={{
                                textAlign: 'center',
                                fontWeight: '800',
                                fontSize: '1.5rem',
                                textShadow: 'rgba(0, 0, 0, 0.35) 2px 3px 2px'
                            }}
                            readOnly={!isEdit}
                            plaintext={true}
                            type='text'
                            size='lg'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                </Card.Header>

                <Card.Body>
                    <Card >
                        <Card.Body>
                            <Form.Group className='pb-3'>
                                <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                                <Form.Control
                                    style={{
                                        fontWeight: '600',
                                        border: '1px solid rgba(0, 0, 0, 0.175)',
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                    }}
                                    className='ps-3 onHover'
                                    disabled
                                    readOnly={true}
                                    plaintext={true}
                                    type='text'
                                    size='lg'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            {role === 'Candidate'
                                ? <Form.Group className='pb-3'>
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control
                                        style={{
                                            fontWeight: '600',
                                            border: '1px solid rgba(0, 0, 0, 0.175)',
                                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                        }}
                                        className='ps-3 onHover'
                                        disabled={!isEdit}
                                        readOnly={!isEdit}
                                        plaintext={true}
                                        type='date'
                                        size='lg'
                                        value={moment(dateOfBirth).format('YYYY-MM-DD')}
                                        onChange={(e) => setDateOfBirth(e.target.value)} />
                                </Form.Group> : <></>}
                            <Form.Group className='pb-3'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    style={{
                                        fontWeight: '600',
                                        border: '1px solid rgba(0, 0, 0, 0.175)',
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                    }}
                                    className='ps-3 onHover'
                                    disabled={!isEdit}
                                    readOnly={!isEdit}
                                    plaintext={true}
                                    type='text'
                                    size='lg'
                                    value={phoneNum}
                                    onChange={(e) => setPhoneNum(e.target.value)} />
                            </Form.Group>
                            {role === 'Employer'
                                ? <>
                                    <Form.Group className='pb-3'>
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control
                                            style={{
                                                fontWeight: '600',
                                                border: '1px solid rgba(0, 0, 0, 0.175)',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                            }}
                                            className='ps-3 onHover'
                                            disabled={!isEdit}
                                            readOnly={!isEdit}
                                            plaintext={true}
                                            type='text'
                                            size='lg'
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className='pb-3'>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            style={{
                                                fontWeight: '600',
                                                border: '1px solid rgba(0, 0, 0, 0.175)',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                            }}
                                            className='ps-3 onHover'
                                            disabled={!isEdit}
                                            readOnly={!isEdit}
                                            plaintext={true}
                                            type='text'
                                            size='lg'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className='pb-3'>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            style={{
                                                fontWeight: '600',
                                                border: '1px solid rgba(0, 0, 0, 0.175)',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                            }}
                                            className='ps-3 onHover'
                                            disabled={!isEdit}
                                            readOnly={!isEdit}
                                            plaintext={true}
                                            type='text'
                                            size='lg'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)} />
                                    </Form.Group>
                                </> : <></>}
                        </Card.Body>
                    </Card>
                </Card.Body>

                {isEdit ? <Card.Footer className='d-flex justify-content-end gap-2'>
                    <Button variant='info' onClick={() => {
                        handleSave()
                        setIsEdit(false)
                    }}>
                        Lưu
                    </Button>

                    <Button onClick={() => {
                        setIsEdit(false)
                        revertValue()
                    }} variant='danger'>
                        Huỷ
                    </Button>
                </Card.Footer> : <></>}
            </Card>
        </div>
    )
}

export default Profile