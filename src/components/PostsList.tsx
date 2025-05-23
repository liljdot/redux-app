import { useCreatePostMutation, useGetPostsQuery } from "../state/api/postsSlice";
import type { Post } from "../types";

const PostsList: React.FC = () => {
    const { data: posts, isLoading } = useGetPostsQuery({ limit: 10, offset: 0 })
    const [createPostMutation, { isLoading: createPostIsLoading }] = useCreatePostMutation()

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
        <button onClick={() => createPostMutation({title: "this is a new post"})}>
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