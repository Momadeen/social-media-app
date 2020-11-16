import { useQuery } from "@apollo/react-hooks";
import singlePostGql from "gql/posts/singlePost.gql";
import { useMemo } from "react";

const useSinglePost = ({ postId }) => {
  const { data } = useQuery(singlePostGql, {
    variables: { postId },
  });

  const singlePost = useMemo(() => {
    return data ? data?.getPost : {};
  }, [data]);

  return { singlePost };
};

export default useSinglePost;
