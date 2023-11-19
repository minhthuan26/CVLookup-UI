import React from 'react'
import DataTablePagination from 'react-data-table-component'

const CustomPagination = ({
    rowsPerPage,
    totalRows,
    page,
    onRowsPerPageChange,
    onPagination,
}) => {
    const totalPages = Math.ceil(totalRows / rowsPerPage)

    return (
        <DataTablePagination
            rowsPerPageText={`Số hàng mỗi trang: `}
            rangeSeparator={` của `}
            paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
            paginationTotalRows={totalRows}
            paginationPerPage={rowsPerPage}
            paginationRowsPerPageText={'Hàng mỗi trang'}
            paginationCurrentPageText={`Trang ${page + 1} của ${totalPages}`}
            onChangeRowsPerPage={onRowsPerPageChange}
            onChangePage={onPagination}
        />
    )
}

export default CustomPagination
