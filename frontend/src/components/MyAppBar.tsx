import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import { isAuthenticated } from '../utils/auth';

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
        resizeMode: 'contain'
    }
  }),
);

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img src={logo} alt="Logo" className = {classes.image}/>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
  
      {isAuthenticated() ? (
        <Button color="inherit">Logout</Button>
      ) : (
        <div></div>
      )}
   
        </Toolbar>
      </AppBar>
    </div>
  );
}