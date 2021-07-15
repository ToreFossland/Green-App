import React from 'react';
import StPaper from 'styledComponents/StPaper';
import StHeader from 'styledComponents/StHeader';
import StAvatar from 'styledComponents/StAvatar';
import StTextField from 'styledComponents/StTextField';
import StSubmitButton from 'styledComponents/StSubmitButton';
import { Container } from '@material-ui/core';
import { useContext, useState } from 'react';
import { GlobalContext } from 'state/context';
import UpdateProfileForm from 'components/UpdateProfileForm';

function UpdateProfilePage() {
  const { state, dispatch } = useContext(GlobalContext);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');

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
    <UpdateProfileForm
      firstname={state.user?.first_name}
      lastname={state.user?.last_name}
      handleImageUpload={handleImageUpload}
      uploadedImage={uploadedImage}
      onFirstnameChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.currentTarget.value)}
      onLastnameChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.currentTarget.value)}
      onSubmitButtonClick={() => {console.log('click')}}
    />
  );
}

export default UpdateProfilePage;
