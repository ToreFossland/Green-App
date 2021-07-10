import React from "react";
import StSignUpPaper from "styledComponents/StSignUpPaper";
import StSubmitButton from "styledComponents/StSubmitButton";
import { Grid, TextField } from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import { Alert } from '@material-ui/lab';

const SignupForm = ({ email, onEmailChange, password, onPasswordChange, passwordConfirmation, onPasswordConfirmationChange, error, onButtonClick }
    : { email: string, onEmailChange: any, password: string, onPasswordChange: any, passwordConfirmation: string, onPasswordConfirmationChange: any, error: string, onButtonClick: any }
    ) => {

    return (
        <StSignUpPaper>
            <Grid container spacing={8} alignItems="flex-end">
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
                <StSubmitButton onClick = {onButtonClick} >Sign Up</StSubmitButton>
            </Grid>
        </StSignUpPaper>
    )
}

export default SignupForm;