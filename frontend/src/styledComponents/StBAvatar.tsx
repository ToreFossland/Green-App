import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useContext } from 'react';
import { GlobalContext } from 'state/context';
import React from 'react';

const StBAvatar = styled(Avatar)({
  display: 'flex',
  fontSize: 20,
  marginRight: '25px',
  marginLeft: '10px',
  height: '70px',
  width: '70px',
});

const StyledBAvatar = () => {
  const { state } = useContext(GlobalContext);
  if (state.user?.first_name && state.user?.last_name) {
    const firstLetter: any = state.user?.first_name.charAt(0);
    const secondLetter: any = state.user?.last_name.charAt(0);
    const nameInitials: string = firstLetter.concat(secondLetter);
    return <StBAvatar>{nameInitials}</StBAvatar>;
  }
  return <StBAvatar></StBAvatar>;
};

export default StBAvatar;
