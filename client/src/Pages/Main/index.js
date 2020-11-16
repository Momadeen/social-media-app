import { AuthProvider } from "context/auth";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "Layout";
import Home from "./Home";
import Settings from "./Settings";
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
