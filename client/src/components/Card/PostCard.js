import moment from "moment";
import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{post?.username}</Card.Header>
      <Card.Meta as={Link} to={`/posts/${post?.id}`}>
        {moment(post?.createdAt).fromNow(true)}
      </Card.Meta>
      <Card.Description>{post?.body}</Card.Description>
    </Card.Content>
  </Card>
);

export default PostCard;
