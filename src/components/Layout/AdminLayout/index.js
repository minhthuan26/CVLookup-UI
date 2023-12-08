import React from 'react'
import HeaderAdmin from '../../Header/HeaderAdmin'
import FooterAdmin from '../../Footer/FooterAdmin'
import MenuAdmin from '~/components/Sidebar/MenuAdmin'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <HeaderAdmin />
            <MenuAdmin />
            <div className="wrapper">{children}</div>
            <FooterAdmin />
        </div>
    )
}

export default AdminLayout
