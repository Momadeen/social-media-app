import Button from "components/Button";
import useCreateComment from "hooks/posts/useCreateComment";
import React, { useState } from "react";
import { Form, Header, Comment as SemanticComment } from "semantic-ui-react";
import PropTypes from "prop-types";
import Delete from "../Delete";

const CommentComponent = ({ postId, comments, owner }) => {
  const [comment, setComment] = useState("");
  const { createComment } = useCreateComment();

  const onSubmit = async () => {
    await createComment(comment, postId);
    setComment("");
  };
  return (
    <SemanticComment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>

      {comments?.map((comment) => (
        <SemanticComment key={comment?.id}>
          <SemanticComment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <SemanticComment.Content>
            <SemanticComment.Author as="a">
              {comment?.username}
            </SemanticComment.Author>
            <SemanticComment.Metadata>
              <div>Today at 5:42PM</div>
            </SemanticComment.Metadata>
            <SemanticComment.Text>{comment?.body}</SemanticComment.Text>
            <SemanticComment.Actions>
              <SemanticComment.Action>Reply</SemanticComment.Action>
              {owner && (
                <SemanticComment.Action>
                  <Delete commentId={comment?.id} postId={postId} />
                </SemanticComment.Action>
              )}
            </SemanticComment.Actions>
          </SemanticComment.Content>
        </SemanticComment>
      ))}

      <Form onSubmit={onSubmit} style={{ marginTop: "10px" }}>
        <Form.TextArea
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" primary>
          Add Reply
        </Button>
      </Form>
    </SemanticComment.Group>
  );
};

CommentComponent.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  owner: PropTypes.bool.isRequired,
};
export default CommentComponent;
