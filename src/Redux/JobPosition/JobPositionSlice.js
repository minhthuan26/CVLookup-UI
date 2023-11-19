const { createSlice } = require('@reduxjs/toolkit')

const JobPositionSlice = createSlice({
    name: 'jobPosition',
    initialState: {
        jobPosition: [],
    },
    reducers: {
        setJobPosition: (state, action) => {
            state.jobPositionList = action.payload.data
        },
    },
})

export const { setJobPosition } = JobPositionSlice.actions

export default JobPositionSlice.reducer
