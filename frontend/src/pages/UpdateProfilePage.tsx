import React from 'react';
import StPaper from 'styledComponents/StPaper';
import StHeader from 'styledComponents/StHeader';
import StAvatar from 'styledComponents/StAvatar';
import StTextField from 'styledComponents/StTextField';
import StSubmitButton from 'styledComponents/StSubmitButton';
import { Container, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import { GlobalContext } from 'state/context';

function UpdateProfilePage() {
  const { state, dispatch } = useContext(GlobalContext);

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
        <StHeader>
            <StAvatar />
        </StHeader>
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
        <StPaper elevation={0}>
            {/* <form noValidate autoComplete="off"> */}
            <StTextField
                id="changeFirstName"
                label={"First Name"}
                defaultValue={state.user?.first_name}
                variant="outlined"
            />
            <StTextField id="changeLastName" label={"Last Name"} defaultValue={state.user?.last_name} variant="outlined" />
            {/* </form> */}
        </StPaper>
        <StSubmitButton onClick={() => {console.log('click')}} >
            Save changes
        </StSubmitButton>
    </StPaper>
  );
}

export default UpdateProfilePage;
