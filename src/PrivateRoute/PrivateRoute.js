import React, { useEffect } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { context } = useAuth();
  const { user } = context;
  useEffect(() => {
    // console.log("user", user);
  }, [user]);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
