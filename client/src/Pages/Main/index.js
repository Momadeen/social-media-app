import { AuthProvider } from "context/auth";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import Layout from "Layout";
import SinglePost from "./SinglePost";

const Main = () => (
  <AuthProvider>
    <Layout>
      <Switch>
        <Route path="/posts/:postId" component={SinglePost} />
        <Route path="/settings" component={Settings} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </AuthProvider>
);

export default Main;
