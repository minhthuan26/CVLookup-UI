import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router'
import SecureRoute from './components/SecureRoute'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { connection } from './utils/HubConnection'
import { postRestoreRefreshToken } from './action/authApi'
import { persistor } from './Redux/store'
import { logout } from './Redux/Auth/authSlice'
import { doGetAllJobField } from './action/JobFieldApi'
import { doGetAllJobCareer } from './action/JobCareerApi'
import { doGetAllProvince } from './action/JobAddressApi'
import { doGetAllExperience } from './action/ExperienceApi'
import LoginModal from './components/LoginModal'
import useLoginModal from './hooks/useLoginModal'
import ApplyJobModal from './components/ApplyJobModal'
import useApplyJobModal from './hooks/useApplyJobModal'
import { doGetAllJobForm } from './action/JobFormApi'
import { doGetAllJobPosition } from './action/JobPosition'
import Notification from './components/Notification'
import useNotificationBox from './hooks/useNotificationBox'
import usePrivateAxios from '~/action/AxiosCredentials'
import { doGetNotificationByUserId } from '~/action/notification'
import { setNotifications } from '~/Redux/Notification/NotificationSlice'

const connect = connection()

function App() {
    const isLoading = useSelector((state) => state.loader.loading)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.credentials.user)
    const accessToken = useSelector(state => state.auth.credentials.accessToken)
    const axiosPrivate = usePrivateAxios(accessToken)
    const [userId, setUserId] = useState('')

    useEffect(
        () => {
            const getJobFields = async (dispatch) =>
                await doGetAllJobField(dispatch)
            const getCareers = async (dispatch) =>
                await doGetAllJobCareer(dispatch)
            const getProvinces = async (dispatch) =>
                await doGetAllProvince(dispatch)
            const getExperiences = async (dispatch) =>
                await doGetAllExperience(dispatch)
            const getJobForms = async (dispatch) =>
                await doGetAllJobForm(dispatch)
            const getJobPositions = async (dispatch) =>
                await doGetAllJobPosition(dispatch)
            getJobFields(dispatch)
            getCareers(dispatch)
            getProvinces(dispatch)
            getExperiences(dispatch)
            getJobForms(dispatch)
            getJobPositions(dispatch)
        },
        // eslint-disable-next-line
        []
    )

    useEffect(
        () => {
            if (user && user.id !== userId) {
                setUserId(user.id)
                connect.start().then(() => {
                    connect
                        .invoke('AddHubConnection', user.id)
                        .then((connectionId) => {
                            const restoreRefreshToken = async (
                                userId,
                                connectionId
                            ) =>
                                await postRestoreRefreshToken(
                                    userId,
                                    connectionId
                                )
                            restoreRefreshToken(user.id, connectionId)
                            connect.on('ForceLogout', async () => {
                                dispatch(logout())
                                connect.stop()
                                persistor.purge()
                            })
                        })
                })
            } else {
                connect.stop()
            }
        },
        // eslint-disable-next-line
        [user]
    )

    const getNotificationByUserId = async (axiosPrivate, userId) => await doGetNotificationByUserId(axiosPrivate, userId)
    useEffect(() => {
        if (user) {
            getNotificationByUserId(axiosPrivate, user.id).then(data => {
                dispatch(setNotifications(data))
            })
        }
    },
        // eslint-disable-next-line
        [user])
    const { loginModal, setLoginModal } = useLoginModal()
    const { applyJobModal, appliedCv } = useApplyJobModal()
    const { isDisplay, setIsDisplay } = useNotificationBox()
    connect.on("ClientNotify", () => {
        getNotificationByUserId(axiosPrivate, user.id).then(data => {
            dispatch(setNotifications(data))
        })
    })
    return (

        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.page
                    const Layout = route.layout
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}

                {privateRoutes.map((route, index) => {
                    const Page = route.page
                    const Layout = route.layout
                    return (
                        <Route
                            key={index}
                            element={
                                <SecureRoute
                                    allowedRoles={route.allowedRoles}
                                />
                            }>
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        </Route>
                    )
                })}
            </Routes>
            {isLoading ? <Loader /> : null}
            <LoginModal show={loginModal} />
            <ApplyJobModal
                show={applyJobModal}
                appliedCv={appliedCv}
                user={user} />

            <Notification isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                style={{ width: '40rem', textAlign: 'center' }}
                transition={Slide}
            />
        </BrowserRouter>
    )
}

export default App
