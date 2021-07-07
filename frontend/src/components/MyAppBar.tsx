import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../logo.png';
import { isAuthenticated } from '../utils/auth';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const [path, setPath] = React.useState("Home");

  useEffect(() => {
     return history.listen((location:any) => {
      console.log(location.pathname);
      if(location.pathname.valueOf === ("/profile").valueOf){
        console.log("true");
        setPath("Profile")
      }else if(location.pathname.valueOf === ("/activities").valueOf){
        setPath("Activities");
      }else{
        setPath("Home");
      }
     })
  },[history])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img src={logo} alt="Logo" className = {classes.image}/>
          <Typography variant="h6" className={classes.title}>
            {path}
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