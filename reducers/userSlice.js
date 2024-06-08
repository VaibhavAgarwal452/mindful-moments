// reducers/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, fetchUser, addQuoteToUser, removeQuotesFromUser, updateQuoteFromMyQuotes, removeQuotesFromMyQuotes, addQuoteToMyQuotes, login } from "./userAPI"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginAsync = createAsyncThunk(
    'user/login',
    async ({ email, password }) => {
        const response = await login(email, password)
        return response.data
    }
)

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
        const response = await addQuoteToUser(userId, quoteId);
        return { response, quoteId };
    }
)
export const removeQuotesFromUserAsync = createAsyncThunk(
    'user/removeQuotes',
    async ({ userId, quoteId }) => {
        const response = await removeQuotesFromUser(userId, quoteId);
        return response;
    }
)

export const addQuoteToMyQuotesAsync = createAsyncThunk(
    'user/addQuoteToMyQuotes',
    async ({ userId, quote, author }) => {
        const response = await addQuoteToMyQuotes(userId, quote, author);
        return response.data;
    }
)

export const removeQuotesFromMyQuotesAsync = createAsyncThunk(
    'user/removeQuotesFromMyQuotes',
    async ({ userId, quoteId }) => {
        const response = await removeQuotesFromMyQuotes(userId, quoteId);
        return response.data;
    }
)
export const updateQuoteFromMyQuotesAsync = createAsyncThunk(
    'user/updateQuoteFromMyQuotes',
    async ({ userId, quoteId, quote, author }) => {
        const response = await updateQuoteFromMyQuotes(userId, quoteId, quote, author);
        return response.data;
    }
)
const initialState = {
    name: "",
    email: "",
    gender: "",
    areasOfImprovement: [],
    reasonForImprovement: [],
    feelingLately: "",
    notificationNumber: 10,
    notificationTimeStart: 0,
    notificationTimeEnd: 12,
    savedQuotes: [],
    myQuotes: [],
    searchedMyQuotes: []
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateUserData: (state, action) => {
            return { ...state, ...action.payload };
        },
        searchMyQuotes: (state, action) => {
            return {
                ...state, searchedMyQuotes: state.myQuotes.filter(s => s.quote.toLowerCase().includes(action.payload.toLowerCase()))
            }
        },
        resetState: (state, action) => {
            return initialState
        }
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
            .addCase(addQuoteToUserAsync.fulfilled, (state, action) => {
                state.savedQuotes.push(action.payload.quoteId);
            })
            .addCase(removeQuotesFromUserAsync.fulfilled, (state, action) => {
                return { ...state, savedQuotes: [...state.savedQuotes].filter(item => item !== action.payload.quoteId) }
            })
            .addCase(addQuoteToMyQuotesAsync.fulfilled, (state, action) => {
                return { ...state, ...action.payload };
            })
            .addCase(removeQuotesFromMyQuotesAsync.fulfilled, (state, action) => {
                return { ...state, ...action.payload };
            })
            .addCase(updateQuoteFromMyQuotesAsync.fulfilled, (state, action) => {
                return { ...state, ...action.payload };
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                return action.payload.user
            })

    }
});

export const { updateUserData, searchMyQuotes, resetState } = userSlice.actions;

export const selectUserData = state => state.user;

export default userSlice.reducer;
