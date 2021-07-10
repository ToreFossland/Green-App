import React from 'react';
import StPaper from 'styledComponents/StPaper';
import StHeader from 'styledComponents/StHeader';
import StAvatar from 'styledComponents/StAvatar';
import StSubmitButton from 'styledComponents/StSubmitButton';
import { Container, TextField } from '@material-ui/core';

const UpdateProfileForm = (firstName: any, lastName: any, handleImageUpload: any, uploadedImage: any, onButtonClick: any) => {
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
                <div>
                <h3> New first name: </h3>
                {/* // <form noValidate autoComplete="off"> */}
                <TextField
                    id="changeFirstName"
                    label={firstName}
                    variant="outlined"
                />
                {/* // </form> */}
                </div>
                <div>
                <h3> New last name: </h3>
                {/* // <form noValidate autoComplete="off"> */}
                <TextField id="changeLastName" label={lastName} variant="outlined" />
                {/* // </form> */}
                </div>
            </StPaper>
            <StSubmitButton onClick={onButtonClick} >
                Save changes
            </StSubmitButton>
        </StPaper>
    )
}

export default UpdateProfileForm;