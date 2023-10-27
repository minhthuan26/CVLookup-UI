import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        register: {
            isFetching: false,
            error: false,
            currentUser: null,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFail: (state) => {
            state.login.error = true
            state.login.isFetching = false
        },
        registerStart: (state) => {
            state.register.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.register.isFetching = false
            state.register.error = false
            state.register.currentUser = action.payload
        },
        registerFail: (state) => {
            state.register.error = true
            state.register.isFetching = false
            state.register.success = false
        },
    },
})

export const {
    loginStart,
    loginFail,
    loginSuccess,
    registerFail,
    registerSuccess,
    registerStart,
} = authSlice.actions

export default authSlice.reducer
