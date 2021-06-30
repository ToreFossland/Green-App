import React, { Component, FunctionComponent } from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  exact: boolean;
  path: string;
  component: React.ElementType;
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  let token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        // logic for authenticated user to access /app part goes here.
        // e.g. check if user is logged-in logic.
        return token && token !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
