import { useMutation } from "@apollo/react-hooks";
import deleteCommentGql from "gql/posts/deleteComment.gql";
import { useCallback } from "react";

const useDeleteComment = () => {
  const [deleteCommentMutation, { loading }] = useMutation(deleteCommentGql);

  const deleteComment = useCallback(
    async (commentId, postId) => {
      try {
        await deleteCommentMutation({
          variables: {
            commentId,
            postId,
          },
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    [deleteCommentMutation]
  );

  return { deleteComment, loading };
};

export default useDeleteComment;
