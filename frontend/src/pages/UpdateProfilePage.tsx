import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import StAvatar from '../styledComponents/StAvatar';
import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import { useContext, useState } from "react";
import { GlobalContext } from 'state/context';
import { useHistory } from 'react-router-dom';

function UpdateProfilePage() {
    const history = useHistory();
    const [name, setName] = useState<string>('');
    const { state, dispatch } = useContext(GlobalContext);
    const [error, setError] = useState<string>('');

    return (
        <StPaper elevation = {0}>
            <StHeader>
                <StAvatar/>
                <div>
                    <form noValidate autoComplete="off">
                    <TextField id="changeName" label={name} variant="outlined" />
                    </form>
                </div>
            </StHeader>

              <Button variant="contained" color='primary' onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Save
              </Button>

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
    </StPaper>
  );
}

export default UpdateProfilePage;
