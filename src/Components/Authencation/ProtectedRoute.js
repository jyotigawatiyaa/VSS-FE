import React from "react";
import { Redirect, Route } from "react-router";
function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
// 65.0.129.68
// https://www.getpostman.com/collections/810d7e8338dae3e9584e