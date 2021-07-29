import React, { useState } from 'react';
import { SliderEffort } from './SliderEffort';
import IChallenge from 'interfaces/IChallenge';
import { Button } from '@material-ui/core';
import { GlobalContext } from 'state/context';
import StCard from 'styledComponents/StCard';
import { CardContent, CardActions, Typography } from '@material-ui/core';

export const ChallengeListItem = (props: IChallenge) => {
  console.log('here inside');
  const [activityId] = useState<number>(props.id);
  const [error, setError] = useState<string>('');
  const { state, dispatch } = React.useContext(GlobalContext);
  return (
    <StCard>
      <CardContent>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
        <Typography variant="h6" align="center">
          {props.description}
        </Typography>
        <CardActions
          style={{ alignItems: 'center', justifyContent: 'center' }}
        ></CardActions>
      </CardContent>
    </StCard>
  );
};
