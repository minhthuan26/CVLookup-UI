import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import defaultAvatar from '~/assets/default_avatar.jpg'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'

const CompanyInfoHeader = ({ user }) => {
    const handleAvatar = (user) => {
        const avatarString = user.avatar
        if (avatarString) {
            return "data:image/png;base64," + avatarString
        }
        return defaultAvatar
    }
    return (
        <Container style={{ width: '90%' }} className='d-flex flex-column gap-2 justify-content-center p-3 mb-2'>
            <div className='d-flex gap-2'>
                <Image
                    style={{ height: '6rem' }}
                    className='w-25 rounded'
                    src={handleAvatar(user)} />
                <h5>{user.username}</h5>
            </div>
            <div>
                <PlaceRoundedIcon style={{ color: 'rgb(127,135,143)' }} fontSize='small' />
                {user.address ? user.address : ''}
            </div>
            <div className='pt-2'>
                <Button className='w-100 text-center' variant='primary' value={user.website}>
                    <b>
                        <i className="fa fa-rocket" aria-hidden="true"></i> {' '}
                        Truy cập website
                    </b>
                </Button>
            </div>
        </Container>
    )
}

export default CompanyInfoHeader