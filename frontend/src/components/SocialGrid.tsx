import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './Post';
import { GlobalContext } from 'state/context';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import filter from 'lodash/filter';
import StPaperGray from 'styledComponents/StPaperGray';

interface ISocialGrid {
  value: number;
}

function SocialGrid(props: ISocialGrid) {
  const { state } = useContext(GlobalContext);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState<string>('');

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    setDeleted(false);
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  let performsActivities = state.performsActivities;

  if (props.value) {
    performsActivities = filter(performsActivities, function (item) {
      return item[0].id === state.user?.id;
    });
  }

  return performsActivities === undefined || performsActivities.length === 0 ? (
    <StPaperGray>No activity has been added yet, try it out! </StPaperGray>
  ) : (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      {deleted && (
        <Grid item>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info">
              Post was deleted
            </Alert>
          </Snackbar>
        </Grid>
      )}
      {error && (
        <Grid item>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              Something went wrong
            </Alert>
          </Snackbar>
        </Grid>
      )}

      {performsActivities &&
        performsActivities
          ?.slice(0)
          .reverse()
          .map(
            (item: any) => (
              <Post
                key={item[1].id}
                id={item[1].id}
                user_id={item[0].id}
                firstName={item[0].first_name}
                lastName={item[0].last_name}
                activityName={item[2].name}
                date={item[1].date}
                points={item[2].points}
                effort={item[1].effort}
                setDeleted={setDeleted}
                setOpen={setOpen}
                error={error}
                setError={setError}
              />
            )
          )}
    </Grid>
  );
}

export default SocialGrid;
