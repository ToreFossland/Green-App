import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Calendar(props: any) {
  const [textDate, setTextDate] = React.useState<Date>();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Choose activity date"
          value={textDate}
          onChange={(val) => {
            props.onChangeDate(val);
            setTextDate(val!);
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
