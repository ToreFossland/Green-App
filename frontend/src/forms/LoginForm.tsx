import React from 'react';
import StPaper from 'styledComponents/StPaper';
import { Grid, TextField } from '@material-ui/core';
import { Lock, Eco } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import StSubmitButton from 'styledComponents/StSubmitButton';

const LoginForm = ({
    email,
    password,
    error,
    onEmailChange,
    onPasswordChange,
    onLoginClick,
    onSignupClick
  }: {
    email?: string;
    password?: string;
    error?: string;
    onEmailChange: (e: any) => void;
    onPasswordChange: (e: any) => void;
    onLoginClick: any;
    onSignupClick: any;
  }) => {
    return (
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
                onChange={onEmailChange}
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
                onChange={onPasswordChange}
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