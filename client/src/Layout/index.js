import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar />
    <div className={styles.childrenContainer}>{children}</div>
  </div>
);

export default Layout;
