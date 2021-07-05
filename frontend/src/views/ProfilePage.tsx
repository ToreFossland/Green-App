import React from "react";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';


function ProfilePage() {
  return (
    <Paper elevation={0}>
      <Paper>
        <h1> hallo </h1>
      </Paper>
      <div>
        {/* <p> {users[3].company} </p> */}
        <p> hallo </p>
        <h4> Dine poeng: hallo </h4>
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/updateprofile"
        >
          Oppdater profil
        </Button>
      </div>
    </Paper>
  );
}

export default ProfilePage;
