import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '95%',
  },
});

const marks = [
  {
    value: 0,
    label: 'None',
  },
  {
    value: 25,
    label: 'Low',
  },
  {
    value: 50,
    label: 'Average',
  },
  {
    value: 75,
    label: 'High',
  },
  {
    value: 100,
    label: 'Very high',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function SliderEffort() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Activity Effort
      </Typography>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}
