import { createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../types";
import { postsApiSlice } from "../api/postsApiSlice";

interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: []
}

const postsSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(postsApiSlice.endpoints.getPosts.matchFulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
})

export default postsSlice.reducer;