import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router'
import SecureRoute from './components/SecureRoute'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { connection } from './utils/HubConnection'
import { postRestoreRefreshToken } from './action/authApi'
import { persistor } from './Redux/store'
import { logout } from './Redux/Auth/authSlice'

const connect = connection()

function App() {
    const isLoading = useSelector(state => state.loader.loading)
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.credentials.user)

    useEffect(() => {
        if (user) {
            connect.start().then(() => {
                connect.invoke("AddHubConnection", user.id).then((connectionId) => {
                    const restoreRefreshToken = async (userId, connectionId) => await postRestoreRefreshToken(userId, connectionId)
                    restoreRefreshToken(user.id, connectionId)
                    connect.on("ForceLogout", async () => {
                        dispatch(logout())
                        connect.stop()
                        persistor.purge()
                    })
                })
            })
        } else {
            // connect.invoke("DeleteHubConnectionByConnectionId").then(() => {
            //     connect.stop()
            // })
            connect.stop()
        }
    },
        // eslint-disable-next-line
        [user])

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
                        <Route key={index} element={<SecureRoute allowedRoles={route.allowedRoles} />} >
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
                transition={Slide} />
        </BrowserRouter>
    )
}

export default App
