import React from "react";
import { Grid } from "semantic-ui-react";
import PostCard from "../../components/Card/PostCard";
import useGetPosts from "../../hooks/posts/useGetPosts";

const Home = () => {
  const { posts } = useGetPosts();
  return (
    <Grid celled="internally">
      {posts?.map((post) => (
        <PostCard post={post} />
      ))}
    </Grid>
  );
};

export default Home;
