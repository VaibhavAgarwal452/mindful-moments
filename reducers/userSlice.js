// reducers/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, fetchUser, addQuoteToUser, removeQuotesFromUser } from "./userAPI"
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

export const fetchCurrentUserAsync = createAsyncThunk(
    'user/fetchCurrentUser',
    async (id) => {
        const response = await fetchUser(id);
        return response.data;
    }
)

export const addQuoteToUserAsync = createAsyncThunk(
    'user/savedQuotes',
    async ({ userId, quoteId }) => {
        console.log(userId, quoteId, "dd")
        const response = await addQuoteToUser(userId, quoteId);
        return response.data;
    }
)
export const removeQuotesFromUserAsync = createAsyncThunk(
    'user/removeQuotes',
    async ({ userId, quoteId }) => {
        console.log(userId, quoteId, "dd")
        const response = await removeQuotesFromUser(userId, quoteId);
        return response;
    }
)

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
        notificationTimeEnd: 12,
        savedQuotes: []
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
            .addCase(fetchCurrentUserAsync.pending, (state, action) => {

            })
            .addCase(fetchCurrentUserAsync.fulfilled, (state, action) => {
                return { ...state, ...action.payload };
            })
            .addCase(addQuoteToUserAsync.fulfilled, (state, action) => { })
            .addCase(removeQuotesFromUserAsync.fulfilled, (state, action) => {
                const savedQutoes = state.savedQuotes.filter(item => item !== action.payload.quoteId)
                console.log(savedQutoes, "davdsuihd")
                // state.savedQuotes.filter(item !== action.payload.quoteId)
                return { ...state, savedQuotes: [...state.savedQuotes].filter(item => item !== action.payload.quoteId) }
            })

    }
});

export const { updateUserData } = userSlice.actions;

export const selectUserData = state => state.user;

export default userSlice.reducer;
