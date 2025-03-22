import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/postSlice";

function PostList() {
  const posts = useSelector((state: any) => state.posts.posts);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {posts.map((post: any, index: any) => {
        return (
          <div id={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
