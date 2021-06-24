import React from 'react'
import ImageAvatars from './avatar'
import users from "../../Users.json";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import { MemoryRouter as Router } from 'react-router';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import UpdateProfile from './updateProfile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(),
      backgroundColor: theme.palette.primary.main,
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);



function ProfilePage() {
  const classes = useStyles();
  const [name, setName] = React.useState("name23");

  return (
    <div>
        <div className="App-header" style = {{display:'flex', flexDirection: 'row'}}>
            <ImageAvatars/>
            <h3> {users[3].name} </h3>
        </div>
        <p> {users[3].email} </p>
        <h4> Dine poeng: {users[3].points} </h4>


        <Router>
          <Button variant="contained" color="primary" component={RouterLink} to="updateProfile"  className="btn btn-primary" >
            Oppdater profil
          </Button>
          <Switch>
                <Route path="/updateProfile" component={UpdateProfile} />
          </Switch>
        </Router>





    </div>
  );
}

export default ProfilePage
