import React from "react";
import { Grid } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { Link } from "react-router-dom";
import StPaper from "styledComponents/StPaper";
import StSubmitButton from "styledComponents/StSubmitButton";
import StTextField from "styledComponents/StTextField";


  const SignupForm = ({ email, onEmailChange, firstname, onFnameChange, lastname, onLnameChange, company, onCompanyChange, password, onPasswordChange, passwordConfirmation, onPasswordConfirmationChange, error, onSignupClick }
    : { email: string, onEmailChange: any, firstname: string, onFnameChange: any, lastname: string, onLnameChange: any, company: string, onCompanyChange: any, password: string, onPasswordChange: any, passwordConfirmation: string, onPasswordConfirmationChange: any, error: string, onSignupClick: any }
    ) => {
    return (

        <StPaper elevation={0}>
            <Grid container justifyContent="center">
                <p>
                    Already have an account? <Link to={'/login' }> Sign in </Link>
                </p>
            </Grid>
            <StTextField
                id="firstname"
                label="First Name"
                type="firstname"
                variant="outlined"
                value={firstname}
                onChange={onFnameChange}
                autoFocus
                required
            />
            <StTextField
                id="lastname"
                label="Last Name"
                type="lastname"
                variant="outlined"
                value={lastname}
                onChange={onLnameChange}
                autoFocus
                required
            />
            <StTextField
                id="company"
                label="Company"
                type="company"
                variant="outlined"
                value={company}
                onChange={onCompanyChange}
                autoFocus
            />
            <StTextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={onEmailChange}
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
                required
            />
            <StTextField
                id="passwordConfirmation"
                label="Confirm password"
                type="password"
                variant="outlined"
                value={passwordConfirmation}
                onChange={onPasswordConfirmationChange}
                required
            />

            <br />
            <Grid container alignItems="center" justifyContent="center">
                {error && (
                <Grid item>
                    <Alert severity="error">{error}</Alert>
                </Grid>
                )}
            </Grid>
            <Grid container justifyContent="center">
                <StSubmitButton onClick = {onSignupClick} >Sign Up</StSubmitButton>
            </Grid>
        </StPaper>
    )
}

export default SignupForm;