import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './Post';
import { GlobalContext } from 'state/context';

function SocialGrid() {
    const {state } = useContext(GlobalContext);
    console.log(state.performsActivities);
    return (
        <Grid container direction="column" justifyContent="center" alignItems="stretch" >
            {/* item[2].id for å finne ut hvilken idrett */}
            {state.performsActivities && state.performsActivities?.map((item: any) =>   
                // <Grid item>
                    <Post key= {item[1].id} 
                    firstName = {item[0].first_name} lastName = {item[0].last_name} 
                    activityName = {item[2].name} date = {item[1].date}/>               
                // </Grid>
                )}
        </Grid>
    )
}

export default SocialGrid;
