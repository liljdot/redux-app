import { useGetPostsQuery } from "../state/api/postsSlice";

const PostsList: React.FC = () => {
    const {data: posts} = useGetPostsQuery({})

    return (
        <>
        <ul>
            {posts?.map((post:any) => <li key={post.id}>
                {post.title}
            </li>)}
        </ul>
        </>
    )
}

export default PostsList;