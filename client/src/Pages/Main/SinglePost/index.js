import PostCard from "components/Card/PostCard";
import useSinglePost from "hooks/posts/useSinglePost";
import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();
  const { singlePost } = useSinglePost({ postId });

  return <PostCard type="single" post={singlePost} />;
  // return <h1>Hello</h1>;
};

export default SinglePost;
