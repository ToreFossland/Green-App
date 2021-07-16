import React, { FC, useState } from 'react';
import StSignUpPaper from 'styledComponents/StSignUpPaper';
import StSubmitButton from 'styledComponents/StSubmitButton';
import { Grid, TextField } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { signUp, isAuthenticated } from '../utils/auth';
import SignupForm from 'components/SignupForm';
import { Create } from 'react-admin';

export const SignUpPage: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');


  const handleSubmit = async (_: React.MouseEvent) => {
    // Password confirmation validation
    if (password !== passwordConfirmation) setError('Passwords do not match');
    else {
      setError('');
      try {
        const data = await signUp(email, firstname, lastname, password, passwordConfirmation);

        if (data) {
          history.push('/');
          window.location.reload();
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
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <SignupForm
      email={email}
      firstname={firstname}
      lastname={lastname}
      password={password}
      passwordConfirmation={passwordConfirmation}
      error={error}
      onEmailChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
      onFnameChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.currentTarget.value)}
      onLnameChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.currentTarget.value)}
      onPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
      onPasswordConfirmationChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.currentTarget.value)}
      onButtonClick={handleSubmit}
    />
  );
};
