import React from 'react';
import StPaper from 'styledComponents/StPaper';
import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import StSubmitButton from 'styledComponents/StSubmitButton';
import StTextField from 'styledComponents/StTextField';
import StHeader from 'styledComponents/StHeader';
import { LoginCarousel } from 'components/LoginCarousel';
import { Link } from 'react-router-dom';

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
                variant="outlined"
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
                variant="outlined"
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
            <StSubmitButton onClick={onLoginClick}>Login</StSubmitButton>
            </Grid>
            <Grid container justifyContent="center">
                <p>
                    Don't have an account? <Link to={'/signup' }> Sign up </Link>
                </p>

            </Grid>
        </StPaper>
    )
};

export default LoginForm;