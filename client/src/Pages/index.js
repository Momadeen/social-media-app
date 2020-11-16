import React, { useContext } from "react";
import { AuthContext } from "context/auth";
import Main from "./Main";
import Welcome from "./WelcomeScreen";

const App = () => {
  const { user } = useContext(AuthContext);
  return <>{user ? <Main /> : <Welcome />}</>;
};

export default App;
