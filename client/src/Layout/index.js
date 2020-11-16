import React from "react";
import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar />
    <div className={styles.childrenContainer}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
