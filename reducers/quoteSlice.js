import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuotes, fetchQuotesByIds } from "./quoteApi";

export const fetchQuotesAsync = createAsyncThunk(
    'quotes/fetchQuotes',
    async () => {
        const response = await fetchQuotes();
        return response;
    }
)
export const fetchQuotesByIdsAsync = createAsyncThunk(
    'quotes/fetchQuotesByIds',
    async (ids) => {

        const response = await fetchQuotesByIds(ids);
        return response.data;
    }
)
export const quoteSlice = createSlice({
    name: "quotes",
    initialState: {
        quotes: [],
        savedQuotes: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuotesAsync.pending, (state, action) => {
            state.loading = true;
        }),
            builder.addCase(fetchQuotesAsync.fulfilled, (state, action) => {
                state.loading = false
                state.quotes = [...state.quotes, ...action.payload];
            }),
            builder.addCase(fetchQuotesByIdsAsync.pending, (state, action) => {
                state.loading = true
            }),
            builder.addCase(fetchQuotesByIdsAsync.fulfilled, (state, action) => {
                console.log("hit")
                state.loading = false
                state.savedQuotes = [...state.savedQuotes, ...action.payload]
            })
    }
})

export const selectUserData = state => state.quotes;

export default quoteSlice.reducer;