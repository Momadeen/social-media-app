import { useMutation } from "@apollo/react-hooks";
import { useCallback } from "react";
import likeGql from "gql/posts/like.gql";

const useLike = () => {
  const [likeMutation, { loading }] = useMutation(likeGql);

  const Like = useCallback(
    async (id) => {
      try {
        await likeMutation({
          variables: {
            postId: id,
          },
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    [likeMutation]
  );

  return {
    Like,
    loading,
  };
};

export default useLike;
