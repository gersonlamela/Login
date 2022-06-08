import React from "react";
import { Route, Navigate } from "react-router-dom";

import { isAuthenticated } from "../service/isAuthenticated";

export function PrivateRoute({ component, ...rest }) {
  const routeComponent = (props) =>
    isAuthenticated() ? (
      React.createElement(component, props)
    ) : (
      <Navigate to="/login" replace={true} />
    );
  return <Route {...rest} render={routeComponent} />;
}
