import React from 'react';
import { ScorePost } from './ScorePost';
import { GlobalContext } from 'state/context';
import { Grid } from '@material-ui/core';
import { getUsers } from 'utils/user';
/* import { user } from 'state/user/userActions';
import getUser from 'utils/user';
 */
export default function Scoreboard() {
  const { state } = React.useContext(GlobalContext);
  const users = getUsers();
  console.log(users);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      {/* {state.user?.map(user:any) => (
        <ScorePost ></ScorePost>
      }
      ))} */}
    </Grid>
  );
}
