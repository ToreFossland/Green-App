import React from 'react';
import IChallenge from 'interfaces/IChallenge';
import StCard from 'styledComponents/StCard';
import { CardContent, Typography } from '@material-ui/core';

export const ChallengeListItem = (props: IChallenge) => {
  return (
    <StCard elevation={0}>
      <CardContent>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
        <Typography variant="subtitle1" align="center">
          Total points:<b> {props.points}</b>
        </Typography>
      </CardContent>
    </StCard>
  );
};
