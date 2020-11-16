import Button from "components/Button";
import useCreateComment from "hooks/posts/useCreateComment";
import React, { useState } from "react";
import { Form, Header, Comment } from "semantic-ui-react";
import PropTypes from "prop-types";
import Delete from "../Delete";

const CommentComponent = ({ postId, comments, owner }) => {
  const [comment, setComment] = useState("");
  const { createComment } = useCreateComment();
  console.log(owner);

  const onSubmit = async () => {
    await createComment(comment, postId);
    setComment("");
  };
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>

      {comments?.map((comment) => (
        <Comment key={comment?.id}>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{comment?.username}</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{comment?.body}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
              {owner && (
                <Comment.Action>
                  <Delete commentId={comment?.id} postId={postId} />
                </Comment.Action>
              )}
            </Comment.Actions>
          </Comment.Content>
        </Comment>
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
    </Comment.Group>
  );
};

CommentComponent.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  owner: PropTypes.bool.isRequired,
};
export default CommentComponent;
