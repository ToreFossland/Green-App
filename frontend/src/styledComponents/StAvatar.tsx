import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useContext } from 'react';
import { GlobalContext } from 'state/context';
import React from 'react';

const StAvatar = styled(Avatar)({
  display: 'flex',
  fontSize: 20,
  marginRight: 5,
});

const StyledAvatar = () => {
  const { state } = useContext(GlobalContext);
  if (state.user?.first_name && state.user?.last_name) {
    const firstLetter: any = state.user?.first_name.charAt(0);
    const secondLetter: any = state.user?.last_name.charAt(0);
    const nameInitials: string = firstLetter.concat(secondLetter);
    return <StAvatar>{nameInitials}</StAvatar>;
  }
  return <StAvatar></StAvatar>;
};

export default StyledAvatar;
