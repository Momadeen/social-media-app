import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "context/auth";
import AuthRoute from "hooks/AuthRoute";
import styles from "./Welcome.module.scss";
import Login from "../Login";
import Register from "../Register";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.Welcome}>
      <div className={styles.leftSide}>
        <LeftSide />
      </div>
      <div className={styles.rightSide}>
        <Router>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/" component={RightSide} />
        </Router>
      </div>
    </div>
  );
};

export default Welcome;
