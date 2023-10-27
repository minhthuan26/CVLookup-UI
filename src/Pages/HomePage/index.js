import React from 'react'
import JobElement from '~/components/JobElements'
import Searchbar from '~/components/Searchbar'

const HomePage = () => {
    return (
        <div>
            <Searchbar />
            <JobElement />
        </div>
    )
}

export default HomePage
