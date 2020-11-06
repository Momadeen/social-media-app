import React from "react";
import { Grid } from "semantic-ui-react";
import PostCard from "components/Card/PostCard";
import useGetPosts from "hooks/posts/useGetPosts";
import Loader from "components/Loader";
import Layout from "Layout";

const Home = () => {
  const { posts, loading } = useGetPosts();
  if (loading) return <Loader />;
  return (
    <Layout>
      <Grid celled="internally">
        {posts?.map((post) => (
          <PostCard post={post} />
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
