import React, { useContext } from "react";
import { AuthContext } from "context/auth";
import Home from "./Home";
import Welcome from "./WelcomeScreen";

const App = () => {
  const { user } = useContext(AuthContext);
  return <>{user ? <Home /> : <Welcome />}</>;
};

export default App;
