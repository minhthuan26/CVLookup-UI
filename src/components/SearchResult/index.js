import React, { useEffect, useState } from 'react'
import { Container, Image, Alert } from 'react-bootstrap'
import defaultAvatar from '~/assets/logo.jpg'
import PaginationAuto from '../PaginationAuto'

const SearchResult = ({ list }) => {
    const [page, setPage] = useState(1)
    return (
        <Container
            fluid
            className='rounded-4 mt-2 p-3 d-flex gap-4 flex-column'
            style={{
                backgroundColor: 'rgb(238,238,238)',
            }}>
            {list.length > 0
                ?
                <>
                    {
                        list.slice((page * 6 - 6), (page * 6)).map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className='d-flex justify-content-between w-100 onHover rounded-4 px-2 pt-3 pe-4'
                                    style={{
                                        borderLeft: '0.5rem solid',
                                        borderColor: 'rgb(87,103,170)',
                                        backgroundColor: 'rgb(224,228,237)',
                                        boxShadow: 'rgb(0,0,0,0.5) 0px 4px 12px',
                                    }}>
                                    <div className='d-flex gap-4'>
                                        <div>
                                            <Image
                                                style={{ height: '6rem' }}
                                                className='w-100 rounded'
                                                src={defaultAvatar} />
                                        </div>
                                        <div className='d-flex flex-column justify-content-between py-2'>
                                            <div>
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div style={{
                                                color: 'rgb(87, 103, 170)'
                                            }}>
                                                <p><b>{item.company}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{item.salary}</p>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div className='text-end'>
                                            <p>{item.createdAt}</p>
                                        </div>
                                        <div>
                                            <Alert className='text-white' style={{
                                                backgroundColor: 'rgb(87,103,170)'
                                            }}>
                                                Ứng tuyển ngay
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='d-flex justify-content-center'>
                        <PaginationAuto list={list} itemsPerPage={6} page={page} setPage={setPage} />
                    </div>
                </>
                : <>
                    <div className='d-flex justify-content-center'>
                        <p><b>Không có công việc phù hợp</b></p>
                    </div>

                </>}
        </Container>
    )
}

export default SearchResult