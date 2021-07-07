import React, { FC, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import StHeader from './styledComponents/StHeader';
import { Home, Login, SignUp, Protected, PrivateRoute } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';
import Profile from './views/Profile';
import GlobalTheme from "./GlobalTheme";
import StBox from './styledComponents/stBox';
import MyAppBar from './components/MyAppBar';
import MyBottomNavigation from './components/MyBottomNavigation';

  //const useStyles = makeStyles((theme) => ({
  // app: {
  //   textAlign: 'center',
  // },
  // header: {
  //   backgroundColor: 'primary',
  //   minHeight: '100vh',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   fontSize: 'calc(10px + 2vmin)',
  //   color: 'white',
  // },
  //}));

export const Routes: FC = () => {
  const history = useHistory();
  

  return (
    <ThemeProvider theme={GlobalTheme}>
      <MyAppBar/>
      <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <StBox>
        <StHeader>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact path="/logout"
            render={() => {
              logout();
              history.push('/');
              return null;
            }}
          />
          <PrivateRoute exact path="/protected" component={Protected} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </StHeader>
      </StBox>
    </Switch>
    <MyBottomNavigation/>
    </ThemeProvider>
  );
};