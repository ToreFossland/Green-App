import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: any, ...rest }) => {
  //const auth = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let tokenExpiration = jwtDecode(token).exp;
      let dateNow = new Date();

      if (tokenExpiration < dateNow.getTime() / 1000) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
    // eslint-disable-next-line
  }, []);

  if (isAuthenticated === null) {
    return <></>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
function jwtDecode(token: string) {
  throw new Error("Function not implemented.");
}
