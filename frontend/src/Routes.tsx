import React, { FC, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { PrivateRoute } from './components/PrivateRoute';
import { Admin } from 'admin/Admin';
import Profile from './pages/ProfilePage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import MapPage from 'pages/MapPage';
import { SignUpPage } from 'pages/SignUpPage';
import GlobalTheme from './GlobalTheme';
import MyAppBar from './components/MyAppBar';
import MyBottomNavigation from './components/MyBottomNavigation';
import UpdateProfilePage from './pages/UpdateProfilePage';
import AddActivities from './pages/AddActivitiesPage';
import StBackgroundPaper from 'styledComponents/StBackgroundPaper';
import ChangePasswordPage from 'pages/ChangePasswordPage';
import { GlobalContext } from 'state/context';
import ChallengesPage from 'pages/ChallengesPage';
import InitContext from 'utils/initContext';

export const Routes: FC = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      InitContext(dispatch);
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={GlobalTheme}>
      <MyAppBar />
      <StBackgroundPaper>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/logout" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute
            exact
            path="/updateprofile"
            component={UpdateProfilePage}
          />
          <PrivateRoute exact path="/add" component={AddActivities} />
          <PrivateRoute
            exact
            path="/changepassword"
            component={ChangePasswordPage}
          />
          <PrivateRoute exact path="/map" component={MapPage} />
          <PrivateRoute exact path="/challenges" component={ChallengesPage} />
        </Switch>
      </StBackgroundPaper>
      <MyBottomNavigation />
    </ThemeProvider>
  );
};
