import { createSlice } from '@reduxjs/toolkit'

const authSliceRedux = createSlice({
    name: 'authSliceRedux',
    initialState: {
        credentials: {
            user: null,
            roleId: '',
            accessToken: '',
            accountId: ''
        }
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, roleId, accessToken, accountId } = action.payload.data
            state.credentials.user = user
            state.credentials.roleId = roleId
            state.credentials.accessToken = accessToken
            state.credentials.accountId = accountId
        },

        renewToken: (state, action) => {
            const { accessToken } = action.payload.data
            state.credentials.accessToken = accessToken
        },

        logout: (state, action) => {
            state.user = null
            state.roleId = ''
            state.accessToken = ''
            state.accountId = ''
        }
    }
})

export const { setCredentials, logout, renewToken } = authSliceRedux.actions

export default authSliceRedux.reducer

export const selectCurrentUser = (state) => {
    console.log(state);
    return state.credentials.user
}
export const selectCurrentRoleId = (state) => state.credentials.roleId
export const selectCurrentAccountId = (state) => state.credentials.AccountId
export const selectCurrentAccessToken = (state) => state.credentials.accessToken