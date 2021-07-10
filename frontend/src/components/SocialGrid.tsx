import React from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from 'components/ExamplePost';
import Post from './Post';

function SocialGrid() {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="stretch" >
            <Grid item>
                <RecipeReviewCard/>
            </Grid>
            <Grid item>
                <Post/>
            </Grid>
            <Grid item>
                <Post/>
            </Grid>
            <Grid item>
                <Post/>
            </Grid>
            <Grid item>
                <Post/>
            </Grid>
        </Grid>
    )
}

export default SocialGrid;
