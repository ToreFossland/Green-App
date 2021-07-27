import React from 'react';
import StPaper from 'styledComponents/StPaper';
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Settings = ({
    onPasswordChange,
    onDelete
  }: {
    onPasswordChange: (e: any) => void;
    onDelete: (e: any) => void;
  }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <StPaper elevation={0}>
            <ButtonGroup orientation="vertical" variant="contained">
                <Button onClick={onPasswordChange} >
                    Change password
                </Button>

                <Button color="secondary" startIcon={<DeleteIcon />} onClick={handleClickOpen} >
                    Delete profile
                </Button>
            </ButtonGroup>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete your profile?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your profile will be permanently deleted. This cannot be reveresed.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} >
                    No, take me back
                </Button>
                <Button onClick={onDelete} color="secondary" autoFocus>
                    Yes, delete
                </Button>
                </DialogActions>
            </Dialog>
        </StPaper>
    )
}

export default Settings;