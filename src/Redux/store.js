import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/authSlice'
import authSliceRedux from './Auth/authSliceRedux'
export default configureStore({
    reducer: {
        auth: authReducer,
        authSliceRedux: authSliceRedux
    },
})
