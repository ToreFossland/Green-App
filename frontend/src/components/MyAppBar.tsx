import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { isAuthenticated, logout } from '../utils/auth';
import { useHistory } from 'react-router-dom';
import Hamburger from 'components/HamburgerMenu';
import GlobalTheme from 'GlobalTheme';

const theme = GlobalTheme;

const useStyles = makeStyles((theme) =>
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
  })
);

export default function MyAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [path, setPath] = React.useState('Home');

  useEffect(() => {
    //Add more routes here as they are implemented
    return history.listen((location) => {
      if (location.pathname === '/profile') {
        setPath('Profile');
      } else if (location.pathname === '/add') {
        setPath('Add activities');
      } else {
        setPath('Home');
      }
    });
  }, [history]);

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
              <Hamburger />
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
