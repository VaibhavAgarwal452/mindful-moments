// reducers/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        email: "",
        gender: "",
        areasOfImprovement: [],
        reasonForImprovement: [],
        feelingLately: "",
        notificationNumber: "",
        notificationTimeStart: 0,
        notificationTimeEnd: 12
    },
    reducers: {
        updateUserData: (state, action) => {
            return { ...state, ...action.payload };
        },

    },
});

export const { updateUserData } = userSlice.actions;

export const selectUserData = state => state.user;

export default userSlice.reducer;
