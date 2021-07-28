import React, { useState } from 'react';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SliderEffort from './SliderEffort';
import IActivity from 'interfaces/IActivity';
import { Button } from '@material-ui/core';
import getPerformsActivities, { performsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';

export const  ActivityListItem = (props : IActivity) => {
  const [activityId] = useState<number>(props.id);
  const [error, setError] = useState<string>('');
  const { state, dispatch } = React.useContext(GlobalContext);
  const user = state.user!;


  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    try {
      console.log("User Id: ", user?.id, " activity Id: ", activityId, " date: ", " Today");
      const data = await performsActivity(user.id, activityId, "Hello World");
      if (data) {
        const myPerformsActivities = await getPerformsActivities();
        dispatch(performsActivities(myPerformsActivities));
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend
        setError(err);
      }
      console.log(error)
    }
  };

  return (
    <div>
      <ListItem style={{ justifyContent: 'center', width: '100%' }}>
        <div>
          <StFavorite />
          <label style={{ fontSize: '14pt' }}> {props.name} </label>
          <Button variant="contained" onClick={handleSubmit} color={'primary'} > Submit </Button>
          <SliderEffort />
        </div>
       
      </ListItem>
      <Divider component="li" />
    </div>
  );
};
