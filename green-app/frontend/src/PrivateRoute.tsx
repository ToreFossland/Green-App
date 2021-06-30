import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {}

const ProtectedRoute = (props: PrivateRouteProps) => {
  const { ...rest } = props;
  let token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token && token !== undefined) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
