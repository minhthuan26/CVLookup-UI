const { createSlice } = require("@reduxjs/toolkit");

const ExperienceSlice = createSlice({
    name: 'experience',
    initialState: {
        experienceList: []
    },
    reducers: {
        setExperiences: (state, action) => {
            state.experienceList = action.payload.data
        }
    }
})

export const { setExperiences } = ExperienceSlice.actions
export default ExperienceSlice.reducer