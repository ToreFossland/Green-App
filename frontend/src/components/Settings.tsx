import React from 'react';
import StPaper from 'styledComponents/StPaper';
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const Settings = ({
    onPasswordChange,
    onDelete
  }: {
    onPasswordChange: (e: any) => void;
    onDelete: (e: any) => void;
  }) => {
    return (
        <StPaper elevation={0}>
            <ButtonGroup orientation="vertical" variant="contained">
                <Button onClick={onPasswordChange} >
                    Change password
                </Button>

                <Button color="secondary" startIcon={<DeleteIcon />} onClick={onDelete} >
                    Delete user
                </Button>
            </ButtonGroup>
        </StPaper>
    )
}

export default Settings;