import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Layout from "./Layout";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Layout>
    </Router>
  );
}

export default App;
