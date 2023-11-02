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

export const { setCredentials, logout, renewToken } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => {
    console.log(state);
    return state.credentials.user
}
export const selectCurrentRole = (state) => state.credentials.role
export const selectCurrentAccountId = (state) => state.credentials.AccountId
export const selectCurrentAccessToken = (state) => state.credentials.accessToken