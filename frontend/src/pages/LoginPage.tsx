import React, { FC, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { login, isAuthenticated } from '../utils/auth';
import { GlobalContext } from 'state/context';
import { user } from 'state/user/userActions';
import { activities } from 'state/activities/activitiesActions';
import {getUser} from 'utils/user';
import getActivities from 'utils/activity';
import LoginForm from 'forms/LoginForm';
import getPerformsActivities from 'utils/performsActivities';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';

export const Login: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { dispatch } = useContext(GlobalContext);

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    try {
      const data = await login(email, password);
      if (data) {
        const myUser = await getUser();
        const myActivities = await getActivities();
        const myPerformsActivities = await getPerformsActivities();
        console.log(myPerformsActivities);
        dispatch(user(myUser));
        dispatch(activities(myActivities));
        dispatch(performsActivities(myPerformsActivities));
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
