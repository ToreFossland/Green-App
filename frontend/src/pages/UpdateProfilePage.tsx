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
  const { state, dispatch } = useContext(GlobalContext);
  const [error, setError] = useState<string>('');
  const [name, setName] = useState<string>('');
  // const [picture, setPicture] =
  const uploadedImage = React.useRef<HTMLImageElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleImageUpload: any = (e) => {
    const [file] = e!.target.files;
    if (file) {
      const reader = new FileReader();
      const { current }: any = uploadedImage;
      current.file = file;
      reader.onload = (e: any) => {
        const target: any = e?.target;
        if (target) {
          current.src = target?.result as any;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StPaper elevation={0}>
      <StAvatar />
      <div>
        <Container maxWidth="sm">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple={false}
          />
          <img
            ref={uploadedImage}
            style={{
              width: '75%',
              height: '100%',
              // position: 'absolute',
            }}
          />
        </Container>
      </div>
      <StHeader>
        <div>
          <h3> New first name: </h3>
          {/* // <form noValidate autoComplete="off"> */}
          <TextField id="changeFirstName" label={name} variant="outlined" />
          {/* // </form> */}
        </div>
        <div>
          <h3> New last name: </h3>
          {/* // <form noValidate autoComplete="off"> */}
          <TextField id="changeLastName" label={name} variant="outlined" />
          {/* // </form> */}
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
