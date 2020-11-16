import { useMutation } from "@apollo/react-hooks";
import createCommentGql from "gql/posts/createComment.gql";
import { useCallback } from "react";

const useCreateComment = () => {
  const [createCommentMutation, { loading }] = useMutation(createCommentGql);

  const createComment = useCallback(
    async (body, postId) => {
      try {
        await createCommentMutation({
          variables: {
            body,
            postId,
          },
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    [createCommentMutation]
  );

  return { createComment, loading };
};

export default useCreateComment;
