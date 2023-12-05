import { createSlice } from '@reduxjs/toolkit'

const NotificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        notifications: []
    },
    reducers: {
        setNotifications: (state, action) => {
            state.notifications = action.payload
        }
    }
})

export const { setNotifications } = NotificationSlice.actions
export default NotificationSlice.reducer