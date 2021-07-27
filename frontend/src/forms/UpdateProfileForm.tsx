import React from 'react';
import StPaper from 'styledComponents/StPaper';
import StHeader from 'styledComponents/StHeader';
import StAvatar from 'styledComponents/StAvatar';
import StSubmitButton from 'styledComponents/StSubmitButton';
import { Container } from '@material-ui/core';
import StTextField from 'styledComponents/StTextField';

const UpdateProfileForm = ({
  firstname,
  lastname,
  handleImageUpload,
  uploadedImage,
  onFirstnameChange,
  onLastnameChange,
  onSubmitButtonClick,
}: {
  firstname?: string;
  lastname?: string;
  handleImageUpload: (e: any) => void;
  uploadedImage: any; // HTMLImageElement
  onFirstnameChange: (e: any) => void;
  onLastnameChange: (e: any) => void;
  onSubmitButtonClick: any;
}) => {
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
            alt="uploaded"
            style={{
              width: '75%',
              height: '100%',
              // alt: {'profile picture'},
              // position: 'absolute',
            }}
          />
        </Container>
      </div>
      <StPaper elevation={0}>
        <StTextField
          required
          id="changeFirstName"
          label={'First Name'}
          defaultValue={firstname}
          variant="outlined"
          onChange={onFirstnameChange}
        />
        <StTextField
          required
          id="changeLastName"
          label={'Last Name'}
          defaultValue={lastname}
          variant="outlined"
          onChange={onLastnameChange}
        />
      </StPaper>
      <StSubmitButton onClick={onSubmitButtonClick}>
        Save changes
      </StSubmitButton>
    </StPaper>
  );
};

export default UpdateProfileForm;