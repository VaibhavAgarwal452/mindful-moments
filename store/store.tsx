// store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import quoteReducer from '../reducers/quoteSlice';
import collectionReducer from '../reducers/collectionSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    quotes: quoteReducer,
    collection: collectionReducer,
    // Add more reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
