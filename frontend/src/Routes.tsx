import React, { FC, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ThemeProvider } from "@material-ui/styles";
import StHeader from './styledComponents/StHeader';
import { Home, Login, SignUp, PrivateRoute } from './pages';
import { Admin } from './admin';
import { login, logout } from './utils/auth';
import Profile from './pages/ProfilePage';
import GlobalTheme from "./GlobalTheme";
import MyAppBar from './components/MyAppBar';
import MyBottomNavigation from './components/MyBottomNavigation';
import UpdateProfile from './pages/UpdateProfilePage';
import AddActivities from './pages/AddActivitiesPage';
import { GlobalContext } from 'state/context';


export const Routes: FC = () => {
  const { state } = useContext(GlobalContext);
  console.log(state.user);

  return (
    <ThemeProvider theme={GlobalTheme}>
      <MyAppBar/>
      <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact path="/logout" component={Login}
            // render={() => {
            //   logout();
            //   return null;
            // }}
          />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/updateprofile" component={UpdateProfile} />
          <PrivateRoute exact path="/add" component={AddActivities} />
    </Switch>
    <MyBottomNavigation/>
    </ThemeProvider>
  );
};