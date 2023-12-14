import React, { useEffect, useState } from 'react'
import CompanyElements from '~/components/CompanyElement'
import JobCareer from '~/components/JobCareer'
import JobElement from '~/components/JobElements'
import Searchbar from '~/components/Searchbar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const credentials = useSelector((state) => state.auth.credentials)
    const navigate = useNavigate()
    const role = useSelector((state) => state.auth.credentials.role)
    const [roleName, setRoleName] = useState('')

    useEffect(() => {
        if (role) {
            setRoleName(role)
        }
    },
        //eslint-disable-next-line
        [role])

    return roleName ? (
        roleName === 'Admin' ? (
            navigate('/admin')
        ) : roleName === 'Employer' ? (
            navigate('/employer')
        ) : (
            <div>
                <Searchbar />
                <JobElement />
                <hr />
                <CompanyElements />
                <hr />
                <JobCareer />
            </div>
        )
    ) : (
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
