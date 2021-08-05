import React from 'react';
import IChallenge from 'interfaces/IChallenge';
import StCard from 'styledComponents/StCard';
import { CardContent, Typography } from '@material-ui/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from 'state/context';
import { filter } from 'lodash';
import GlobalTheme from 'GlobalTheme';

const isThisMonth = (dateAdd: number) => {
  let timestamp: number = +dateAdd;
  let date: Date = new Date(timestamp);
  const today = new Date();
  return today.getMonth() === date.getMonth();
};

export const ChallengeListItem = (props: IChallenge) => {
  const { state } = React.useContext(GlobalContext);
  const checkColor = GlobalTheme.palette.success.main;
  var activitiesArray = props.activity_id.split(',').map((a) => parseInt(a));
  const wantedActivities = state?.activities?.filter((a) =>
    activitiesArray.includes(a.id)
  )!;
  let performActivity = state?.performsActivities;
  performActivity = filter(performActivity, function (item) {
    //Sorting activities based on user id and month
    return item[0].id === state.user?.id && isThisMonth(item[1].date);
  });

  function arrayContainsAnotherArray(arr1: any, arr2: any) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) return false;
    }
    return true;
  }

  const checkActivities =
    performActivity.length > 0 &&
    arrayContainsAnotherArray(
      wantedActivities.map((b: any) => b.id),
      performActivity.map((a: any) => a[1].activities_id)
    );

  return (
    <StCard elevation={0}>
      <CardContent>
        <Typography variant="h6" align="center">
          {checkActivities && (
            <FontAwesomeIcon color={checkColor} icon={faCheckCircle} />
          )}
        </Typography>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
        <Typography variant="subtitle1" align="center">
          Total points:<b> {props.points}</b>{' '}
        </Typography>
      </CardContent>
    </StCard>
  );
};
