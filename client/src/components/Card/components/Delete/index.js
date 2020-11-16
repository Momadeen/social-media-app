import useDeleteComment from "hooks/posts/useDeleteComment";
import useDeletePost from "hooks/posts/useDeletePost";
import React, { useState } from "react";
import { Confirm, Icon } from "semantic-ui-react";
import styles from "./Delete.module.scss";

const Delete = ({ postId, commentId }) => {
  const [open, setOpen] = useState(false);
  const { deletePost } = useDeletePost();
  const { deleteComment } = useDeleteComment();

  const handleOpen = () => setOpen(!open);
  const handleConfirm = () => {
    handleOpen();
    commentId ? deleteComment(commentId, postId) : deletePost(postId);
  };

  return (
    <div className={styles.Delete}>
      <Icon name="trash" onClick={handleOpen} />
      <Confirm open={open} onCancel={handleOpen} onConfirm={handleConfirm} />
    </div>
  );
};

export default Delete;
