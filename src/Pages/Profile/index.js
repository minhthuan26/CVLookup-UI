import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Button, Form } from 'react-bootstrap'
import defaultAvatar from '~/assets/default_avatar.jpg'
import { Avatar, TextField } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Profile = () => {
    const user = useSelector(state => state.auth.credentials.user)
    const avatarBase64 = useSelector(state => state.auth.credentials.avatarBase64)
    const role = useSelector(state => state.auth.credentials.role)
    const [isEdit, setIsEdit] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    useEffect(() => {
        if (user) {
            setUsername(user.username)
            setEmail(user.email)
            setPhoneNum(user.phoneNumber)
            setWebsite(user.website)
            setDescription(user.description)
            setAddress(user.address)
            var ava = handleAvatar(avatarBase64)
            setAvatar(ava)
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
        setUsername(user.username)
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
                            src={avatar}
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
                                accept="image/png, image/jpeg" />
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
                    <Card style={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                    }}>
                        <Card.Body>
                            <Form.Group className='pb-3'>
                                <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                                <Form.Control
                                    style={{
                                        fontWeight: '600',
                                        border: '1px solid rgba(0, 0, 0, 0.175)',
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                    }}
                                    className='ps-3'
                                    disabled
                                    readOnly={true}
                                    plaintext={true}
                                    type='text'
                                    size='lg'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className='pb-3'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    style={{
                                        fontWeight: '600',
                                        border: '1px solid rgba(0, 0, 0, 0.175)',
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                    }}
                                    className='ps-3'
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
                                            className='ps-3'
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
                                            className='ps-3'
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
                                            className='ps-3'
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
                    <Button variant='info'>
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