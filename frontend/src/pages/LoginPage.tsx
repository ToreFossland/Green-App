import React, { FC, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { login, isAuthenticated } from '../utils/auth';
import { GlobalContext } from 'state/context';
import InitContext from 'utils/initContext';
import NewLoginForm from 'forms/NewLoginForm';

export const Login: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { dispatch } = useContext(GlobalContext);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      handleSubmit();
    }
  }

  const handleSubmit = async () => {
    setError('');
    try {
      const data = await login(email, password);
      if (data) {
        InitContext(dispatch);
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
    <NewLoginForm
      email={email}
      password={password}
      error={error}
      onEmailChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.currentTarget.value)
      }
      onPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value)
      }
      onLoginClick={handleSubmit}
      onSignupClick={() => history.push('/signup')}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Login;
