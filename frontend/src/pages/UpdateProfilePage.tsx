import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StSubmitButton from 'styledComponents/StSubmitButton';
import StAvatar from '../styledComponents/StAvatar';
import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import { useContext, useState } from 'react';
import { GlobalContext } from 'state/context';
import { useHistory } from 'react-router-dom';

function UpdateProfilePage() {
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<string>('');

  return (
    <StPaper elevation={0}>
      <StHeader>
        <StAvatar />
        <div>
          <form noValidate autoComplete="off">
            <TextField id="changeName" label={name} variant="outlined" />
          </form>
        </div>
      </StHeader>

      <StSubmitButton
        onClick={(e) => {
          e.preventDefault();
          console.log('click');
        }}
      >
        Save
      </StSubmitButton>
    </StPaper>
  );
}

export default UpdateProfilePage;
