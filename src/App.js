import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router'
import SecureRoute from './components/SecureRoute'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
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
                        <Route key={index} element={<SecureRoute />} allowedRoles={route.allowedRoles}>
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
