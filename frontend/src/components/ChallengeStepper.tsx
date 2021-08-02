import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IChallenge from 'interfaces/IChallenge';
import { GlobalContext } from 'state/context';
import IActivity from 'interfaces/IActivity';
import { challenges } from 'state/challenges/challengesActions';
import { updateUser } from 'utils/auth';
import { getUser } from 'utils/user';
import { user } from 'state/user/userActions';
import IPerformsActivities from 'interfaces/IPerformsActivities';
import { filter } from 'lodash';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

const isThisMonth = (dateAdd: number) => {
  let timestamp: number = +dateAdd;
  let date: Date = new Date(timestamp);
  const today = new Date();
  return today.getMonth() == date.getMonth();
};
export default function ChallengeStepper(props: IChallenge) {
  const { state, dispatch } = React.useContext(GlobalContext);
  var activitiesArray = props.activity_id.split(',').map((a) => parseInt(a));
  const activitiesState = state?.activities;
  const [error, setError] = useState<string>('');
  const currentUser = state.user!;
  let index = 0;

  const wantedActivities = activitiesState?.filter((a) =>
    activitiesArray.includes(a.id)
  )!;

  console.log(wantedActivities);
  let performActivity = state?.performsActivities;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = wantedActivities;
  performActivity = filter(performActivity, function (item) {
    //Sorting activities based on user id and month
    return item[0].id === state.user?.id && isThisMonth(item[1].date);
  });
  let performActivityInitital = filter(performActivity, function (item) {
    return item[1].activities_id === wantedActivities[0].id;
  });
  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(
    performActivityInitital.length <= 0
  );

  const handleDisabled = (currentActivity: number) => {
    performActivity = filter(performActivity, function (item) {
      return item[1].activities_id === wantedActivities[currentActivity].id;
    });
    return performActivity;
  };

  const handleAddChallenge = async (_: React.MouseEvent) => {
    index += 1;
    console.log(index);
    setDisabledBtn(handleDisabled(index).length <= 0);
    console.log(disabledBtn);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      setError('');
      try {
        const data = await updateUser(
          currentUser.id,
          currentUser.email,
          currentUser.points + props.points
        );

        if (data) {
          const myUser = await getUser();
          dispatch(user(myUser));
        }
      } catch (err) {
        if (err instanceof Error) {
          // handle errors thrown from frontend
          setError(err.message);
          console.log(error);
        } else {
          // handle errors thrown from backend
          setError(err);
          console.log(error);
        }
      }
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((activity, key) => (
          <Step key={activity.id}>
            <StepLabel>{activity.name}</StepLabel>
            <StepContent>
              <Typography>
                You must complete <b>{activity.name}</b> to continue.
              </Typography>
            </StepContent>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={disabledBtn}
                    onClick={handleAddChallenge}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? 'Finish Challenge'
                      : 'Next Step'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            All steps completed! You got {props.points} points!
          </Typography>
        </Paper>
      )}
    </div>
  );
}
