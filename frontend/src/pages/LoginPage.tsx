import React, { FC, useContext, useState } from 'react';
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Lock, Eco } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import StSubmitButton from 'styledComponents/StSubmitButton';
import StPaper from 'styledComponents/StPaper';
import { login, isAuthenticated } from '../utils/auth';
import { GlobalContext } from 'state/context';
import { user } from 'state/user/userActions';
import getUser from 'utils/user';

export const Login: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [checked, setChecked] = React.useState(true);
  const { dispatch } = useContext(GlobalContext);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    try {
      const data = await login(email, password);
      if (data) {
        const myUser = await getUser();
        dispatch(user(myUser));
        history.push('/');
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend
        setError(err);
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <StPaper>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <Eco />
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            fullWidth
            autoFocus
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <Lock />
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <br />
      <Grid container alignItems="center">
        {error && (
          <Grid item>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between"></Grid>
      <Grid container justifyContent="center">
        {' '}
        <StSubmitButton onClick={handleSubmit}>Login</StSubmitButton>
        <StSubmitButton onClick={() => history.push('/signup')}>
          Sign Up
        </StSubmitButton>{' '}
        &nbsp;
      </Grid>
    </StPaper>
  );
};

export default Login;
