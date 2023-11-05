import React from 'react'
import CompanyElements from '~/components/CompanyElement'
import JobCareer from '~/components/JobCareer'
import JobElement from '~/components/JobElements'
import Searchbar from '~/components/Searchbar'
import { useSelector } from 'react-redux'
import AdminPage from '../AdminPage'
import EmployerPage from '../EmployerPage'

const HomePage = () => {
    const credentials = useSelector(state => state.auth.credentials)
    return (
        credentials.role
            ? credentials.role === 'Admin'
                ? <AdminPage />
                : credentials.role === 'Employer'
                    ? <EmployerPage />
                    : (<div>
                        <Searchbar />
                        <JobElement />
                        <hr />
                        <CompanyElements />
                        <hr />
                        <JobCareer />
                    </div>)
            : (<div>
                <Searchbar />
                <JobElement />
                <hr />
                <CompanyElements />
                <hr />
                <JobCareer />
            </div>)
    )
}

export default HomePage
