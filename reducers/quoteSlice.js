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
        searchedSavedQuotes: [],
        loading: false
    },
    reducers: {
        updateSavedQuotes: (state, action) => {
            return { ...state, savedQuotes: state.savedQuotes.filter(item => item._id !== action.payload) }
        },
        searchSavedQuotes: (state, action) => {
            console.log(state.savedQuotes, "action.payload")
            return {
                ...state, searchedSavedQuotes: state.savedQuotes.filter(s => s.quote.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
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
                state.loading = false
                state.savedQuotes = action.payload
            })
    }
})

export const selectUserData = state => state.quotes;
export const { updateSavedQuotes, searchSavedQuotes } = quoteSlice.actions

export default quoteSlice.reducer;
