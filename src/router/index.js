import CVPage from '~/Pages/CV-Page'
import CompanyListPage from '~/Pages/CompanyListPage'
import EmployerPage from '~/Pages/EmployerPage'
import HomePage from '~/Pages/HomePage'
import JobsPage from '~/Pages/JobsPage'
import LoginPage from '~/Pages/LoginPage'
import DefaultLayout from '~/components/Layout/DefaultLayout'
import EmployerLayout from '~/components/Layout/EmployerLayout'
import LoginLayout from '~/components/Layout/LoginLayout'
const publicRoutes = [
    {
        path: '/',
        layout: DefaultLayout,
        page: HomePage,
    },
    {
        path: '/login',
        layout: LoginLayout,
        page: LoginPage,
    },
    {
        path: '/employer',
        layout: EmployerLayout,
        page: EmployerPage,
    },
    {
        path: '/jobs',
        layout: DefaultLayout,
        page: JobsPage,
    },
    {
        path: '/company-list',
        layout: DefaultLayout,
        page: CompanyListPage,
    },
]

const privateRoutes = [
    {
        path: '/curriculum-vitae',
        layout: DefaultLayout,
        page: CVPage,
    },
]

export { publicRoutes, privateRoutes }
