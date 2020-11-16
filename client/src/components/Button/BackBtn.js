import React from "react";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const BackBtn = ({ onClick }) => {
  return (
    <div className={styles.backBtn} onClick={onClick}>
      <Icon name="chevron left" />
    </div>
  );
};

BackBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackBtn;
