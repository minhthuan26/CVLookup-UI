import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import banner from '~/assets/banner.png'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import { recruitmentUrl } from '~/utils/ApiUrl'

const CompanyInfoHeader = ({ user }) => {
    return (
        <Container style={{ width: '90%' }} className='d-flex flex-column gap-2 justify-content-center p-3 mb-2'>
            <div className='d-flex gap-2'>
                <Image
                    style={{ height: '6rem' }}
                    className='w-25 rounded'
                    src={banner} />
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