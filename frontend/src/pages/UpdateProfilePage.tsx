import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import StAvatar from '../styledComponents/StAvatar';
import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import { useContext, useState } from "react";
import { GlobalContext } from 'state/context';
import { user } from 'state/user/userActions';
import { useHistory } from 'react-router-dom';
import getUser from 'utils/user';

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
            <StHeader>
              <Button variant="contained" color='primary' onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Save
              </Button>

              <Button variant="contained" onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Change password
              </Button>

              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={(e) => {
                  e.preventDefault();
                  console.log('click');
                  }} >
                  Delete user
              </Button>
            </StHeader>

        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            console.log('click');
          }}
        >
          Endre passord
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={(e) => {
            e.preventDefault();
            console.log('click');
          }}
        >
          Slett bruker
        </Button>
    </StPaper>
  );
}

export default UpdateProfilePage;
