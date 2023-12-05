import React, { useState } from 'react'
import JobsSearch from '~/components/JobsSearch'
import SearchBarAdvance from '~/components/SearchBarAdvance'
import SearchResult from '~/components/SearchResult'


function JobsPage() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex align-items-center flex-column w-75'>
                <SearchBarAdvance />
                <SearchResult />
            </div>
        </div>
    )
}

export default JobsPage
