import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import StPaper from "../styles/StPaper";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  async function handleClick(e: any) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const requestOptions = {
      method: "POST",
      headers: {},
      body: formData,
    };
    fetch("http://127.0.0.1:8000/token", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // enter you logic when the fetch is successful
        console.log(data.access_token);
        localStorage.setItem("token", data.access_token);
        if(username && password){
          history.push("/profile");
        }
      })
      .catch((error) => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      });
    let token = localStorage.getItem("token");
    
  
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <StPaper>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Passord"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e: any) => {
              handleClick(e);
            }}
          >
            Login
          </Button>
        </form>
      </StPaper>
    </Grid>
  );
}
