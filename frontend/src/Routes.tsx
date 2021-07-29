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
import getUser from 'utils/user';
import getActivities from 'utils/activity';
import { user } from 'state/user/userActions';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';
import { activities } from 'state/activities/activitiesActions';
import getPerformsActivities from 'utils/performsActivities';
import ChallengesPage from 'pages/ChallengesPage';

export const Routes: FC = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const loadContext = async () => {
        const myUser = await getUser();
        const myActivities = await getActivities();
        const myPerformsActivities = await getPerformsActivities();
        console.log(myPerformsActivities);
        dispatch(user(myUser));
        dispatch(activities(myActivities));
        dispatch(performsActivities(myPerformsActivities));
      };
      loadContext();
    }
  }, [dispatch]);

  let date = Date.now();

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
