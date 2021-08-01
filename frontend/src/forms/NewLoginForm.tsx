import React from 'react';
import StPaper from 'styledComponents/StPaper';
import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import StSubmitButton from 'styledComponents/StSubmitButton';
import StTextField from 'styledComponents/StTextField';
import StHeader from 'styledComponents/StHeader';
import { LoginCarousel } from 'components/LoginCarousel';

const LoginForm = ({
    email,
    password,
    error,
    onEmailChange,
    onPasswordChange,
    onLoginClick,
    onSignupClick,
    onKeyPress
  }: {
    email?: string;
    password?: string;
    error?: string;
    onEmailChange: (e: any) => void;
    onPasswordChange: (e: any) => void;
    onLoginClick: any;
    onSignupClick: any;
    onKeyPress: any;
  }) => {
    return (
        <StPaper elevation={0} >
            <StHeader>
                <LoginCarousel />
            </StHeader>
            <StTextField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={onEmailChange}
                onKeyPress ={onKeyPress}
                autoFocus
                required
            />
            <StTextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                onKeyPress ={onKeyPress}
                required
            />
            <br />
            <Grid container alignItems="center" justifyContent="center" >
            {error && (
                <Grid item>
                <Alert severity="error">{error}</Alert>
                </Grid>
            )}
            </Grid>
            <Grid container justifyContent="center">
            {' '}
            <StSubmitButton onClick={onLoginClick}>Login</StSubmitButton>
            <StSubmitButton onClick={onSignupClick}>
                Sign Up
            </StSubmitButton>{' '}
            &nbsp;
            </Grid>
        </StPaper>
    )
};

export default LoginForm;