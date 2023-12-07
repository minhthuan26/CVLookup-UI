import ActiveAccountPage from '~/Pages/ActiveAccountPage'
import CVPage from '~/Pages/CV-Page'
import CompanyListPage from '~/Pages/CompanyListPage'
import EmployerPage from '~/Pages/EmployerPage'
import HomePage from '~/Pages/HomePage'
import JobsPage from '~/Pages/JobsPage'
import LoginPage from '~/Pages/LoginPage'
import PostRecruitmentPage from '~/Pages/PostRecruitmentPage'
import RecruitmentDashBoardPage from '~/Pages/RecruitmentDashBoardPage'
import RecruitmentDetail from '~/Pages/RecruitmentDetail'
import DefaultLayout from '~/components/Layout/DefaultLayout'
import EmployerLayout from '~/components/Layout/EmployerLayout'
import LoginLayout from '~/components/Layout/LoginLayout'
import AdminPage from '~/Pages/AdminPage'
import AdminLayout from '~/components/Layout/AdminLayout'
import EmployerManagement from '~/Pages/UserManamentPage/EmployerManagement/EmployerManagement'
import CandidateManagement from '~/Pages/UserManamentPage/CandidateManagement/CandidateManagement'
import ExperienceManagement from '~/Pages/CategoriesManagement/ExperienceManagement/ExperienceManagement'
import JobCareerManagement from '../Pages/CategoriesManagement/JobCareerManagement/JobCareerManagement'
import JobFormManagement from '../Pages/CategoriesManagement/JobFormManagement/JobFormManagement'
import JobPositionManagement from '../Pages/CategoriesManagement/JobPositionManagement/JobPositionManagement'
import JobFieldManagement from '../Pages/CategoriesManagement/JobFieldManagement/JobFieldManagement'
import RecruitmentManagement from '../Pages/RecruitmentManagement/RecruitmentManagement'
import CVManagement from '../Pages/CVManagement/CVManagement'
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
    {
        path: '/recruitment-dashboard',
        layout: DefaultLayout,
        page: RecruitmentDashBoardPage,
        allowedRoles: ['Admin', 'Employer'],
    },
    {
        path: '/aaa',
        layout: AdminLayout,
        page: AdminPage,
        allowedRoles: ['Admin'],
    },
    {
        path: '/employer-management',
        layout: AdminLayout,
        page: EmployerManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/candidate-management',
        layout: AdminLayout,
        page: CandidateManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/experience-management',
        layout: AdminLayout,
        page: ExperienceManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/jobcareer-management',
        layout: AdminLayout,
        page: JobCareerManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/jobform-management',
        layout: AdminLayout,
        page: JobFormManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/jobfield-management',
        layout: AdminLayout,
        page: JobFieldManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/jobposition-management',
        layout: AdminLayout,
        page: JobPositionManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/recruitment-management',
        layout: AdminLayout,
        page: RecruitmentManagement,
        allowedRoles: ['Admin'],
    },
    {
        path: '/curriculumn-viate-management',
        layout: AdminLayout,
        page: CVManagement,
        allowedRoles: ['Admin'],
    },
]

export { publicRoutes, privateRoutes }
