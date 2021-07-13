import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../logo.png';
import { isAuthenticated, logout } from '../utils/auth';
import { useHistory, useLocation } from 'react-router-dom';
import StHamburger from 'styledComponents/StHamburger';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image: {
      marginRight: theme.spacing(2),
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
  })
);

export default function MyAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [path, setPath] = React.useState('Home');
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      setPath('Profile');
    } else if (location.pathname === '/add') {
      setPath('Add activities');
    } else {
      setPath('Home');
    }
  })

  const handleLogoutClick = () => {
    logout();
    history.push('/logout');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isAuthenticated() ? (
            <>
              <StHamburger />
              <Typography variant="h6" className={classes.title}>
                {path}
              </Typography>
            </>
          ) : (
            <Typography variant="h6" className={classes.title}>
              Login
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
