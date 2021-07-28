import React, { useState } from 'react';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SliderEffort from './SliderEffort';
import IActivity from 'interfaces/IActivity';
import { Button } from '@material-ui/core';
import { performsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';
import StCard from 'styledComponents/StCard';
import { CardHeader, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';

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
        //dispatch(performsActivities([...state.performsActivities, data]));
        console.log(data);
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
      <StCard>
        <CardContent>
            <Typography variant="body1" component="p">
                {props.name}
            </Typography>
        </CardContent>
        <CardActions style={{alignItems: 'center', justifyContent: 'center'}} >
          <SliderEffort />
        </CardActions>
      </StCard>


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
