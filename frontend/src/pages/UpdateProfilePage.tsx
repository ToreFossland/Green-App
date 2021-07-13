import React from 'react';
import { Grid, Button, TextField, Container } from '@material-ui/core';
import StSubmitButton from 'styledComponents/StSubmitButton';
import StAvatar from '../styledComponents/StAvatar';
import StHeader from '../styledComponents/StHeader';
import StPaper from '../styledComponents/StPaper';
import { useContext, useState } from 'react';
import { GlobalContext } from 'state/context';
import { useHistory } from 'react-router-dom';

function UpdateProfilePage() {
  const [name, setName] = useState<string>('');
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<string>('');
  const uploadedImage = React.useRef<image>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleImageUpload: any = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
    }
  };

  return (
    <StPaper elevation={0}>
      <StAvatar />
      <Container>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          multiple={false}
        />
        <img
          ref={uploadedImage}
          style={{
            width: '100%',
            height: '100%',
            // position: 'absolute',
          }}
        />
      </Container>
      <StHeader>
        <div>
          <h3> New name: </h3>
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
        Save changes
      </StSubmitButton>
    </StPaper>
  );
}

export default UpdateProfilePage;
