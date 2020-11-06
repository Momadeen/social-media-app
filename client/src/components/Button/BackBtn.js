import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "./Button.module.scss";

const BackBtn = ({ onClick }) => {
  return (
    <div className={styles.backBtn} onClick={onClick}>
      <Icon name="chevron left" />
    </div>
  );
};

export default BackBtn;
