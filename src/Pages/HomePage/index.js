import React from 'react'
import CompanyElements from '~/components/CompanyElement'
import JobCareer from '~/components/JobCareer'
import JobElement from '~/components/JobElements'
import Searchbar from '~/components/Searchbar'

const HomePage = () => {
    return (
        <div>
            <Searchbar />
            <JobElement />
            <hr />
            <CompanyElements />
            <hr />
            <JobCareer />
        </div>
    )
}

export default HomePage
