import React from "react";
import { Container } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <Container className={styles.layout}>
    <Sidebar />
    {children}
  </Container>
);

export default Layout;
