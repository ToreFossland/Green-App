import React from 'react';
import Grid from '@material-ui/core/Grid';
import StPaper from 'styledComponents/StPaper';
import RecipeReviewCard from 'components/ExamplePost';

function SocialGrid() {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="stretch" >
            <Grid item>
                <StPaper> Tore sykla til jobb i dag! </StPaper>
            </Grid>
            <Grid item>
                <StPaper> Benedicte spiste vegetarmat til middag i dag! </StPaper>
            </Grid>
            <Grid item>
                <StPaper> Therese sykla til jobb i dag! </StPaper>
            </Grid>
            <Grid item>
                <RecipeReviewCard/>
            </Grid>
            <Grid item>
                <RecipeReviewCard/>
            </Grid>
        </Grid>
    )
}

export default SocialGrid;
