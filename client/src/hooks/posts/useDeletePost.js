import { useMutation } from "@apollo/react-hooks";
import deletePostGql from "gql/posts/deletePost.gql";
import { useCallback } from "react";
import postsGql from "gql/posts/posts.gql";

const useDeletePost = () => {
  const [deletePostMutation, { loading }] = useMutation(deletePostGql);

  const deletePost = useCallback(
    async (postId) => {
      try {
       await deletePostMutation({
          variables: {
            postId,
          },
          update(proxy) {
            const data = proxy.readQuery({
              query: postsGql,
            });
            data.getPosts = data.getPosts.filter((p) => p.id !== postId);
            proxy.writeQuery({ query: postsGql, data });
          },
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    [deletePostMutation]
  );

  return {
    deletePost,
    loading,
  };
};

export default useDeletePost;
