import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        credentials: {
            user: null,
            role: '',
            accessToken: '',
            accountId: ''
        }
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, role, accessToken, accountId } = action.payload.data
            state.credentials.user = user
            state.credentials.role = role
            state.credentials.accessToken = accessToken
            state.credentials.accountId = accountId
        },

        renewToken: (state, action) => {
            const { accessToken } = action.payload.data
            state.credentials.accessToken = accessToken
        },

        logout: (state, action) => {
            state.credentials.user = null
            state.credentials.role = ''
            state.credentials.accessToken = ''
            state.credentials.accountId = ''
        }
    }
})

export const { setCredentials, logout, renewToken, inFetching, successFetching } = authSlice.actions

export default authSlice.reducer