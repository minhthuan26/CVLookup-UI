const { createSlice } = require('@reduxjs/toolkit')

const JobFieldSlice = createSlice({
    name: 'jobField',
    initialState: {
        jobField: [],
    },
    reducers: {
        setJobFields: (state, action) => {
            state.jobField = action.payload.data
        },
    },
})

export const { setJobFields } = JobFieldSlice.actions

export default JobFieldSlice.reducer
