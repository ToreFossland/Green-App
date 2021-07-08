import React from 'react';
import StSwitch from '../styledComponents/StSwitch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import StPaper from '../styledComponents/StPaper';
import StHeader from '../styledComponents/StHeader';
import StFavorite from '../styledComponents/StFavorite';

export default function AddActivities() {
    return (
        <div>
        <StHeader>
            <h1>Activities Today</h1>
        </StHeader>

        <StPaper elevation={0}>
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
        </StPaper>
        </div>
    )
}
