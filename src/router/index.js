import ActiveAccountPage from '~/Pages/ActiveAccountPage'
import CVPage from '~/Pages/CV-Page'
import CompanyListPage from '~/Pages/CompanyListPage'
import EmployerPage from '~/Pages/EmployerPage'
import HomePage from '~/Pages/HomePage'
import JobsPage from '~/Pages/JobsPage'
import LoginPage from '~/Pages/LoginPage'
import PostRecruitmentPage from '~/Pages/PostRecruitmentPage'
import RecruitmentDetail from '~/Pages/RecruitmentDetail'
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
        path: '/jobs',
        layout: DefaultLayout,
        page: JobsPage,
    },
    {
        path: '/company-list',
        layout: DefaultLayout,
        page: CompanyListPage,
    },
    {
        path: '/active-account',
        layout: DefaultLayout,
        page: ActiveAccountPage,
    },
    {
        path: '/recruitment-detail',
        layout: DefaultLayout,
        page: RecruitmentDetail,
    },
]

const privateRoutes = [
    {
        path: '/curriculum-vitae',
        layout: DefaultLayout,
        page: CVPage,
        allowedRoles: ['Admin', 'Candidate'],
    },
    {
        path: '/employer',
        layout: EmployerLayout,
        page: EmployerPage,
        allowedRoles: ['Admin', 'Employer'],
    },
    {
        path: '/post-recruitment',
        layout: DefaultLayout,
        page: PostRecruitmentPage,
        allowedRoles: ['Admin', 'Employer'],
    },
]

export { publicRoutes, privateRoutes }
