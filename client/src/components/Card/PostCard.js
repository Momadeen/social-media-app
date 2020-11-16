import moment from "moment";
import React, { useContext } from "react";
import { Card, Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.scss";
import { AuthContext } from "context/auth";
import Button from "components/Button";
import Like from "./components/Like";
import Delete from "./components/Delete";
import Comment from "./components/Comment";

const PostCard = ({ post, type }) => {
  const user = useContext(AuthContext);

  return (
    <>
      {type === "single" ? (
        <div className={styles.singlePost}>
          <div className={styles.imgContainer}>
            <Image
              src={
                post?.user?.image ||
                "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              size="massive"
              avatar
            />
          </div>
          <div className={styles.postSection}>
            <Card fluid className={styles.Card}>
              <div className={styles.userInfo}>
                <div className={styles.user}>
                  <div className={styles.username}>
                    <Header as="h4">@{post?.username}</Header>
                    <Header as="h4">{post?.fullName}</Header>
                  </div>
                  <Card.Meta as={Link} to={`/posts/${post?.id}`}>
                    <Header as="h5">
                      {moment(post?.createdAt).fromNow(true)}
                    </Header>
                  </Card.Meta>
                </div>
              </div>
              <div className={styles.content}>
                <Header as="h5">{post?.body}</Header>
              </div>
              <div className={styles.footer}>
                <div className={styles.actions}>
                  <Like post={post} user={user} />
                  <Icon name="comment alternate" size="large" />
                  <Icon name="share" size="large" />
                </div>
                {user && post?.username === user?.user?.username ? (
                  <Delete postId={post?.id} />
                ) : null}
              </div>
            </Card>
            <Comment
              postId={post?.id}
              comments={post?.comments}
              owner={user && post?.username === user?.user?.username}
            />
          </div>
        </div>
      ) : (
        <Card fluid className={styles.Card}>
          <div className={styles.userInfo}>
            <div className={styles.imgContainer}>
              <Image
                src={
                  post?.user?.image ||
                  "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
                size="massive"
                avatar
              />
            </div>
            <div className={styles.user}>
              <div className={styles.username}>
                <Header as="h4">{post?.fullName}</Header>
                <Header as="h5">@{post?.username}</Header>
              </div>
              <Card.Meta as={Link} to={`/posts/${post?.id}`}>
                <Header as="h5">{moment(post?.createdAt).fromNow(true)}</Header>
              </Card.Meta>
            </div>
          </div>
          <div className={styles.content}>
            <Header as="h5">{post?.body}</Header>
          </div>
          <div className={styles.footer}>
            <div className={styles.actions}>
              <Like post={post} user={user} />
              <div className={styles.comment}>
                <Icon name="comment alternate" size="large" />
                <h4>{post?.comments.length}</h4>
              </div>
              <Icon name="share" size="large" />
            </div>
            {user && post?.username === user?.user?.username ? (
              <Delete postId={post?.id} />
            ) : null}
          </div>
        </Card>
      )}
    </>
  );
};

// delete component

export default PostCard;
