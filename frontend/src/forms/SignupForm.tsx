import React from "react";
import StSignUpPaper from "styledComponents/StSignUpPaper";
import StSubmitButton from "styledComponents/StSubmitButton";
import { Grid, TextField } from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import { Alert } from '@material-ui/lab';
import { Link } from "react-router-dom";


  const SignupForm = ({ email, onEmailChange, firstname, onFnameChange, lastname, onLnameChange, password, onPasswordChange, passwordConfirmation, onPasswordConfirmationChange, error, onSignupClick }
    : { email: string, onEmailChange: any, firstname: string, onFnameChange: any, lastname: string, onLnameChange: any, password: string, onPasswordChange: any, passwordConfirmation: string, onPasswordConfirmationChange: any, error: string, onSignupClick: any }
    ) => {
    return (

        <StSignUpPaper>
            <Grid container spacing={8} justifyContent="center" alignItems="flex-end">
                <Grid item>
                    <Face />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField
                        id="firstname"
                        label="First Name"
                        type="firstname"
                        value={firstname}
                        onChange={onFnameChange}
                        fullWidth
                        autoFocus
                        required
                    />
                </Grid>
            </Grid>
            <Grid container spacing={8} justifyContent="center" alignItems="flex-end">
                <Grid item>
                    <Face />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField
                        id="lastname"
                        label="Last Name"
                        type="lastname"
                        value={lastname}
                        onChange={onLnameChange}
                        fullWidth
                        autoFocus
                        required
                    />
                </Grid>
            </Grid>
            <Grid container spacing={8} justifyContent="center" alignItems="flex-end">
                <Grid item>
                    <Face />
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
                    <Fingerprint />
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
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Fingerprint />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                    <TextField
                        id="passwordConfirmation"
                        label="Confirm password"
                        type="password"
                        value={passwordConfirmation}
                        onChange={onPasswordConfirmationChange}
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
            <Grid container justifyContent="center">
                <StSubmitButton onClick = {onSignupClick} >Sign Up</StSubmitButton>
            </Grid>
            <Grid container justifyContent="center">
                <Link to={'/login' }> Already have an account? Click here to log in </Link>
            </Grid>
        </StSignUpPaper>
    )
}

export default SignupForm;