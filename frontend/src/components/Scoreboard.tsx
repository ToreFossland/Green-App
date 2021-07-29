import React, { useEffect, useState } from 'react';
import { ScorePost } from './ScorePost';
import { GlobalContext } from 'state/context';
import { Grid } from '@material-ui/core';
import { getUsers } from 'utils/user';
/* import { user } from 'state/user/userActions';
import getUser from 'utils/user';
 */
export default function Scoreboard() {
  const [users, setUsers] = useState<any>([]);
  const sortUsers = async () => {
    let users = await getUsers();
    return users;
  }

  console.log(users);

  //const sortedUsers = users.sort((a: any, b: any) => (a.points < b.points ? -1 : 1));


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
