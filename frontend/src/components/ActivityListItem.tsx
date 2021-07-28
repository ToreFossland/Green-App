import React, { useState } from 'react';
import StFavorite from '../styledComponents/StFavorite';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { SliderEffort } from './SliderEffort';
import IActivity from 'interfaces/IActivity';
import { Button } from '@material-ui/core';
import { performsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';

export const ActivityListItem = (props: IActivity) => {
  const [activityId] = useState<number>(props.id);
  const [error, setError] = useState<string>('');
  const { state, dispatch } = React.useContext(GlobalContext);
  const user = state.user!;
  const [effort, setEffort] = useState<number>(0);
  const [id, setId] = useState<number>(props.id);
  const [points, setPoints] = useState<number>(props.points);
  const [name, setName] = useState<string>(props.name);

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');
    console.log(effort);

    try {
      console.log(
        'User Id: ',
        user?.id,
        ' activity Id: ',
        activityId,
        ' date: ',
        ' Today',
        ' effort: ',
        effort
      );
      const data = await performsActivity(
        user.id,
        activityId,
        'Hello World',
        effort
      );
      if (data) {
        //dispatch(performsActivities([...state.performsActivities, data]));
        console.log(data);
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
      } else {
        // handle errors thrown from backend,
        setError(err);
      }
      console.log(error);
    }
  };

  return (
    <div>
      <ListItem style={{ justifyContent: 'center', width: '100%' }}>
        <div>
          <StFavorite />
          <label style={{ fontSize: '14pt' }}> {props.name} </label>
          <Button variant="contained" onClick={handleSubmit} color={'primary'}>
            {' '}
            Submit{' '}
          </Button>
          <SliderEffort
            effort={effort}
            onChangeEffort={(newEffort: any) => {
              setEffort(newEffort);
            }}
          />
        </div>
      </ListItem>
      <Divider component="li" />
    </div>
  );
};
