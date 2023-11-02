import { createSlice } from '@reduxjs/toolkit'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loading: false
    },
    reducers: {
        inLoading: (state, action) => {
            state.loading = true
        },

        successLoading: (state, action) => {
            state.loading = false
        }
    }
})

export const { inLoading, successLoading } = loaderSlice.actions

export default loaderSlice.reducer