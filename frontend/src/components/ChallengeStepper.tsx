import React from 'react';
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

export default function ChallengeStepper(props: IChallenge) {
  const { state, dispatch } = React.useContext(GlobalContext);
  var activitiesArray = props.activity_id.split(',').map((a) => parseInt(a));
  const activitiesState = state?.activities;
  const wantedActivities = activitiesState?.filter((a) =>
    activitiesArray.includes(a.id)
  )!;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = wantedActivities;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((activity) => (
          <Step key={activity.id}>
            <StepLabel>{activity.name}</StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? 'Finish Challenge'
                      : 'Step Complete'}
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
