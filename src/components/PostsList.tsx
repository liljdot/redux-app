import { useSelector } from "react-redux";
import { useCreatePostMutation, useGetPostsQuery } from "../state/api";
import type { Post } from "../types";
import type { RootState } from "../state/store";

const PostsList: React.FC = () => {
    const { isLoading } = useGetPostsQuery({ limit: 10, offset: 0 })
    const [createPostMutation, { isLoading: createPostIsLoading, data: createPostResponse }] = useCreatePostMutation()
    const { posts } = useSelector((state: RootState) => state.posts)

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <button onClick={() => {
                createPostMutation({ title: "this is a new post" })
            }}>
                {createPostIsLoading ? "Creating..." : "Create Post"}
            </button>
            <ul>
                {posts?.map((post: Post) => <li key={post.id}>
                    {post.title}
                </li>)}
            </ul>
        </>
    )
}

export default PostsList;