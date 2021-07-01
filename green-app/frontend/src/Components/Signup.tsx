import Avatar from "@material-ui/core/Avatar";
//import Form from "../styles/StForm";
import SubmitButton from "../styles/StSubmitButton";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useState } from "react";
//import Users from "../Users.json";
//import Login from "./login";
import StPaper from "../styles/StPaper";
import { Link as RouterLink } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <StPaper>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form>
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
          <StPaper elevation={0}>
            <Button variant="contained" color="primary" component={RouterLink} to="/"> Sign Up </Button>
          </StPaper>
          <Grid container justify="flex-end"></Grid>
        </form>
      </StPaper>
    </Container>
  );
}
