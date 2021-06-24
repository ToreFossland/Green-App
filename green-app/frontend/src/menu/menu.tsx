import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {
    Switch,
    Route
  } from "react-router-dom";
import Login from "../Components/login";
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

import ProfilePage from '../Components/profile/profilePage';

const useStyles = makeStyles({
  root: {
    width: 500
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Router>
        <Box>
        <Paper style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <Link component={RouterLink} to="/home">
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            </Link>
            <Link component={RouterLink} to="/profile">
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
            </Link>
            </BottomNavigation>
            </Paper>
            <Switch>
                <Route path="/home" component={Login} />
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Box>
    </Router>
  );
}