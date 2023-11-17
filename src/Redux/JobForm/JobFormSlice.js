const { createSlice } = require('@reduxjs/toolkit')

const JobFormSlice = createSlice({
    name: 'jobForm',
    initialState: {
        jobForm: [],
    },
    reducers: {
        setJobForms: (state, action) => {
            state.jobFormList = action.payload.data
        },
    },
})

export const { setJobForms } = JobFormSlice.actions

export default JobFormSlice.reducer
