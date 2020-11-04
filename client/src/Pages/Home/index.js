import React from "react";
import { Grid } from "semantic-ui-react";
import PostCard from "components/Card/PostCard";
import useGetPosts from "hooks/posts/useGetPosts";
import Loader from "components/Loader";

const Home = () => {
  const { posts, loading } = useGetPosts();
  if (loading) return <Loader />;
  return (
    <Grid celled="internally">
      {posts?.map((post) => (
        <PostCard post={post} />
      ))}
    </Grid>
  );
};

export default Home;
