import React, { useState } from 'react';
import { SliderEffort } from './SliderEffort';
import IChallenge from 'interfaces/IChallenge';
import { GlobalContext } from 'state/context';
import StCard from 'styledComponents/StCard';
import { CardContent, CardActions, Typography } from '@material-ui/core';

export const ChallengeListItem = (props: IChallenge) => {
  const [activityId] = useState<number>(props.id);
  const [error, setError] = useState<string>('');
  const { state, dispatch } = React.useContext(GlobalContext);
  return (
    <StCard>
      <CardContent>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginBottom: 10, marginTop: 10 }}
        >
          {props.description}
        </Typography>
        <Typography variant="subtitle1" align="center">
          Total points:<b> {props.points}</b>
        </Typography>
      </CardContent>
    </StCard>
  );
};
