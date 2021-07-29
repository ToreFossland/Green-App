import React, { useState } from 'react';
import { SliderEffort } from './SliderEffort';
import IActivity from 'interfaces/IActivity';
import { Button } from '@material-ui/core';
import getPerformsActivities, { performsActivity } from 'utils/performsActivities';
import { GlobalContext } from 'state/context';
import { performsActivities } from 'state/performsActivities/performsActivitiesActions';
import StCard from 'styledComponents/StCard';
import { CardContent, CardActions, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export const ActivityListItem = (props: IActivity) => {
  const [activityId] = useState<number>(props.id);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const { state, dispatch } = React.useContext(GlobalContext);
  const [effort, setEffort] = useState<number>(0);
  const [date, setDate] = useState<number>(Date.now());
  const user = state.user!;

  // const convertDate = (date: Date) => {
  //   var dd = String(date.getDate()).padStart(2, '0');
  //   var mm = String(date.getMonth() + 1).padStart(2, '0');
  //   var yyyy = date.getFullYear();

  //   return dd + '/' + mm + '/' + yyyy;
  // };

  const handleAddActivity = async (_: React.MouseEvent) => {
    setError('');

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
        date,
        effort
      );
      if (data) {
        const myPerformsActivities = await getPerformsActivities();
        dispatch(performsActivities(myPerformsActivities));
        setSuccess(true);
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
    <StCard>
      <CardContent>
        <Typography variant="h6" align="center" >
            {props.name}
        </Typography>
      </CardContent>
      <CardActions style={{alignItems: 'center', justifyContent: 'center'}} >
        <SliderEffort
          effort={effort}
          onChangeEffort={(newEffort: any) => {
            setEffort(newEffort);
          }}
        />
      </CardActions>
      <CardActions style={{alignItems: 'center', justifyContent: 'center'}} >
        <Button variant="contained" onClick={handleAddActivity} color={'primary'}>
          {' '}Submit{' '}
        </Button>
      </CardActions>
      {success && (<Alert severity="success" onClose={() => {setSuccess(false)}} > Your activity was saved </Alert>)}
      {error && (<Alert severity="error" > Something went wrong </Alert>)}
    </StCard>
  );
};
