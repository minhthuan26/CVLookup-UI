const { createSlice } = require("@reduxjs/toolkit");

const JobCareerSlice = createSlice({
    name: 'jobCareer',
    initialState: {
        jobCareerList: []
    },
    reducers: {
        setJobCareers: (state, action) => {
            state.jobCareerList = action.payload.data
        }
    }
})

export const { setJobCareers } = JobCareerSlice.actions

export default JobCareerSlice.reducer