import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import { postsSlice } from "./api/postsSlice";

export const store = configureStore({
    reducer: {
        counter:  counterReducer,
        [postsSlice.reducerPath]: postsSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch