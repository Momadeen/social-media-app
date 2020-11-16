import useLike from "hooks/posts/useLike";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styles from "./Like.module.scss";

const Like = ({ post: { likeCount, id, likes }, user }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes?.find((like) => like?.username === user?.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);
  const { Like } = useLike();

  const onLike = () => {
    setLiked(true);
    Like(id);
  };
  return (
    <div className={styles.like}>
      {user ? (
        liked ? (
          <Icon
            name="thumbs up outline"
            size="large"
            className={styles.liked}
            onClick={onLike}
          />
        ) : (
          <Icon onClick={onLike} name="thumbs up outline" size="large" />
        )
      ) : (
        <Icon as={Link} to="/login" name="thumbs up outline" size="large" />
      )}
      <h4>{likeCount}</h4>
    </div>
  );
};

export default Like;
