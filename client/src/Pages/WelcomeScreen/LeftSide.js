import React from "react";
import Draw from "images/homeDraw.png";
import styles from "./Welcome.module.scss";

const LeftSide = () => {
  return (
    <div className={styles.draw}>
      <img src={Draw} alt="draw" />
    </div>
  );
};

export default LeftSide;
