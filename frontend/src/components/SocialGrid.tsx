import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './Post';
import { GlobalContext } from 'state/context';
import Alert from '@material-ui/lab/Alert';

function SocialGrid() {
    const {state } = useContext(GlobalContext);
    const [deleted, setDeleted] = useState<boolean>(false);

    return (
        <Grid container direction="column" justifyContent="center" alignItems="stretch" >
            {/* item[2].id for å finne ut hvilken idrett */}
            {deleted && (
                <Grid item>
                    <Alert severity="info" onClose={() => {setDeleted(false)}} > Post was deleted </Alert>
                </Grid>
                )}
                
            {state.performsActivities && state.performsActivities?.slice(0).reverse().map((item: any) =>
                // <Grid item>
                    <Post key= {item[1].id}
                    id = {item[1].id}
                    firstName = {item[0].first_name} lastName = {item[0].last_name}
                    activityName = {item[2].name} date = {item[1].date}
                    points = {item[2].points} effort = {item[1].effort}
                    setDeleted={setDeleted} />
                // </Grid>
                )}
        </Grid>
    )
}

export default SocialGrid;
