/* eslint-disable */

import { AuthContext } from "context/auth";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default AuthRoute;
