import React from 'react';
import { ActivityListItem } from '../components/ActivityListItem';
import StPaper from '../styledComponents/StPaper';
import StCalender from '../styledComponents/StCalender';
import List from '@material-ui/core/List';

export default function AddActivities() {
  return (
    <div>
      <StPaper>
        <StCalender />
        <List>
          <h2>Activities Today</h2>
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
        </List>
      </StPaper>
    </div>
  );
}
