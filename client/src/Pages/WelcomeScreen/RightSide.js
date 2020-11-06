import React from "react";
import { ReactComponent as Logo } from "images/logo.svg";
import styles from "./Welcome.module.scss";
import Button from "components/Button";
import { useHistory } from "react-router-dom";

const RightSide = () => {
  const history = useHistory();
  return (
    <div className={styles.info}>
      <Logo className={styles.logo} />
      <h2 className={styles.welcomeText}>
        See what’s happening in the world right now
      </h2>
      <div className={styles.buttonsContainer}>
        <Button onClick={() => history.push("/login")}>Login</Button>
        <Button buttonColor="outline"  onClick={() => history.push("/register")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default RightSide;
