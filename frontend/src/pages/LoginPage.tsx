import React, { FC, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { login, isAuthenticated } from '../utils/auth';
import { GlobalContext } from 'state/context';
import { user } from 'state/user/userActions';
import { activities } from 'state/activities/activitiesActions';
import getUser from 'utils/user';
import getActivities from 'utils/activity';
import LoginForm from 'forms/LoginForm';

export const Login: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  //const [checked, setChecked] = React.useState(true);
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
        const myActivities = await getActivities();
        console.log(myActivities);
        dispatch(user(myUser));
        dispatch(activities(myActivities));
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
    <LoginForm
      email = {email}
      password = {password}
      error = {error}
      onEmailChange = {(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
      onPasswordChange = {(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
      onLoginClick = {handleSubmit}
      onSignupClick = {() => history.push('/signup')}
    />
  );
};

export default Login;
