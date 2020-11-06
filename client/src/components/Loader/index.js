import React from "react";
import { Dimmer, Loader as SemanticLoader } from "semantic-ui-react";
import styles from "./Loader.module.scss";

const Loader = () => (
  <div className={styles.background}>
    <Dimmer active>
      <SemanticLoader size="large">Loading</SemanticLoader>
    </Dimmer>
  </div>
);

export default Loader;
