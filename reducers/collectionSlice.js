import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { getCollections, create, updateName, removeCollection, removeQuotesFromCollection, addQuotesToCollection } from './collectionAPI';

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

export const updateNameAsync = createAsyncThunk(
    'collections/updateName',
    async ({ collectionId, newCollectionName }) => {
        const response = await updateName(collectionId, newCollectionName)
        return response
    }
)

export const removeCollectionAsync = createAsyncThunk(
    'collections/removeCOllections',
    async ({ collectionId }) => {
        const response = await removeCollection(collectionId)
        return { collectionId, response }
    }
)

export const removeQuotesFromCollectionAsync = createAsyncThunk(
    'collections/removeQuotesFromCollection',
    async ({ collectionId, quoteId }) => {
        const response = await removeQuotesFromCollection(collectionId, quoteId)
        return { response, collectionId, quoteId }
    }
)

export const addQuotesToCollectionAsync = createAsyncThunk(
    'collections/addQuotesToCollections',
    async ({ quotesData }) => {
        const response = await addQuotesToCollection(quotesData)
        return response
    }
)

export const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        loading: false,
        collections: {},
        searchedCollectionQuotes: []
    },
    reducers: {
        searchCollections: (state, action) => {
            const currentCollection = state.collections.filter(item => item._id === action.payload.collectionId)
            state.searchedCollectionQuotes = currentCollection[0]?.quotes?.filter(s => s.quote.toLowerCase().includes(action.payload.inputText.toLowerCase()))
        }
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
                state.loading = true
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.collections.push(action.payload)
            })
            .addCase(updateNameAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateNameAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.collections = action.payload
            })
            .addCase(removeCollectionAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(removeCollectionAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.collections = state.collections.filter(item => item._id !== action.payload.collectionId)
            })
            .addCase(removeQuotesFromCollectionAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(removeQuotesFromCollectionAsync.fulfilled, (state, action) => {
                state.loading = false;
                const tempCollection = []
                state.collections.map((item => {
                    if (item._id === action.payload.collectionId) {
                        const tempQuotes = []
                        item?.quotes?.map(item1 => {
                            if (item1._id !== action.payload.quoteId) {
                                tempQuotes.push(item1)
                            }
                        })
                        tempCollection.push({ ...item, quotes: tempQuotes })
                    }
                    tempCollection.push(item)
                }))
                state.collections = tempCollection
            })
            .addCase(addQuotesToCollectionAsync.pending, (state, action) => {
                state.loading = true
            })
            .addCase(addQuotesToCollectionAsync.fulfilled, (state, action) => {
                state.loading = false
                state.collections = state.collections.map(item => {
                    if (item._id === action.payload._id) {
                        item.quotes = action.payload.quotes
                    }
                    return item
                })
            })
    }
})

export const { searchCollections } = collectionSlice.actions;


export default collectionSlice.reducer;

