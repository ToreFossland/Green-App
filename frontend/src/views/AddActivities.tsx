import React from 'react';
import StSwitch from '../styledComponents/StSwitch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import StPaper from '../styledComponents/StPaper';

export default function AddActivities() {
    return (
    <StPaper elevation={0}>
        <FormControl component="fieldset">
        <FormLabel component="legend" >Activities today</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={<StSwitch/>}
                    label="Gilad Gray"

                    />
                    <FormControlLabel
                    control={<StSwitch/>}
                    label="Gilad Gray"
                    />
                    <FormControlLabel
                    control={<StSwitch/>}
                    label="Gilad Gray"
                />
                </FormGroup>
        </FormControl>
    </StPaper>
    )
}
