import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Button as ButtonSem } from "semantic-ui-react";
import styles from "./Button.module.scss";

const Button = ({
  type,
  disable,
  onClick,
  loading,
  children,
  buttonColor = "primary",
}) => {
  return (
    <>
      {loading ? (
        <ButtonSem loading>Loading</ButtonSem>
      ) : (
        <button
          type={type}
          disabled={disable}
          onClick={onClick}
          className={cx(
            styles.button,
            disable
              ? styles.disable
              : buttonColor === "primary"
              ? styles.primary
              : styles.outline
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disable: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default Button;
