import { styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AccountCircle } from '@material-ui/icons';
import { useContext } from 'react';
import { GlobalContext } from 'state/context';
import React from 'react';

const StAvatar = styled(Avatar)({
  display: 'flex',
  fontSize: 60,
});

const StyledAvatar = () => {
  const { state } = useContext(GlobalContext);
  const firstLetter: any = state.user?.first_name.charAt(0);
  const secondLetter: any = state.user?.last_name.charAt(0);
  const nameInitials: string = firstLetter.concat(secondLetter);
  return <StAvatar>{nameInitials}</StAvatar>;
};

export default StyledAvatar;
