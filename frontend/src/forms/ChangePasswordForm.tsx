import React from 'react'
import StPaper from 'styledComponents/StPaper'
import StSubmitButton from 'styledComponents/StSubmitButton'
import StTextField from 'styledComponents/StTextField'

const ChangePasswordForm = ({
    onOldPasswordChange,
    onNewPasswordChange,
    onNewPasswordConfirmationChange,
    onSubmitButtonClick,
  }: {
    onOldPasswordChange: (e: any) => void;
    onNewPasswordChange: (e: any) => void;
    onNewPasswordConfirmationChange: (e: any) => void;
    onSubmitButtonClick: any;
  }) => {
    return (
        <StPaper elevation={0}>
            <StTextField
                required
                id="oldPassword"
                type="password"
                label={'Current Password'}
                variant="outlined"
                onChange={onOldPasswordChange}
            />
            <StTextField
                required
                id="newPassword"
                type="password"
                label={'New Password'}
                variant="outlined"
                onChange={onNewPasswordChange}
            />
            <StTextField
                required
                id="newPasswordConfirmation"
                type="password"
                label={'New Password'}
                variant="outlined"
                onChange={onNewPasswordConfirmationChange}
            />
            <StSubmitButton onClick={onSubmitButtonClick}>
                Save changes
            </StSubmitButton>
        </StPaper>
    )
}

export default ChangePasswordForm
