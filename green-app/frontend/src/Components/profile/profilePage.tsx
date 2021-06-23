import React from 'react'
import ImageAvatars from './avatar'
import users from "../../Users.json";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function ProfilePage() {
  const classes = useStyles();
  const [name, setName] = React.useState("name23");

  return (
    <div>
        <div>
            <ImageAvatars/>
            <div style = {{display:'flex', flexDirection: 'column'}} >
                <h3> {users[1].name} </h3>
                <p> {users[1].email} </p>
                <h4> Antall poeng: {users[1].points} </h4>
            </div>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label={users[1].email} variant="outlined" inputProps={{disabled:true}}/>
        </form>
    </div>
  );
}

export default ProfilePage
