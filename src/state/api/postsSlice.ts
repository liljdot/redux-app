import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../../types";

export const postsSlice = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: builder => ({
        getPosts: builder.query<Post[], {limit: number, offset: number}>({
            query: ({limit,  offset}) => `/posts?_limit=${limit}&_offset=${offset}`,
        }), // 1st type argument is the response type, 2nd is the query parameters type. parameter supports only one object
    }),
})

export const { useGetPostsQuery } = postsSlice