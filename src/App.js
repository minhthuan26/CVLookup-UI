import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router'
import SecureRoute from './components/SecureRoute'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './components/Loader/Loader'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { connection } from './utils/HubConnection'
import { postRestoreRefreshToken } from './action/authApi'
import Cookies from 'js-cookie'

const connect = connection()

function App() {
    const isLoading = useSelector(state => state.loader.loading)
    const user = useSelector(state => state.auth.credentials.user)

    useEffect(() => {
        const refreshTokenInCookie = Cookies.get('RefreshToken')
        console.log(refreshTokenInCookie);
        if (user && !refreshTokenInCookie) {
            const restoreRefreshToken = async (userId) => await postRestoreRefreshToken(userId)
            restoreRefreshToken(user.id)
        }
    },
        // eslint-disable-next-line
        []
    )

    useEffect(() => {
        if (user) {
            connect.start().then(() => {
                connect.invoke("AddHubConnection", user.id)
            })
        } else {
            // connect.invoke("DeleteHubConnectionByConnectionId").then(() => {
            //     connect.stop()
            // })
            connect.stop()
        }
    }, [user])
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
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Slide} />
        </BrowserRouter>
    )
}

export default App
