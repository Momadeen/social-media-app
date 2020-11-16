import { useMutation } from "@apollo/react-hooks";
import createPostGql from "gql/posts/createPost.gql";
import postsGql from "gql/posts/posts.gql";
import { useCallback } from "react";

const useCreatePost = ({ onClose }) => {
  const [createPostMutation, { loading, error }] = useMutation(createPostGql);

  const createPost = useCallback(
    async ({ body }) => {
      try {
        await createPostMutation({
          variables: {
            body,
          },
          update(proxy, result) {
            const data = proxy.readQuery({
              query: postsGql,
            });
            data.getPosts = [result.data.createPost, ...data.getPosts];
            proxy.writeQuery({ query: postsGql, data });
            body = "";
          },
        });
      } catch (ex) {
        console.log(ex);
      }
      onClose();
    },
    [createPostMutation]
  );

  return {
    createPost,
    loading,
    error,
  };
};

export default useCreatePost;
