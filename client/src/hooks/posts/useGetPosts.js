import { useQuery } from "@apollo/react-hooks";
import { useMemo } from "react";
import PostsGql from "../../gql/posts/posts.gql";

const useGetPosts = () => {
  const { data, loading, error } = useQuery(PostsGql, {
    fetchPolicy: "cache-and-network",
  });

  const posts = useMemo(() => (data && data?.getPosts) || [], [data]);

  return {
    posts,
    loading,
    error,
  };
};

export default useGetPosts;
