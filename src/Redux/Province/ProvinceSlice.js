const { createSlice } = require("@reduxjs/toolkit");

const ProvinceSlice = createSlice({
    name: 'province',
    initialState: {
        provinceList: []
    },
    reducers: {
        setProvinces: (state, action) => {
            state.provinceList = action.payload.data
        }
    }
})

export const { setProvinces } = ProvinceSlice.actions

export default ProvinceSlice.reducer