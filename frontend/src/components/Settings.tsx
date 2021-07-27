import React from 'react';
import StPaper from 'styledComponents/StPaper';
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


function Settings() {
    return (
        <StPaper elevation={0}>
            <ButtonGroup orientation="vertical" variant="contained">
                <Button onClick={(e) => {
                    e.preventDefault();
                    console.log('click');
                    }} >
                    Change password
                </Button>

                <Button color="secondary" startIcon={<DeleteIcon />} onClick={(e) => {
                    e.preventDefault();
                    console.log('click');
                    }} >
                    Delete user
                </Button>
            </ButtonGroup>
        </StPaper>
    )
}

export default Settings;