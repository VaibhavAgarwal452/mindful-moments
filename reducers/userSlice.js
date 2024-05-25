// reducers/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser } from "./userAPI"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const createUserAsync = createAsyncThunk(
    'user/createUser',
    async (userData) => {
        const response = await createUser(userData.user);
        // The value we return becomes the `fulfilled` action payload
        await AsyncStorage.setItem('user', JSON.stringify(response.data.data));

        return response.data;
    }
);
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        email: "",
        gender: "",
        areasOfImprovement: [],
        reasonForImprovement: [],
        feelingLately: "",
        notificationNumber: 10,
        notificationTimeStart: 0,
        notificationTimeEnd: 12
    },
    reducers: {
        updateUserData: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state, action) => {
            })
            .addCase(createUserAsync.fulfilled, async (state, action) => {
            })
    }
});

export const { updateUserData } = userSlice.actions;

export const selectUserData = state => state.user;

export default userSlice.reducer;
