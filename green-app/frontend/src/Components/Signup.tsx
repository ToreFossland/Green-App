import Avatar from "@material-ui/core/Avatar";
import SubmitButton from "../styles/StSubmitButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
//import Users from "../Users.json";
//import Login from "./login";
import { Link as RouterLink } from "react-router-dom";
import Paper from "../styles/StPaper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
  })
);
export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </Grid>
          </Grid>
          <SubmitButton
            component={RouterLink}
            to="/login"
            //type="submit"
            //fullWidth
            //variant="contained"
            //color="primary"
          >
            Sign Up
          </SubmitButton>
          <Grid container justify="flex-end"></Grid>
        </form>
      </Paper>
    </Container>
  );
}
