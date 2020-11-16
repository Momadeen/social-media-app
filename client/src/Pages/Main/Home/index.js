import React, { useContext } from "react";
import { Grid, Transition } from "semantic-ui-react";
import PostCard from "components/Card/PostCard";
import useGetPosts from "hooks/posts/useGetPosts";


const Home = () => {
  const { posts } = useGetPosts();

  return (
    <Grid celled="internally">
      <Transition.Group duration={200}>
        {posts?.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Transition.Group>
    </Grid>
  );
};

export default Home;
