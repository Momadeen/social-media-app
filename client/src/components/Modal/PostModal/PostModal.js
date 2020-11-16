import Button from "components/Button";
import useCreatePost from "hooks/posts/useCreatePost";
import useForm from "hooks/useForm";
import React from "react";
import { Form, Icon, TextArea } from "semantic-ui-react";
import styles from "./PostModal.module.scss";

const PostModal = ({ onClose }) => {
  const { createPost, loading } = useCreatePost({ onClose });

  const { onChange, onSubmit, values } = useForm(createPost, {
    body: "",
  });
  return (
    <div className={styles.Modal}>
      <div className={styles.background} onClick={onClose} />
      <div className={styles.postContainer}>
        <div className={styles.header}>
          <Icon name="times" onClick={onClose} />
        </div>
        <Form className={styles.form} onSubmit={onSubmit}>
          <TextArea
            placeholder="What's on your mind 😎?"
            value={values.body}
            onChange={onChange}
            name="body"
          />
          <div className={styles.footer}>
            <div className={styles.btnContainer}>
              <Button
                type="submit"
                loading={loading}
                disable={values?.body === ""}
              >
                Post
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostModal;
