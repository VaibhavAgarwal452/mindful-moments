import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollections, create } from './collectionAPI';

export const getCollectionsAsync = createAsyncThunk(
    'collections/getCollections',
    async ({ userId }) => {
        const response = await getCollections(userId);
        return response;
    }
)

export const createAsync = createAsyncThunk(
    'collections/create',
    async ({ userId, collectionName }) => {
        const response = await create(userId, collectionName);
        return response
    }
)

export const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        loading: false,
        collections: {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCollectionsAsync.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCollectionsAsync.fulfilled, (state, action) => {
                state.loading = false
                state.collections = action.payload;
            })
            .addCase(createAsync.pending, (state, action) => {
                state.loading = false
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                state.loading = true;
                state.collections.push(action.payload)
            })
    }
})

export default collectionSlice.reducer;

