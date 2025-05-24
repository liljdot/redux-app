import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import { postsApiSlice } from "./api/postsApiSlice";
import postsReducer from "./posts/postsSlice";

export const store = configureStore({
    reducer: {
        counter:  counterReducer,
        posts: postsReducer,
        [postsApiSlice.reducerPath]: postsApiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch