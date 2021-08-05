import React from 'react';
import StPaper from 'styledComponents/StPaper';
import StHeader from 'styledComponents/StHeader';
import StAvatarBig from 'styledComponents/StAvatarBig';
import StSubmitButton from 'styledComponents/StSubmitButton';
import StTextField from 'styledComponents/StTextField';

const UpdateProfileForm = ({
  firstname,
  lastname,
  company,
  onFirstnameChange,
  onLastnameChange,
  onCompanyChange,
  onSubmitButtonClick,
}: {
  firstname?: string;
  lastname?: string;
  company?: string;
  onFirstnameChange: (e: any) => void;
  onLastnameChange: (e: any) => void;
  onCompanyChange: (e: any) => void;
  onSubmitButtonClick: any;
}) => {
  return (
    <StPaper elevation={0}>
      <StHeader>
        <StAvatarBig />
      </StHeader>
      <StPaper elevation={0}>
        <StTextField
          id="changeFirstName"
          label={'First Name'}
          defaultValue={firstname}
          variant="outlined"
          onChange={onFirstnameChange}
        />
        <StTextField
          id="changeLastName"
          label={'Last Name'}
          defaultValue={lastname}
          variant="outlined"
          onChange={onLastnameChange}
        />
        <StTextField
          id="changeCompany"
          label={'Company'}
          defaultValue={company}
          variant="outlined"
          onChange={onCompanyChange}
        />
      </StPaper>
      <StSubmitButton onClick={onSubmitButtonClick}>
        Save changes
      </StSubmitButton>
    </StPaper>
  );
};

export default UpdateProfileForm;
