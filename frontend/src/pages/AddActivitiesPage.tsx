import React from 'react';
import { ActivityListItem } from '../components/ActivityListItem';
import StPaper from '../styledComponents/StPaper';
import Calendar from '../components/Calendar';
import List from '@material-ui/core/List';
import { GlobalContext } from 'state/context';

export default function AddActivities() {
  const { state } = React.useContext(GlobalContext);
  const activities = state?.activities;

  return (
    <div>
      <StPaper elevation={0}>
        <Calendar />
        <List style={{ width: '100%' }}>
          {
            activities?.map(item => <ActivityListItem key = {item.id} id = {item.id} points = {item.points} name={item.name} />)
          }
        </List>
      </StPaper>
    </div>
  );
}
