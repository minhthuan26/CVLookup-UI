import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { Provider } from 'react-redux'
import store, { persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { LoginModalProvider } from './context/loginModalContext'
import { ApplyJobModalProvider } from './context/applyJobModalContext'
import { NotificationBoxProvider } from './context/notificationBoxContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <LoginModalProvider>
                <ApplyJobModalProvider>
                    <NotificationBoxProvider>
                        <App />
                    </NotificationBoxProvider>
                </ApplyJobModalProvider>
            </LoginModalProvider>
        </PersistGate>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
