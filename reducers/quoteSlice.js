import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuotes, fetchQuotesByIds, fetchQuotesByCategories } from "./quoteApi";

export const fetchQuotesAsync = createAsyncThunk(
    'quotes/fetchQuotes',
    async ({ userQuotesPrefrences }) => {
        const response = await fetchQuotes(userQuotesPrefrences);
        return response;
    }
)

export const fetchQuotesByCategoriesAsync = createAsyncThunk(
    'quotes/fetchQuotesByCategories',
    async ({ category }) => {
        console.log("categr", category);
        const response = await fetchQuotesByCategories(category)
        return response
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
        loading: false,
        categoryQuotes: []
    },
    reducers: {
        updateSavedQuotes: (state, action) => {
            return { ...state, savedQuotes: state.savedQuotes.filter(item => item._id !== action.payload) }
        },
        searchSavedQuotes: (state, action) => {
            return {
                ...state, searchedSavedQuotes: state.savedQuotes.filter(s => s.quote.toLowerCase().includes(action.payload.toLowerCase()))
            }
        },
        addQuoteToQuotes: (state, action) => {
            return { ...state, quotes: [action.payload, ...state.quotes] }
        },
        resetCategoriesQuotes: (state) => {
            return { ...state, categoryQuotes: [] }
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
            }),
            builder.addCase(fetchQuotesByCategoriesAsync.pending, (state, action) => {
                state.loading = true
            }),
            builder.addCase(fetchQuotesByCategoriesAsync.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload, "dsi")
                state.categoryQuotes = [...state.categoryQuotes, ...action.payload];
            })
    }
})

export const selectUserData = state => state.quotes;
export const { updateSavedQuotes, searchSavedQuotes, addQuoteToQuotes, resetCategoriesQuotes } = quoteSlice.actions

export default quoteSlice.reducer;
