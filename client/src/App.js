import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { AuthProvider } from "context/auth";
import Home from "./Pages";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Route component={Home} path="/" />
      </Router>
    </AuthProvider>
  );
}

export default App;
