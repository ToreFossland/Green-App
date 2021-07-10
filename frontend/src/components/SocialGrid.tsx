import React from 'react';
import Grid from '@material-ui/core/Grid';
import StPaper from 'styledComponents/StPaper';

function SocialGrid() {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="stretch" >
            <Grid item>
                <StPaper> Tore sykla til jobb i dag! </StPaper>
            </Grid>
            <Grid item>
                <StPaper> Tore sykla til jobb i dag! </StPaper>
            </Grid>
            <Grid item>
                <StPaper> Tore sykla til jobb i dag! </StPaper>
            </Grid>
        </Grid>
    )
}

export default SocialGrid;
