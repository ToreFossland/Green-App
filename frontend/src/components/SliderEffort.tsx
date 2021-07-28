import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const marks = [
  {
    value: 0,
    label: 'Minimal',
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
    label: 'Maximal',
  },
];

function valuetext(value: number) {
  return `${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
export function SliderEffort(props: any) {


  return (
    <div style={{width: '85%'}}>
      <Typography id="discrete-slider-restrict" color='textSecondary' gutterBottom>
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
        onChange={(_, value) => {
          props.onChangeEffort(value);
        }}
      />
    </div>
  );
}
