import React from 'react'
import JobsSearch from '~/components/JobsSearch'
import SearchBarAdvance from '~/components/SearchBarAdvance'
import SearchResult from '~/components/SearchResult'

const jobs = [
    {
        id: '1',
        title: 'Job 1',
        company: 'COM-1',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '2',
        title: 'Job 2',
        company: 'COM-2',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '3',
        title: 'Job 3',
        company: 'COM-3',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '4',
        title: 'Job 4',
        company: 'COM-4',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '5',
        title: 'Job 5',
        company: 'COM-5',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '6',
        title: 'Job 6',
        company: 'COM-6',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '7',
        title: 'Job 4',
        company: 'COM-4',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '8',
        title: 'Job 5',
        company: 'COM-5',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '9',
        title: 'Job 6',
        company: 'COM-6',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
    {
        id: '10',
        title: 'Job 6',
        company: 'COM-6',
        salary: 'Thoả thuận',
        createdAt: '1 ngày trước'
    },
]

function JobsPage() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex align-items-center flex-column w-75'>
                <SearchBarAdvance />
                <SearchResult list={jobs} />
            </div>
        </div>
    )
}

export default JobsPage
