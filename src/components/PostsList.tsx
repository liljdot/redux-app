import { useGetPostsQuery } from "../state/api/postsSlice";
import type { Post } from "../types";

const PostsList: React.FC = () => {
    const { data: posts } = useGetPostsQuery({limit: 10, offset: 0})

    return (
        <>
            <ul>
                {posts?.map((post: Post) => <li key={post.id}>
                    {post.title}
                </li>)}
            </ul>
        </>
    )
}

export default PostsList;