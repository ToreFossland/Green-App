import React, { FC, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { signUp, isAuthenticated } from '../utils/auth';
import SignupForm from 'forms/SignupForm';
import { user } from 'state/user/userActions';
import { GlobalContext } from 'state/context';
import getUser from 'utils/user';

export const SignUpPage: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { dispatch } = useContext(GlobalContext);

  const handleSubmit = async (_: React.MouseEvent) => {
    // Password confirmation validation
    if (password !== passwordConfirmation) setError('Passwords do not match');
    else {
      setError('');
      try {
        const data = await signUp(
          email,
          firstname,
          lastname,
          password,
          passwordConfirmation
        );

        if (data) {
          const myUser = await getUser();
          console.log(data);
          dispatch(user(myUser));
          history.push('/');
          // window.location.reload();
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
      onEmailChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.currentTarget.value)
      }
      onFnameChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setFirstname(e.currentTarget.value)
      }
      onLnameChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setLastname(e.currentTarget.value)
      }
      onPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value)
      }
      onPasswordConfirmationChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setPasswordConfirmation(e.currentTarget.value)
      }
      onButtonClick={handleSubmit}
    />
  );
};
