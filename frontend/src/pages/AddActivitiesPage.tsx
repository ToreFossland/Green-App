import React, { useEffect } from 'react';
import { ActivityListItem } from '../components/ActivityListItem';
import StPaper from '../styledComponents/StPaper';
import Calender from '../components/Calender';
import List from '@material-ui/core/List';
import { GlobalContext } from 'state/context';
import getActivities from 'utils/activity';
import { activities } from 'state/activities/activitiesActions';

export default function AddActivities() {
  const { state, dispatch } = React.useContext(GlobalContext);

  return (
    <div>
      <StPaper elevation={0}>
        <Calender />
        <List style={{ width: '100%' }}>
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
        </List>
      </StPaper>
    </div>
  );
}
