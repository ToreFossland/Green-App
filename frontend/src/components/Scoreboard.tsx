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

  useEffect(() => {
    const loadUsers = async () => {
      const userArray = await getUsers();
      setUsers(userArray);
    };
    loadUsers();
  }, []);

  const sortedUsers = users.sort((a: any, b: any) =>
    a.points < b.points ? -1 : 1
  );

  console.log(sortedUsers);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    ></Grid>
  );
}
