import React, { FC, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
import { PrivateRoute } from './components/PrivateRoute';
import { Admin } from 'admin/Admin';
import Profile from './pages/ProfilePage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import { SignUpPage } from 'pages/SignUpPage';
import GlobalTheme from "./GlobalTheme";
import MyAppBar from './components/MyAppBar';
import MyBottomNavigation from './components/MyBottomNavigation';
import UpdateProfilePage from './pages/UpdateProfilePage';
import AddActivities from './pages/AddActivitiesPage';
import { GlobalContext } from 'state/context';
import SettingsPage from 'pages/SettingsPage';


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
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route
            exact path="/logout" component={LoginPage}
            // render={() => {
            //   logout();
            //   return null;
            // }}
          />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/updateprofile" component={UpdateProfilePage} />
          <PrivateRoute exact path="/add" component={AddActivities} />
          <PrivateRoute exact path="/settings" component={SettingsPage} />
    </Switch>
    <MyBottomNavigation/>
    </ThemeProvider>
  );
};