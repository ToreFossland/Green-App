import React from 'react';
import StHeader from 'styledComponents/StHeader';
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


function SettingsPage() {
    return (
        <StHeader>
            <ButtonGroup variant="contained">
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
        </StHeader>
    )
}

export default SettingsPage;