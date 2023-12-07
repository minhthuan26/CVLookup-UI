import React, { useState } from 'react'
import { Pagination } from '@mui/material'

const PaginationAuto = ({ list, itemsPerPage, page, setPage }) => {
    return (
        <Pagination
            onChange={(e, value) => setPage(value)}
            defaultPage={page}
            count={Math.ceil(list.length * 1.0 / itemsPerPage)}
            color='secondary'
            shape="rounded" />
    )
}

export default PaginationAuto